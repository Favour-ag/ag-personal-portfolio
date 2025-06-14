import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MobileHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", path: "/about" },
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
    setIsMenuOpen(false); // Close menu on mobile when item is clicked
  };

  return (
    <header className="lg:hidden bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">AG</div>

        {/* Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.label, item.path)}
                className={`text-left px-2 py-2 text-sm font-medium transition-colors duration-200 relative ${
                  activeItem === item.label
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {activeItem === item.label && (
                  <div className="absolute left-0 top-0 w-1 h-full bg-gray-900"></div>
                )}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;
