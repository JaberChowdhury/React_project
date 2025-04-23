import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";
export default [
  layout("./layouts/Mainlayouts.tsx", [index("routes/home.tsx")]),
  layout("./layouts/Doctorlayouts.tsx", [route("doctor", "routes/Doctor.tsx")]),
  layout("./layouts/Lawyerlayouts.tsx", [route("lawyer", "routes/Lawyer.tsx")]),
] satisfies RouteConfig;
