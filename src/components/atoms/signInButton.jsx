import { useState } from "react";
import { motion } from "framer-motion"; 
import SignInRegister from "./signInForm";

function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div>
      {/* Toggle button */}
      <div
        className={`cursor-pointer p-[1px] ml-2 mt-0 rounded-[10px] bg-gradient-to-r from-[#832232] to-[#B497D6]`}
        onClick={handleClick}
        style={{
          position: 'static',
          width: '120px',
          height: '48px',
        }}
      >
        <div
          className="flex items-center justify-between w-full h-full bg-[#040404] rounded-[10px]"
          style={{ padding: '0 8px' }}
        >
          {isClicked && (
            <motion.span
              className="text-[18px] font-semibold ml-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Fill
            </motion.span>
          )}
          <motion.div
            className={`w-9 h-9 bg-gradient-to-r from-[#832232] to-[#B497D6] rounded-full flex justify-center items-center`}
            animate={{ x: isClicked ? 3 : -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <motion.div
              className="transform"
              animate={{ rotate: isClicked ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <img src="src/assets/Images/login.svg" alt="arrow" />
            </motion.div>
          </motion.div>
          {!isClicked && (
            <motion.span
              className="text-[18px] font-semibold mr-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Sign In
            </motion.span>
          )}
        </div>
      </div>

      {/* Conditionally render the SignInRegister form with background blur */}
      {isClicked && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Form container */}
          <motion.div
            className="w-full max-w-md p-8 bg-[#040404] rounded-xl shadow-lg"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <SignInRegister />
          </motion.div>

          <div
            className="absolute inset-0"
            onClick={() => setIsClicked(false)}
          />
        </motion.div>
      )}
    </div>
  );
}

export default ToggleSwitch;
