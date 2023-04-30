import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink, Route,Router,Routes,Switch, useNavigate } from "react-router-dom";

import logo from "../../assets/eyoologo.png";
import Quote from "../pages/quote";
import Question from "../pages/questions";
import Image from "../pages/image";
import Subscribers from "../pages/subscribers";
// import Videos from "../pages/videos";
import Contents from "../pages/videos";
import Ideas from "../pages/ideas";
import Winners from "../pages/winners";
import Responses from "../pages/answers";
import Dashboard from "../pages/dashboard";
import { useStateContext } from "../../contexts/context";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const {userToken,setUserToken}=useStateContext();
  const router=useNavigate();

  const logout=()=>{
    localStorage.removeItem('eyoo_token');
    router('/eyoofun/login');
  }

  const menuItems = [
    { label: "Dashboard", url: "/admin" },
    // { label: "Daily Quotes", url: "/admin/qoutes" },
    // { label: "Main Image", url: "/admin/images" },
    { label: "Subscribers", url: "/admin/subscribers" },
    { label: "Contents", url: "/admin/contents" },
    { label: "Ask Question", url: "/admin/questions" },
    { label: "User Answer", url: "/admin/responses" },
    { label: "Winners", url: "/admin/winners" },
    { label: "Ideas", url: "/admin/ideas" },
    // { label: "Logout",onClick:logout }
  ];

 
  const handleClick = (index) => {
    setActiveItem(index);
  };


  const getMenuItemClasses = (index) => {
    let classes =
      "block  hover:bg-white hover:text-black px-6 py-3 text-sm font-bold font-lg";
    if (activeItem === index) {
      classes += " bg-white text-gray-800";
    } else {
      classes += "bg-gray-800 text-white";
    }
    return classes;
  };



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      setIsSidebarOpen(true);
    }
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  
  if(!userToken){
    return  <Navigate to='/eyoofun/login'/>
  }
  

  return (
    <div className="flex flex-col ">
      <div className="bg-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center">
            <img src={logo} className="h-6 w-auto mr-2" alt="Logo" />
            <h1 className="text-white text-lg font-medium">
              Admin Dashboard
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 flex">
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } bg-gray-900 text-gray-400 pt-5 pb-4 w-64 z-50 absolute  left-0 min-h-screen md:relative md:min-h-screen transition-all duration-300 ease-in-out  md:bg-gray-900 md:text-gray-400 `}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <div>
              <img src={logo} className="h-8 w-auto" alt="Logo" />
            </div>
            <div>
              <button
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                onClick={toggleSidebar}
              >
                {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg> */}
              </button>
            </div>
          </div>
          <nav className="mt-5 flex-1 py-5">
            {menuItems.map((item, index) => (
              <Link to={item.url}>
              <li
                  key={index}
                  className={getMenuItemClasses(index)}
                  onClick={() => handleClick(index)}
                >
                  {item.label}
                </li>
               
                </Link>
              ))}
               <button className="block text-white hover:text-red px-6 py-3 text-sm font-bold font-lg" onClick={logout}>Logout</button>
          </nav>
        </div>
        <div className="flex-1 bg-gray-100 p-8 w-4/5" >
            <Routes>
                <Route path="/" Component={Dashboard} />
                <Route path="/qoutes" Component={Quote} />
                <Route path="/questions" Component={Question}/>

                <Route path="/images" Component={Image} />
                <Route path="/subscribers" Component={Subscribers}/>
                <Route path="/contents"    Component={Contents}/>

                <Route path="/winners" Component={Winners} />
                <Route path="/responses" Component={Responses}/>
                <Route path="/ideas"    Component={Ideas}/>
            </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
