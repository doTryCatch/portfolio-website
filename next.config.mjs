import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    dangerouslyAllowSVG: true, // Enables SVG rendering
    domains: [
      "th.bing.com",
      "cdn.simpleicons.org",
      "img.icons8.com",
      "i.ytimg.com",
      "codewithsadee.github.io",
    ], // Add trusted domains
  },
};

// Add MDX support
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm], // Add markdown plugins here
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
