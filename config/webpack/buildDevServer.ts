import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions, ConfigParams } from "./types";

const buildDevServer = (
  path: BuildOptions["path"],
  port: ConfigParams["port"],
): DevServerConfiguration => {
  return {
    static: path.output,
    port: port,
    hot: true,
  };
};

export { buildDevServer };
