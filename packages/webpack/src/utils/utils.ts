import { SINGLETONS } from "../consts.ts";
import type { TSharedPkg, TPkgDeps } from "./types.ts";

function normalizeVersion(v: string) {
  if (!v) return undefined;

  if (v.startsWith("workspace:")) return false;
  if (v.startsWith("catalog:")) return false;
  return v;
}

function getSharedConfig(deps: TPkgDeps = {}) {
  const shared: TSharedPkg = {};
  for (const name of SINGLETONS) {
    shared[name] = {
      singleton: true,
      requiredVersion: normalizeVersion(deps[name]),
    };
  }
  return shared;
}

export { getSharedConfig };
