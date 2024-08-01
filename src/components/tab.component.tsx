import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface TabProps {
  page: string;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ page, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(
    location.pathname.substring(1) === page ||
      (location.pathname === "/" && page === "home")
  );

  useEffect(() => {
    const path = location.pathname.substring(1);
    setIsActive(path === page || (path === "" && page === "home"));
  }, [location, page]);

  const handleClick = () => {
    navigate(`/${page}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`text-sm cursor-pointer rounded-full px-[10px] py-[1px] ${
        isActive ? "bg-[#80AF81] text-white " : "bg-white text-gray-700"
      }`}
    >
      {children}
    </div>
  );
};
