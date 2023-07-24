import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import {
  type BuildEnv,
  type BuildMode,
  type BuildPaths,
} from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };
  const mode: BuildMode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
};
