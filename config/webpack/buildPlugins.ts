import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

const buildPlugins = (
  path: BuildOptions["path"],
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({ template: path.html }),
    new MiniCssExtractPlugin(),
  ];
};

export { buildPlugins };
