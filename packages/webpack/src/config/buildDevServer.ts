import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { TConfigParams, TPaths } from "./types.ts";

const buildDevServer = (paths: TPaths, port: TConfigParams["port"]): DevServerConfiguration => {
  return {
    static: paths.output,
    port: port,
    hot: true,
  };
};

export { buildDevServer };
