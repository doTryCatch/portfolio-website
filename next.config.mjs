// next.config.mjs
// import withMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: ["th.bing.com", "i.ytimg.com"],
  },
};

export default { ...nextConfig };
