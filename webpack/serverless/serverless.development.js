import TerserPlugin from 'terser-webpack-plugin';
import merge from 'webpack-merge';
import { EnvironmentPlugin, DefinePlugin } from 'webpack';
import { WaitPlugin } from '../plugins/wait'

import { src, build } from '../paths'
import { config as serverless } from './serverless.common';

const asset = require('../../build/asset-manifest.json');

const config = merge(serverless('development'), {
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          parse: {
            ecma: 8
          }
        }
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'resolve-url-loader',
            options: {
              root: src
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      BROWSER: false
    }),
    new WaitPlugin(`${build}/client-assets.json`),
    new DefinePlugin({
      __ASSETS__: JSON.stringify(asset)
    }),
  ],
})

export { config }
