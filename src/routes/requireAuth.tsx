import { useState } from "react";
import NavBar from "../components/NavBar/navBar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/NavBar/sideBar";
import "../styling/layout.style.scss"
import { useUsersContext } from "../context/usersContext";

const RequireAuth: React.FC = () => {
    const [showNavBar, setShowNavBar] = useState(false)
  return (
    <div className="layout-wrapper">
      <NavBar />
      <div className="wrapper-container">
        <div className="sidebar">
          <SideBar show={showNavBar} setShow={setShowNavBar}/>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RequireAuth;
