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
    website: {
      url: '/website',
      static: false,
      resolve: true,
    },
  },
  exclude: ['public/**/*', '**/LICENSE'],
};
