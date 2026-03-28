/// <reference path="node_modules/webpack-dev-server/types/lib/Server.d.ts"/>

import webpack from "webpack";
import {
  buildConfig,
  buildLoaders,
  buildResolvers,
  buildDevServer,
  buildPlugins,
  ConfigParams,
} from "./config/webpack";

export default ({ production, port }: ConfigParams): webpack.Configuration => {
  const { mode, entry, path } = buildConfig(production, port);

  return {
    mode: mode,
    entry: entry,

    output: {
      path: path.output,
      filename: "main.[contenthash].js",
      clean: true,
    },
    devtool: "inline-source-map",

    module: {
      rules: buildLoaders(path),
    },
    resolve: buildResolvers(path),
    devServer: buildDevServer(path, port),
    plugins: buildPlugins(path),
  };
};
