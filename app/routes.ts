import { type RouteConfig, index, route } from "@react-router/dev/routes";

const Routes = [
  index("routes/home.tsx"),
  route("/text-utils", "routes/text-utils.tsx"),
] satisfies RouteConfig;

export default Routes;
