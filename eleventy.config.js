export default async function(eleventyConfig) {
  eleventyConfig.setInputDirectory("source");
  eleventyConfig.addPassthroughCopy("source/assets");
}

