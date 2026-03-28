export type BuildOptions = {
  mode: "production" | "development";
  entry: string;
  path: {
    src: string;
    output: string;
    html: string;
  };
  port: number;
};

export type ConfigParams = { production?: boolean; port?: number };
