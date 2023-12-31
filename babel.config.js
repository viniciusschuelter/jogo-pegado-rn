module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
     [
         "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            images: "./assets/images",
          },
        }
      ]
    ],
  };
};
