// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
module.exports = {
  mount: {
    src: '/',
    public: '/',
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
