// OAuth entry point — redirects the browser to GitHub's authorization page.
// Decap CMS opens this in a popup when the user clicks "Login with GitHub".

module.exports = function handler(req, res) {
  const params = new URLSearchParams({
    client_id: process.env.OAUTH_CLIENT_ID,
    scope: 'repo,user',
    redirect_uri: `https://${req.headers.host}/api/callback`,
  });

  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
};
