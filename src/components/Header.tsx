import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "ABOUT", path: "/" },
    { label: "SKILLS", path: "/skills" },
    { label: "PROJECTS", path: "/projects" },
    { label: "CONTACT", path: "/contact" },
    { label: "BLOG", path: "/blog" },
  ];

  const getCurrentActiveItem = () => {
    const currentPath = location.pathname;
    const activeItem = navItems.find((item) => item.path === currentPath);
    return activeItem ? activeItem.label : "ABOUT";
  };

  const [activeItem, setActiveItem] = useState(getCurrentActiveItem());

  const handleItemClick = (label: string, path: string) => {
    setActiveItem(label);
    navigate(path);
  };

  return (
    <header className="hidden lg:flex w-16 xl:w-20 bg-white border-r border-gray-200 flex-col justify-between py-8">
      {/* Navigation Items */}
      <nav className="flex flex-col items-center space-y-8">
        {navItems.map((item) => (
          <div key={item.label} className="relative group">
            <button
              onClick={() => handleItemClick(item.label, item.path)}
              className="writing-vertical text-xs xl:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer transform rotate-180 focus:outline-none"
            >
              <span className="inline-block transform rotate-180 tracking-wider">
                {item.label}
              </span>
            </button>
            {activeItem === item.label && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 h-full bg-gray-900 animate-fade-in"></div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Decoration */}
      <div className="flex flex-col items-center space-y-4 text-gray-400">
        <div className="w-px h-8 bg-gray-300"></div>
      </div>
    </header>
  );
};

export default Header;
