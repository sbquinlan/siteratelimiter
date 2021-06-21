
module.exports = api => {
  const isTest = api.env('test');
  if (isTest) {
    return {
      "presets": ["@parcel/babel-preset-env"],
      "plugins": [
        "@parcel/babel-plugin-transform-runtime",
        "@babel/plugin-transform-modules-commonjs"
      ]
    };
  }
  return {
    "presets": ["@parcel/babel-preset-env"],
    "plugins": ["@parcel/babel-plugin-transform-runtime"]
  }
};
