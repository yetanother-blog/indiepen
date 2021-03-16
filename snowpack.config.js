// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
module.exports = {
  mount: {
    src: '/',
  },
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    target: 'es2018',
  },
};
