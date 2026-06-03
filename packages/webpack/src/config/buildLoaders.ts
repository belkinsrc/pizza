import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { TConfigParams } from "./types.ts";

const buildLoaders = (
  isProd: TConfigParams["isProd"],
): webpack.RuleSetRule[] => {
  return [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
    },
    {
      test: /\.css$/i,
      use: [
        "style-loader",
        isProd ? MiniCssExtractPlugin.loader : "",
        "css-loader",
        "postcss-loader",
      ],
    },
  ];
};

export { buildLoaders };
