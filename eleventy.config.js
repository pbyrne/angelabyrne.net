import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
  eleventyConfig.setInputDirectory("source");
  eleventyConfig.addPassthroughCopy("source/assets");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });
}

