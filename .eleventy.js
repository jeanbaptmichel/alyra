module.exports = function (eleventyConfig) {
  // brand/ is a design-reference folder (BRAND-GUIDELINES.md, tokens.css, icons) —
  // passthrough-copy it as-is, don't let Eleventy render BRAND-GUIDELINES.md as a page.
  eleventyConfig.ignores.add("src/brand/**/*.md");

  // Static passthroughs
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/brand");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/favicon-16.png");
  eleventyConfig.addPassthroughCopy("src/favicon-32.png");
  eleventyConfig.addPassthroughCopy("src/favicon-48.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon-180.png");
  eleventyConfig.addPassthroughCopy("src/icon-192.png");
  eleventyConfig.addPassthroughCopy("src/icon-512.png");
  eleventyConfig.addPassthroughCopy("src/icon-maskable-512.png");

  const slugify = (str) =>
    str
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // Blog collections split by language — same lang-split pattern as Kollder,
  // but here both EN and FR live under one src/blog/ tree (src/blog/en/,
  // src/blog/fr/) rather than everything under /blog/ with a lang field only.
  eleventyConfig.addCollection("blogEn", (api) =>
    api.getFilteredByGlob("src/blog/en/**/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("blogFr", (api) =>
    api.getFilteredByGlob("src/blog/fr/**/*.md").sort((a, b) => b.date - a.date)
  );

  // Pillar collections — 5-pillar architecture from alyra-blog-architecture.md
  ["category-education", "vertical-playbooks", "technical-execution", "tools-measurement", "original-data"].forEach(
    (pillar) => {
      eleventyConfig.addCollection(`pillar-${pillar}`, (api) =>
        api.getFilteredByGlob("src/blog/**/*.md").filter((item) => item.data.pillar === pillar)
      );
    }
  );

  // Computed permalink: /blog/{category}/{slug}/ (EN) or /fr/blog/{category}/{slug}/ (FR)
  // per the site & language architecture section of alyra-blog-architecture.md.
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (!data.category || !data.title || !data.lang) return data.permalink;
      const categorySlug = slugify(data.category);
      const titleSlug = slugify(data.title);
      const base = data.lang === "fr" ? "fr/blog" : "blog";
      return `/${base}/${categorySlug}/${titleSlug}/index.html`;
    },
  });

  eleventyConfig.addFilter("slugify", slugify);

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
