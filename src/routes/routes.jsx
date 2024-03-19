import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Profile from "./profile/Profile";

const Home = lazy(() => import("../pages/home/Home"));
const Auth = lazy(() => import("./auth"));
const SignUp = lazy(() => import("./auth/sign-up/SignUp"));
const Login = lazy(() => import("./auth/login/Login"));

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
    },
    {
      path: "auth/*",
      element: (
        <Suspense fallback={<p>loading...</p>}>
          <Auth />
        </Suspense>
      ),
      children: [
        {
          // path: "login",
          index: true,
          element: (
            <Suspense fallback={<p>Loading...</p>} >
              <Login />
            </Suspense>
          )
        },
        {
          path: "sign-up",
          element: (
            <Suspense fallback={<p>Loading...</p>} >
              <SignUp />
            </Suspense>
          )
        }
      ]
    }

  ]);
  return routes;
};



export default RouteController;
