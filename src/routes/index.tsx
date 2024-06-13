import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Todos = lazy(() => import("../components/Todos"));
const Todosv2 = lazy(() => import("../components/Todosv2"));
const Home = lazy(() => import("../pages/Home"));

const Loading = () => {
  return <div>Loading....</div>;
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/todos",
    element: (
      <Suspense fallback={<Loading />}>
        <Todos />
      </Suspense>
    ),
  },
  {
    path: "/todosv2",
    element: (
      <Suspense fallback={<Loading />}>
        <Todosv2 />
      </Suspense>
    ),
  },
]);

export default routers;
