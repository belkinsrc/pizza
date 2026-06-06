import type { TBuildOptions } from "./types.ts";

const buildConfig = (isProd: boolean | undefined, port: number | undefined): TBuildOptions => {
  return {
    entry: "./src/index.ts",
    mode: isProd ? "production" : "development",
    port: port ?? 3000,
  };
};

export { buildConfig };
