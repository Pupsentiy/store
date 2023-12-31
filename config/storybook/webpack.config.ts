import path from "path";
import webpack from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push(".ts", ".tsx");

  config!.module!.rules = config!.module!.rules!.map(
    // @ts-ignore
    (rule: webpack.RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    }
  );

  config!.module!.rules!.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config!.module!.rules.push(buildCssLoader(true));
  config!.plugins!.push(
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(true),
      _API_: JSON.stringify(""),
      _PROJECT_: JSON.stringify("storybook"),
    })
  );

  return config;
};
