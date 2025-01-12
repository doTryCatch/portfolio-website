import createMDX from "@next/mdx";

import remarkGfm from 'remark-gfm'
/** @type {import('next').NextConfig} */

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    domains: ["th.bing.com","img.icons8.com", "i.ytimg.com","codewithsadee.github.io"], // Add i.ytimg.com to the domains array
  },
};
// next.config.js
 

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})
 

export default withMDX(nextConfig);
