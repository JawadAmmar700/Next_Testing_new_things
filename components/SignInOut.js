import React from "react";
import Image from "next/image";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";

const SignInOut = () => {
  const [registor, setRegistor] = React.useState(false);
  const [sign, setSign] = React.useState(true);

  const reveal = () => {
    setSign(!sign);
    setRegistor(!registor);
  };
  const variants = {
    RegImgOpen: { x: 0, y: 0, opacity: 1, display: "block" },
    RegImgClosed: { x: 0, y: -100, opacity: 0, display: "none" },
    SignUpOpen: { x: 0, y: 0, opacity: 1, display: "block" },
    SignUpClosed: { x: 0, y: 100, opacity: 0, display: "none" },
    SignImgOpen: { x: 0, y: 0, opacity: 1, display: "block" },
    SignImgClosed: { x: 0, y: 100, opacity: 0, display: "none" },
    SignInOpen: { x: 0, y: 0, opacity: 1, display: "block" },
    SignInClosed: { x: 0, y: -100, opacity: 0, display: "none" },
  };
  return (
    <div
      className="w-8/12 h-5/6 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4
            rounded flex shadow-2xl"
    >
      <motion.img
        animate={sign ? "SignImgOpen" : "SignImgClosed"}
        variants={variants}
        src="https://img.pngio.com/nature-background-png-3-png-image-187825-png-images-pngio-background-images-nature-png-1920_1080.png"
        className={`w-2/4 h-full absolute left-0  object-cover`}
      />
      <motion.div
        animate={sign ? "SignInOpen" : "SignInClosed"}
        variants={variants}
        className={`w-2/4 h-full absolute right-0 `}
      >
        <form className="w-full h-full bg-yellow-300 flex flex-col items-center justify-center ">
          <h1 className="absolute top-10 text-4xl text-blue-800 font-bold italic ">
            Sign In
          </h1>
          <div className="w-3/4 h-auto -mt-32 absolute left-2/4 transform -translate-x-2/4 ">
            <TextField
              id="standard-basic"
              label="UserName"
              className="w-full"
            />
            <TextField
              id="standard-basic"
              label="Email"
              className="w-full  relative top-5"
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              className="w-full p-8 relative top-10"
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            className="absolute top-32"
          >
            Sign In
          </Button>
          <h2 className="absolute bottom-10">
            Create an account:{" "}
            <a
              onClick={reveal}
              className="text-blue-500 cursor-pointer  hover:border-b-2 border-indigo-600 hover:text-green-500"
            >
              registor
            </a>
          </h2>
        </form>
      </motion.div>

      {/* --------------------------------------------------- */}
      <motion.img
        animate={registor ? "RegImgOpen" : "RegImgClosed"}
        variants={variants}
        src="https://www.teahub.io/photos/full/134-1347618_background-natural-hd-png.jpg"
        className={`w-2/4 h-full absolute right-0  object-cover `}
      />
      <motion.div
        animate={registor ? "SignUpOpen" : "SignUpClosed"}
        variants={variants}
        className={`w-2/4 h-full absolute left-0  `}
      >
        <form
          className="w-full h-full bg-yellow-300 flex flex-col items-center justify-center 
                "
        >
          <h1 className="absolute top-10 text-4xl text-blue-800 font-bold italic ">
            Sign Up
          </h1>
          <div className="w-3/4 h-auto -mt-32 absolute left-2/4 transform -translate-x-2/4 ">
            <TextField
              id="standard-basic"
              label="UserName"
              className="w-full"
            />
            <TextField
              id="standard-basic"
              label="Email"
              className="w-full  relative top-5"
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              className="w-full p-8 relative top-10"
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            className="absolute top-32"
          >
            Sign Up
          </Button>
          <h2 className="absolute bottom-10">
            You have an account:{" "}
            <a
              onClick={reveal}
              className="w-12 h-4 text-blue-500  hover:border-b-2 border-indigo-600   cursor-pointer hover:text-green-500"
            >
              Sign in
            </a>
          </h2>
        </form>
      </motion.div>
    </div>
  );
};

export default SignInOut;
