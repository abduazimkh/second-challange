import AnnouncementBar from "../components/announcement-bar/AnnouncemetBar";
import Nav from "../layouts/nav/Nav";
import RouteController from "./routes";

const index = () => {
  return (
    <>
    <AnnouncementBar/>
      <Nav/>
      <RouteController/>
    </>
  )
}

export default index;