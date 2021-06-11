// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
module.exports = {
  mount: {
    src: '/',
    public: '/',
  },
  exclude: ['**/*/LICENSE'],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  plugins: ['snowpack-plugin-relative-css-urls'],
};
