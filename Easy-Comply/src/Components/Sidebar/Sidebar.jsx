import { useState } from "react";
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const links = [
  { name: "Dashboard", icon: <FaHome />, link: "/" },
  { name: "Integration", icon: <FaChartBar />, link: "/integration" },
  { name: "Market Place", icon: <FaUsers />, link: "/marketplace" },
  { name: "Usage", icon: <FaCog />, link: "/usage" },
  { name: "Verification", icon: <FaQuestionCircle />, link: "/verification" },
];

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isShrink, setIsShrink] = useState(false);
  const handleShrink = () => {
    if (isShrink) {
      setIsShrink(false);
    } else {
      setIsShrink(true);
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div
      className={`bg-white  px-3 sticky top-0 h-[100vh] ${
        isShrink ? "w-18" : "lg:w-56  w-18 "
      }  flex flex-col gap-1 py-4 pl-3 lg:pr-3  shadow-xl`}
    >
      <div onClick={handleShrink} className="flex justify-end mb-5">
        <svg
          className={`cursor-pointer ${
            isShrink ? "rotate-180" : "hidden lg:flex"
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.834 15.332L10.834 10.332L15.834 5.33203"
            stroke="#A5ADBA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 15.332L4 10.332L9 5.33203"
            stroke="#A5ADBA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {links.map(({ name, icon, link }, index) => (
        <Link to={link} key={link} className="w-full">
          <button
            key={link}
            className={`flex items-center justify-start gap-3  w-full px-3 py-3 text-md font-semibold rounded transition-colors duration-300 ease-in-out ${
              activeLink === link
                ? "bg-[#fff6e5] border-l-4 lg:border-l-[6px] border-primary text-gray-900"
                : " text-gray-900 hover:bg-orange-100 hover:text-gray-900"
            } ${index !== 0 ? "mt-2" : ""}`}
            onClick={() => handleLinkClick(link)}
          >
            <span className="text-lg text-center text-primary  ">{icon}</span>

            <span
              className={`ml-2  ${isShrink ? "hidden" : "hidden lg:inline"}`}
            >
              {name}
            </span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
