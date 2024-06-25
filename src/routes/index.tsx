import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Todos = lazy(() => import("../pages/Todos"));
const Todosv2 = lazy(() => import("../pages/Todosv2"));
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../Layouts/index"));

const Loading = () => {
  return <div>Loading....</div>;
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout>
          <Home />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "/todos",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout>
          <Todos />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "/todosv2",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout>
          <Todosv2 />
        </Layout>
      </Suspense>
    ),
  },
]);

export default routers;
