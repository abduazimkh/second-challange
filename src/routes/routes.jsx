import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"));

const RouteController = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Home />
        </Suspense>
      )
    }
  ]);
  return routes;
};


export default RouteController;

