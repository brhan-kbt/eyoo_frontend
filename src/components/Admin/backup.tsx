import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/eyoologo.png";

const AdminDashboardw = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [activeItem, setActiveItem] = useState(0);
  
  const handleClick = (index) => {
    setActiveItem(index);
  };
  
  const getMenuItemClasses = (index) => {
    let classes = "block  hover:bg-white hover:text-black px-6 py-2 text-sm font-bold font-lg";
    if (activeItem === index) {
      classes += " bg-white text-gray-800";
    } else {
      classes += "bg-gray-800 text-white";
    }
    return classes;
  };
  
  const menuItems = [
    { label: "Daily Quotes", url: "/daily-quotes" },
    { label: "Main Image", url: "/main-image" },
    { label: "User Email", url: "/user-email" },
    { label: " Video Link", url: "/video-link" },
    { label: "Ask Question", url: "/ask-question" },
    { label: "User Answer", url: "/user-answer" },
    { label: "Winners", url: "/winners" },
    { label: "Ideas", url: "/ideas" }
  ];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            onClick={toggleSidebar}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <h1 className="text-white text-lg font-medium">Admin Dashboard</h1>
          </div>
        </div>
      </div>
      <div className="flex-1 flex">
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } bg-gray-900 text-gray-400 pt-5 pb-4 w-64`}
        >
          <div className="flex items-center justify-between px-4">
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
          <nav className="mt-5 flex-1">
          {menuItems.map((item, index) => (
            <li
                key={index}
                className={getMenuItemClasses(index)}
                onClick={() => handleClick(index)}
              >
                <Link to={item.url}>{item.label}</Link>
              </li>
            ))}


            
            {/* <NavLink
              to="/dashboard"
              activeClassName="bg-gray-800 text-white"
              className="block  hover:bg-white hover:text-black px-6 py-2 text-sm font-bold font-lg"
            >
              Daily Quotes
            </NavLink>
            <NavLink
              to="/users"
              activeClassName="bg-white- text-white"
              className="block hover:bg-white hover:text-black px-6 py-2 text-sm font-bold font-lg"
            >
              Main Image
            </NavLink>
            <NavLink
              to="/settings"
              activeClassName="bg-gray-800 text-white"
              className="block hover:bg-white hover:text-black px-6 py-2 text-sm font-bold font-lg"
            >
              User Email
            </NavLink>

            <NavLink
              to="/dashboard"
              activeClassName="bg-gray-800 text-white"
              className="block hover:bg-white hover:text-black px-6 py-2 text-sm font-bold font-lg "
            >
              Video Link
            </NavLink>
            <NavLink
              to="/users"
              activeClassName="bg-gray-800 text-white"
              className="block hover:bg-white hover:text-black px-6 py-2 text-sm font-bold font-lg"
            >
              Ask Question
            </NavLink>
            <NavLink
              to="/settings"
              activeClassName="bg-gray-800 text-white"
              className="block hover:bg-white hover:text-black px-6 py-2 text-sm font-bold font-lg"
            >
              User Answer
            </NavLink>

            <NavLink
              to="/users"
              activeClassName=" bg-gray-800 text-white"
              className="block  hover:bg-white hover:text-black px-6 py-2 text-sm font-bold font-lg"
            >
              Winners
            </NavLink>
            <NavLink
              to="/settings"
              activeClassName="bg-gray-800 text-white"
              className="block hover:bg-white hover:text-black px-6 py-2 text-sm font-bold font-lg"
            >
              Ideas
            </NavLink> */}
          </nav>
        </div>
        <div className="flex-1 bg-gray-100 p-8 w-4/5" >
          Route components for different pages go here
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardw;
