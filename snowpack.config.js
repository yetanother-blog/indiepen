// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
module.exports = {
  mount: {
    src: {
      url: '/',
      static: false,
      resolve: true,
    },
    public: {
      url: '/',
      static: true,
      resolve: false,
    },
  },
  exclude: ['public/**/*', '**/*/LICENSE'],
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        name: 'Copy fonts from node_modules/@fontsource to public/fonts',
        cmd: 'npm run copy-fonts',
        watch: 'npm run copy-fonts:watch',
      },
    ],
  ],
};
