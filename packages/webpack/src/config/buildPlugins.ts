import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleFederationPlugin } from "@module-federation/enhanced/webpack";
import type { TPaths } from "./types.ts";

const buildPlugins = (paths: TPaths, federationConfig): webpack.WebpackPluginInstance[] => {
  return [
    new ModuleFederationPlugin(federationConfig),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin(),
  ];
};

export { buildPlugins };
