import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Profile from "./profile/Profile";

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
    },
    {
      path: "profile",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Profile />
        </Suspense>
      )
    }

  ]);
  return routes;
};



export default RouteController;
