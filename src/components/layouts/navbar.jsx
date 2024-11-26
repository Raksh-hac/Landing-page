import { useState } from "react";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ToggleSwitch from "../atoms/signInButton";

// Content component with subheadings logic
const Content = ({ selected, dir, selectedHeading, setSelectedHeading }) => {
  return (
    <motion.div
      key={selected}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="w-full p-2 rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, x: dir === "l" ? 60 : dir === "r" ? -40 : 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {selected === "services" ? (
          <div className="grid grid-cols-[150px_1fr] gap-6 mt-1 mb-1">
            <div className="text-left">
              <h3
                onMouseEnter={() => setSelectedHeading("Web Development")}
                className={`font-semibold text-white mb-1 cursor-pointer relative underline underline-offset-4 hover:text-[#B497D6] ${selectedHeading === "Web Development" ? "text-[#B497D6]" : ""
                  }`}
              >
                Web Development
                <span className="absolute top-0 left-[100%] h-24 w-[1px] bg-gradient-to-b from-[#832232] to-[#B497D6] ml-2"></span>
              </h3>
              <h3
                onMouseEnter={() => setSelectedHeading("Game Development")}
                className={`font-semibold text-white mb-1 cursor-pointer relative underline underline-offset-4 hover:text-[#B497D6] ${selectedHeading === "Game Development" ? "text-[#B497D6]" : ""
                  }`}
              >
                Game Development
              </h3>
            </div>
            <div className="mr-1"> 
              <a href="services.jsx">
              <ul className="text-left">
                {selectedHeading === "Web Development" ? (
                  <>
                    <li className="text-gray-200">Responsive Design</li>
                    <li className="text-gray-200">E-commerce Solutions</li>
                    <li className="text-gray-200">SEO Optimization</li>
                  </>
                ) : selectedHeading === "Game Development" ? (
                  <>
                    <li className="text-gray-200">2D/3D Game</li>
                    <li className="text-gray-200">Cross-Platform Games</li>
                    <li className="text-gray-200">Virtual Reality</li>
                  </>
                ) : null}
              </ul>
              </a>
            </div>
          </div>
        ) : selected === "assetStore" ? (
          <div className="grid grid-cols-[150px_1fr] gap-6 mt-1 mb-1">
            <div className="text-left">
              <h3
                onMouseEnter={() => setSelectedHeading("Game Assets")}
                className={`font-semibold text-white mb-1 cursor-pointer relative underline underline-offset-4 hover:text-[#B497D6] ${selectedHeading === "Game Assets" ? "text-[#B497D6]" : ""
                  }`}
              >
                Game Assets
                <span className="absolute top-0 left-[100%] h-20 w-[1px] bg-gradient-to-b from-[#832232] to-[#B497D6] ml-2"></span>
              </h3>
              <h3
                onMouseEnter={() => setSelectedHeading("UI Kits")}
                className={`font-semibold text-white mb-1 cursor-pointer underline underline-offset-4 hover:text-[#B497D6] ${selectedHeading === "UI Kits" ? "text-[#B497D6]" : ""
                  }`}
              >
                UI Kits
              </h3>
            </div>
            <div>
              <ul className="text-left">
                {selectedHeading === "Game Assets" ? (
                  <>
                    <li className="text-gray-200">2D Characters</li>
                    <li className="text-gray-200">3D Models</li>
                    <li className="text-gray-200">Textures</li>
                  </>
                ) : selectedHeading === "UI Kits" ? (
                  <>
                    <li className="text-gray-200">Icons</li>
                    <li className="text-gray-200">Buttons</li>
                    <li className="text-gray-200">Layouts</li>
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
};

// Navbar component
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [assetStoreOpen, setAssetStoreOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedHeading, setSelectedHeading] = useState("Web Development"); // Default first heading selected

  const handleMouseEnter = (menu) => {
    setDropdownVisible(true);
    setServicesOpen(menu === "services");
    setAssetStoreOpen(menu === "assetStore");
    setSelectedHeading(menu === "services" ? "Web Development" : "Game Assets");
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setServicesOpen(false);
    setAssetStoreOpen(false);
  };

  return (
    <nav className="bg-transparent p-10 w-full relative">
      <div className="flex justify-between items-center mx-auto max-w-6xl px-8 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="/react.svg" alt="Logo" className="h-8 w-8" />
            <span className="ml-2 font-bold text-white text-[30px]">LOGO</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 relative">
          <a href="#" className="text-[20px] text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#B497D6] hover:to-[#832232]">
            Home
          </a>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-[20px] text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#B497D6] hover:to-[#832232]">
              Services
            </a>
            {/* Dropdown with Border */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-full left-[-110%] w-96 max-w-md p-4 mt-1 border-[2px] border-transparent bg-black"
                  style={{
                    borderImage: "linear-gradient(to right, #832232, #B497D6) 1",
                    borderRadius: "10px"
                  }}
                >
                  <Content
                    selected="services"
                    dir="r"
                    selectedHeading={selectedHeading}
                    setSelectedHeading={setSelectedHeading}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("assetStore")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-[20px] text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#B497D6] hover:to-[#832232]">
              Asset Store
            </a>
            {/* Dropdown with Border */}
            <AnimatePresence>
              {assetStoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-full left-[-190%] w-96 max-w-md p-2 mt-1 rounded-[10px] border-[2px] border-transparent bg-black"
                  style={{
                    borderImage: "linear-gradient(to right, #832232, #B497D6) 1",
                  }}
                >
                  <Content
                    selected="assetStore"
                    dir="l"
                    selectedHeading={selectedHeading}
                    setSelectedHeading={setSelectedHeading}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#" className="text-[20px] text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#B497D6] hover:to-[#832232]">
            About Us
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-5">
          <FiUser size={30} className="text-white" />
          <ToggleSwitch />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
