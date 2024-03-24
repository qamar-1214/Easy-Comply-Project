import Logo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const handleMenu = () => {
    if (!menuOpen) {
      setmenuOpen(true);
    } else {
      setmenuOpen(false);
    }
  };
  return (
    <nav className="bg-secondary">
      <div className="py-3 px-8 flex justify-between items-center">
        <div>
          <img src={Logo} width="130px" alt="Easy Comply Logo" />
        </div>
        <div onClick={handleMenu} className="relative">
          <div className="flex items-center text-white cursor-pointer">
            <div className="flex items-center mr-3">
              <img className="mr-2" src={Avatar} width="35" />
              <p>Mr. John Doe</p>
            </div>
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-xl font-bold"
            >
              <path
                d="M16 9L11 14L6 9"
                stroke="#A5ADBA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {menuOpen && (
            <div className="absolute top-12 right-12 w-56 bg-white shadow-xl z-[9999] px-3 py-5 rounded-lg">
              <div className="flex flex-col items-start justify-center gap-2">
                <a className="text-primary" href="#">
                  Dashboard
                </a>
                <a className="text-primary" href="#">
                  Usage
                </a>
                <a className="text-primary" href="#">
                  Verifications
                </a>
                <a className="text-primary" href="#">
                  Integration
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
