import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

const Routes = [
  layout("./Layouts/Main.tsx", [
    index("routes/home.tsx"),
    route("/text-utils", "routes/text-utils.tsx"),
    route("/textanalyzer", "routes/Textanalyzer.tsx"),
  ]),
] satisfies RouteConfig;

export default Routes;
