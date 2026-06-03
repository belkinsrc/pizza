type TBuildOptions = {
  mode: "production" | "development";
  entry: string;
  port: number;
};

type TPaths = {
  entry: string;
  output: string;
  html: string;
};

type TConfigParams = { isProd?: boolean; port?: number };

export type { TBuildOptions, TConfigParams, TPaths };
