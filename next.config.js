// next.config.js
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
  devtool: 'source-map',

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    // Add Web3Modal specific externals
    config.externals = config.externals || [];
    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    return config;
  },
  // Optional: Add this if using SWCMinify
  // swcMinify: false,
};