import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

const buildLoaders = (path: BuildOptions["path"]): webpack.RuleSetRule[] => {
  return [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.css$/i,
      include: path.src,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
      ],
    },
  ];
};

export { buildLoaders };
