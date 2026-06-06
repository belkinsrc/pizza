import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { createRequire } from "module";

import type { TConfigParams } from "./types.ts";

const require = createRequire(import.meta.url);

const buildLoaders = (
  isProd: TConfigParams["isProd"],
): webpack.RuleSetRule[] => {
  return [
    {
      test: /\.tsx?$/,
      use: require.resolve("ts-loader"),
    },
    {
      test: /\.css$/i,
      use: [
        isProd ? MiniCssExtractPlugin.loader : require.resolve("style-loader"),
        require.resolve("css-loader"),
        require.resolve("postcss-loader"),
      ],
    },
  ];
};

export { buildLoaders };
