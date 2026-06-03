import webpack from "webpack";
import type { TPaths } from "./types.ts";

const buildResolvers = (paths: TPaths): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": paths.entry,
    },
  };
};

export { buildResolvers };
