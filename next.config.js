/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            // rehypePlugins: [rehypeExternalLinks],
            // remarkPlugins: [remarkGfm, remarkFrontmatter, [remarkEmbedder, { transformers: [oembedTransformer] }]],
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
