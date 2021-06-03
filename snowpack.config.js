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
  devOptions: {
    openUrl: '?url=http%3A%2F%2Flocalhost%3A8080%2Fexample',
  },
  exclude: ['public/**/*'],
};
