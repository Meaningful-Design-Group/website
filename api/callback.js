// OAuth callback — GitHub redirects here after the user authorises the app.
// Exchanges the temporary code for an access token, then passes it back to
// the Decap CMS popup via postMessage so the editor can open.

module.exports = async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing OAuth code.');
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        code,
      }),
    });

    const data = await response.json();

    if (!data.access_token) {
      console.error('GitHub OAuth error:', data);
      return res.status(401).send('GitHub authorisation failed. Check your OAuth app credentials.');
    }

    // Decap CMS listens for this exact postMessage format in the popup window.
    const token = data.access_token;
    res.setHeader('Content-Type', 'text/html');
    res.send(`<!DOCTYPE html>
<html>
<head><title>Authorising…</title></head>
<body>
<p>Authorising, please wait…</p>
<script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:{"token":"${token}","provider":"github"}',
      e.origin
    );
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body>
</html>`);
  } catch (err) {
    console.error('OAuth callback error:', err);
    res.status(500).send('Server error during authorisation.');
  }
};
