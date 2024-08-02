import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface TabProps {
  page: "home" | "about" | "contact";
  children: React.ReactNode;
  additionalClassName?: string;
}

export const Tab: React.FC<TabProps> = ({
  page,
  children,
  additionalClassName,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const currentPath =
      location.pathname === "/" ? "home" : location.pathname.substring(1);
    setIsActive(currentPath === page);
  }, [location.pathname, page]);

  const navigateToPage = () => {
    navigate(`/${page}`);
  };

  return (
    <div
      onClick={navigateToPage}
      className={`text-sm cursor-pointer 	px-2 py-1 ${additionalClassName} ${
        isActive ? "bg-[#80AF81] text-white" : "bg-white text-gray-700"
      }`}
    >
      {children}
    </div>
  );
};
