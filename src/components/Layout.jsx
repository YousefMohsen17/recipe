import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Footer from "./Footer";
function Layout() {
  return (
    <div>
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
