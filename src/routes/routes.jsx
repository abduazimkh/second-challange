import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../pages/home/Home"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const RouteController = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Home />
        </Suspense>
      )
    },
    {
      path: "/dashboard",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Dashboard />
        </Suspense>
      )
    }
  ]);
  return routes;
};



export default RouteController;
