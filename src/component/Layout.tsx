import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="container mx-auto px-10">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      {/* <div>
        
      </div> */}
    </div>
  );
};
export default Layout;
