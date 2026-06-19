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

const paths = {
  entry: path.resolve(__dirname, "src"),
  output: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "index.html"),
};

const federationConfig = {
  name: "pizza_admin",
  filename: "remoteEntry.js",
  exposes: {
    "./routes": "./src/app/router/routes.ts",
  },
  shared: getSharedConfig(pkg.dependencies),
  dts: true,
};

export default ({ isProd, port }: TConfigParams): webpack.Configuration => {
  const { mode, entry } = buildConfig(isProd, port);

  return {
    mode: mode,
    entry: entry,

    output: {
      path: paths.output,
      publicPath: `${PUBLIC_PATH}:${port ?? 3001}/`,
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
