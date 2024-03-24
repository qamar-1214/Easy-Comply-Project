import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-4">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
