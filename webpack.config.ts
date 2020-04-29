/* eslint-disable prettier/prettier */
import path from 'path';
import HTMLPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const PATHS = {
  src: path.resolve(path.join(__dirname, './src')),
  dist: path.resolve(path.join(__dirname, './dist')),
  public: path.resolve(path.join(__dirname, './public')),
};

export default {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '~': PATHS.src,
    },
  },
  devServer: {
    contentBase: PATHS.public,
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  entry: path.join(PATHS.src, 'index'),
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
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
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: require.resolve('file-loader'),
              limit: 8192,
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HTMLPlugin({
      template: path.join(PATHS.public, 'index.html'),
    }),
  ],
};