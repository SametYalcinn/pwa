module.exports = {
  publicPath: "./",
  pwa: {
    name: "R2R",
    themeColor: "#ff5000",
    msTileColor: "#da532c",
    // appleMobileWebAppCapable: "no",
    // appleMobileWebAppStatusBarStyle: "black",

    manifestOptions: {
      // display: 'standalone',
      background_color: "#D87024",
    },

    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
    // workboxOptions: {
    // swSrc is required in InjectManifest mode.
    // swSrc: 'dev/sw.js',
    // // ...other Workbox options...
    // }
  },
};
