/* eslint-disable prettier/prettier */
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
  env: {
    development: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  },
};