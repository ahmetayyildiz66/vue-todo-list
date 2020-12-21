module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/sass/main.scss";
            `
      }
    }
  }
}
