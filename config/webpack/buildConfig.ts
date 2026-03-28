import path from "path";
import { fileURLToPath } from "url";
import { BuildOptions } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildConfig = (production: boolean, port: number): BuildOptions => {
  return {
    entry: "./src/index.ts",
    mode: production ? "production" : "development",
    port: port ?? 3000,
    path: {
      src: path.resolve(__dirname, "src"),
      output: path.resolve(__dirname, "dist"),
      html: path.resolve(__dirname, "index.html"),
    },
  };
};

export { buildConfig };
