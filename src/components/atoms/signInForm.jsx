import { useState } from "react";
import { motion } from "framer-motion";

const SignInRegister = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="min-h-3.5 flex items-center justify-center bg-transparent backdrop-blur-md text-white">
      <motion.div
        className="w-full max-w-sm p-8 space-y-6 bg-[#040404] rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isSignIn ? (
          <SignInForm handleToggleForm={handleToggleForm} />
        ) : (
          <RegisterForm handleToggleForm={handleToggleForm} />
        )}
      </motion.div>
    </div>
  );
};

const SignInForm = ({ handleToggleForm }) => {
  return (
    <motion.div
      key="sign-in"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center">Sign In To --------</h2>
      <p className="text-center">Enter Your Account Details Below</p>

      <div className="mt-4">
        <label className="block">E-Mail</label>
        <input
          type="email"
          className="w-full mt-1 p-2 bg-black rounded-3xl border-[1px] border-transparent focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus: ring-[#832232] focus:ring-[#B497D6]"
          placeholder="Enter Your E-Mail Address"
        />
      </div>

      <div className="mt-4">
        <label className="block">Password</label>
        <input
          type="password"
          className="w-full mt-1 p-2 bg-black rounded-3xl border-[1px] border-transparent focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus: ring-[#832232] focus:ring-[#B497D6]"
          placeholder="Enter Your Password"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 rounded border-[1px] border-transparent focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus: ring-[#832232] focus:ring-[#B497D6]"
          />
          <label>Remember Me</label>
        </div>
        <p
          className="text-sm cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#832232] to-[#B497D6]"
        >
          Forgot Password?
        </p>
      </div>

      <button
        className="w-full mt-6 bg-gradient-to-r from-[#832232] to-[#B497D6] p-2 rounded-lg border-[2px] border-transparent hover:border-gradient-to-r hover: border-[#832232] hover:border-[#B497D6]"
      >
        Sign In
      </button>

      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <span
          onClick={handleToggleForm}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#832232] to-[#B497D6] cursor-pointer"
        >
          Click here to Register
        </span>
      </p>
    </motion.div>
  );
};

const RegisterForm = ({ handleToggleForm }) => {
  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center">Register To --------</h2>
      <p className="text-center">Enter Your Account Details Below</p>

      <div className="mt-4">
        <label className="block">First Name</label>
        <input
          type="text"
          className="w-full mt-1 p-2 bg-black rounded-3xl border-[1px] border-transparent focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus: ring-[#832232] focus:ring-[#B497D6]"
          placeholder="Enter Your First Name"
        />
      </div>

      <div className="mt-4">
        <label className="block">Last Name</label>
        <input
          type="text"
          className="w-full mt-1 p-2 bg-black rounded-3xl border-[1px] border-transparent focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus: ring-[#832232] focus:ring-[#B497D6]"
          placeholder="Enter Your Last Name"
        />
      </div>

      <div className="mt-4">
        <label className="block">E-Mail</label>
        <input
          type="email"
          className="w-full mt-1 p-2 bg-black rounded-3xl border-[1px] border-transparent focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus: ring-[#832232] focus:ring-[#B497D6]"
          placeholder="Enter Your E-Mail Address"
        />
      </div>

      <div className="mt-4">
        <label className="block">Password</label>
        <input
          type="password"
          className="w-full mt-1 p-2 bg-black rounded-3xl border-[1px] border-transparent focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus: ring-[#832232] focus:ring-[#B497D6]"
          placeholder="Enter Your Password"
        />
      </div>

      <div className="mt-4">
        <label className="block">Country</label>
        <select
          className="w-full mt-1 p-2 bg-black rounded-3xl border-[1px] border-transparent focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus: ring-[#832232] focus:ring-[#B497D6]"
          placeholder="Select Your Country"
        >
          <option>Select Your Country</option>
          <option>Country 1</option>
          <option>Country 2</option>
        </select>
      </div>

      <button
        className="w-full mt-6 bg-gradient-to-r from-[#832232] to-[#B497D6] p-2 rounded-lg border-[2px] border-transparent hover:border-gradient-to-r hover: border-[#832232] hover:border-[#B497D6]"
      >
        Sign Up
      </button>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <span
          onClick={handleToggleForm}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#832232] to-[#B497D6] cursor-pointer"
        >
          Sign In here
        </span>
      </p>
    </motion.div>
  );
};

export default SignInRegister;
