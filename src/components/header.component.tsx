import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = (page: string) => {
    if (page === "about") {
      navigate("/about");
    } else if (page === "contact") {
      navigate("/contact");
    } else if (page === "home") {
      navigate("/");
    }
  };

  return (
    <header className="bg-red-200 py-4 px-6 flex items-center justify-between">
      <div className="flex flex-row items-center space-x-4">
        <div>hello</div>
        <nav className="flex pl-20 gap-8">
          <div
            onClick={() => onClickHandler("home")}
            className="text-sm text-gray-700 hover:text-gray-900 hidden sm:block cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => onClickHandler("about")}
            className="text-sm text-gray-700 hover:text-gray-900 hidden sm:block cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => onClickHandler("contact")}
            className="text-sm text-gray-700 hover:text-gray-900 hidden sm:block cursor-pointer"
          >
            Contact
          </div>
        </nav>
      </div>
      <div className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
        Login
      </div>
    </header>
  );
};

export default Header;
