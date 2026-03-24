const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Passthrough copies — assets served as-is
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });

  // Watch CSS and JS for changes in dev mode
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  // Date filters for blog/news posts
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Limit filter for collections
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  // Reverse filter for newest-first ordering
  eleventyConfig.addFilter("reverse", (arr) => [...arr].reverse());

  // Collections
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/projects/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.addCollection("programs", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/programs/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.addCollection("news", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/news/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
