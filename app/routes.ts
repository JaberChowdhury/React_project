import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("/Listed-books", "routes/Listed-books.tsx"),
  route("/book/:id", "routes/Book.tsx"),
] satisfies RouteConfig;
