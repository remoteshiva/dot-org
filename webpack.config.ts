/* eslint-disable prettier/prettier */

import path from 'path';
import HTMLPlugin from 'html-webpack-plugin';

const PATHS = {
  src: path.resolve(path.join(__dirname, './src')),
  dist: path.resolve(path.join(__dirname, './dist')),
  public: path.resolve(path.join(__dirname, './public')),
};

export default {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
  },
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: PATHS.dist,
    publicPath: PATHS.public,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }, { loader: 'eslint-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.postcss$/,
        use: [
          'style-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ['file-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(PATHS.public, 'index.html'),
    }),
  ],
};
