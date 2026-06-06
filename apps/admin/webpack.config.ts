import webpack from "webpack";
import path from "path";
import { fileURLToPath } from "url";
import {
  buildConfig,
  buildLoaders,
  buildResolvers,
  buildDevServer,
  buildPlugins,
  type TConfigParams,
} from "@pizza/webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({ isProd, port }: TConfigParams): webpack.Configuration => {
  const paths = {
    entry: path.resolve(__dirname, "src"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "index.html"),
  };

  const { mode, entry } = buildConfig(isProd, port);

  return {
    mode: mode,
    entry: entry,

    output: {
      path: paths.output,
      filename: "main.[contenthash].js",
      clean: true,
    },
    devtool: "inline-source-map",

    module: {
      rules: buildLoaders(isProd),
    },
    resolve: buildResolvers(paths),
    devServer: buildDevServer(paths, port),
    plugins: buildPlugins(paths),
  };
};
