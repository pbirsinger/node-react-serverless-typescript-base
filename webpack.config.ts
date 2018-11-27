import * as slsw from "serverless-webpack";
import * as webpack from 'webpack';
import * as nodeExternals from "webpack-node-externals";
import CopyWebpackPlugin from "copy-webpack-plugin";

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  devtool: 'nosources-source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        // include: /client|server/,
        include: /server/,
        exclude: /node_modules/,
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
  resolve: {
    modules: ['node_modules', 'server'],
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "client/build", to: "build" }], {
      debug: "info"
    })
  ]
};

// export default config;