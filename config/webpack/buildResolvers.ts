import webpack from "webpack";
import { BuildOptions } from "./types";

const buildResolvers = (path: BuildOptions["path"]): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.src,
    },
  };
};

export { buildResolvers };
