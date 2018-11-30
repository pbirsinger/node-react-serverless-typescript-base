const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.ts',
      '.tsx',
    ]
  },
  devtool: "nosources-source-map",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
            {
                loader: 'tslint-loader',
                options: { /* Loader options go here */ }
            }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: /server/,
        exclude: /node_modules|client/
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "client/build", to: "build" }], {
      debug: "info"
    })
  ]
};
