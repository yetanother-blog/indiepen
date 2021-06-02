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
  devOptions: {
    openUrl: '?url=http%3A%2F%2Flocalhost%3A8080%2Fexample'
  }
};
