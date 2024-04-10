import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="layout">
      <TopNav showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className="layout-bottom">
        {showSidebar && <Sidebar />}
        <Outlet />
      </div>
    </div>
  )
}

export default Layout