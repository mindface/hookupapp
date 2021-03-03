module.exports = {
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData:
          '@import "https://fonts.googleapis.com/icon?family=Material+Icons";'
      }
    }
  }
};
