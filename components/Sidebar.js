import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { GoSettings } from "react-icons/go";
import {
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import UserInfo from "./UserInfo";
// import { useSpring, animated } from "react-spring";

const Sidebar = () => {
  const [isSideBarHidden, setSideBarHidden] = useState(true);

  return (
    <>
      {isSideBarHidden && (
        <div
          className={`flex flex-col justify-between text-white bg-hellosidebarblue-500 w-3/5 md:w-1/6 h-screen max-h-screen md:sticky fixed z-50 md:z-0 left-0 bottom-0 top-0`}
        >
          {/* user info, thisi shows based on User Auth */}
          <div>
            <Link href="/login">
              <div className="flex flex-row justify-center font-medium text-md mx-7 my-2 hover:shadow p-3 hover:bg-hellosidebarblue-400 rounded cursor-pointer">
                <h2 className="mx-2">Login</h2>
                <div className="my-auto text-2xl">
                  <FiLogIn />
                </div>
              </div>
            </Link>
            {/* <UserInfo /> */}
          </div>
          <div>
            {/* Navbar */}
            <div className="px-2 mx-1 my-auto">
              <Navbar />
            </div>
            <div
              onClick={() => setSideBarHidden(false)}
              className="absolute bg-hellosidebarblue-400 hover:bg-hellosidebarblue-500 shadow-md text-3xl px-3 py-2 ml-52 md:ml-48 -mt-56 rounded cursor-pointer"
            >
              <IoIosArrowBack />
            </div>
          </div>
          {/* Settings Info */}
          <div className="flex flex-row bottom-0 p-3 mx-2 bg-hellosidebarblue-600 hover:shadow-lg rounded-md">
            <div className="text-2xl my-auto bg-hellosidebarblue-600 hover:shadow-lg px-2 py-1 rounded cursor-pointer ">
              <GoSettings />
            </div>
            <h3 className="my-auto"> Settings </h3>
            <div className="bg-helloblue-800 hover:shadow-lg text-xl px-2 py-1 ml-5 rounded cursor-pointer">
              <IoIosArrowUp />
            </div>
          </div>
        </div>
      )}

      {!isSideBarHidden && (
        <div
          onClick={() => setSideBarHidden(true)}
          className="fixed z-50 top-60 left-0 text-white bg-hellosidebarblue-400 hover:bg-hellosidebarblue-500 shadow-md text-3xl px-3 py-2 rounded-r cursor-pointer"
        >
          <IoIosArrowForward />
        </div>
      )}
    </>
  );
};

export default Sidebar;
