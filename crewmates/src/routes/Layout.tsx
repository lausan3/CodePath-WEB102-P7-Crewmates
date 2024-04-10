import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import MiniSidebar from "../components/MiniSidebar";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="layout">
      <TopNav showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className="layout-bottom">
        {showSidebar === true ? <Sidebar /> : <MiniSidebar />}
        <Outlet />
      </div>
    </div>
  )
}

export default Layout