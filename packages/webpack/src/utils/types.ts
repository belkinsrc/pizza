import { SINGLETONS } from "../consts.ts";

type TSingleton = (typeof SINGLETONS)[number];

type TSharedItem = {
  singleton: boolean;
  requiredVersion?: string | boolean;
};

type TSharedPkg = Partial<Record<TSingleton, TSharedItem>>;

type TPkgDeps = Record<string, string>;

export type { TSharedPkg, TPkgDeps };
