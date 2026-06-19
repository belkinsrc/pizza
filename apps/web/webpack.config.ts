import webpack from "webpack";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import {
  buildConfig,
  buildLoaders,
  buildResolvers,
  buildDevServer,
  buildPlugins,
  type TConfigParams,
} from "@pizza/webpack";
import { getSharedConfig } from "@pizza/webpack/utils";
import pkg from "./package.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_PATH = process.env.PUBLIC_PATH;
const REMOTE_PUBLIC_PATH = process.env.REMOTE_PUBLIC_PATH;
const REMOTE_PORT = process.env.REMOTE_PORT;

const paths = {
  entry: path.resolve(__dirname, "src"),
  output: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "index.html"),
};

export default ({ isProd, port }: TConfigParams): webpack.Configuration => {
  const { mode, entry } = buildConfig(isProd, port);

  const federationConfig = {
    name: "pizza_web",
    remotes: {
      pizza_admin: `pizza_admin@${REMOTE_PUBLIC_PATH}:${REMOTE_PORT}/remoteEntry.js`,
    },
    shared: getSharedConfig(pkg.dependencies),
    dts: true,
  };

  return {
    mode: mode,
    entry: entry,

    output: {
      path: paths.output,
      publicPath: `${PUBLIC_PATH}:${port ?? 3000}/`,
      filename: "main.[contenthash].js",
      clean: true,
    },
    devtool: "inline-source-map",

    module: {
      rules: buildLoaders(isProd),
    },
    resolve: buildResolvers(paths),
    devServer: buildDevServer(paths, port),
    plugins: buildPlugins(paths, federationConfig),
  };
};
