import { useLocation } from "react-router-dom";
import AnnouncementBar from "../components/announcement-bar/AnnouncemetBar";
import Nav from "../layouts/nav/Nav";
import RouteController from "./routes";

const index = () => {
  const { pathname } = useLocation();

  return (
    <>
      {
        !pathname.includes("/auth") && !pathname.includes("/dashboard") && !pathname.includes("/profile") &&
        <>
          <AnnouncementBar />
          <Nav />
        </>
      }
      <RouteController />
    </>
  )
}

export default index;