import {useState} from 'react'

import { TextAlignJustify, X } from "lucide-react";
import { Link,  NavLink, Outlet } from "react-router-dom";

export default function Layout() {
      const [sideOpen, setSideOpen] = useState(false);

  const links = [
    { path: "/destination", label: "Destination", number: "01" },
    { path: "/crew", label: "Crew", number: "02" },
    { path: "/technology", label: "Technology", number: "03" },
  ];
  return (
    <div className="text-white">
       <div className="flex md:pt-10 p-7 sm:p-0 items-center top-0 right-0 left-0 fixed justify-between">
        <div className="md:pl-10 sm:px-5">
          <Link to={"/"}>
            <img className="w-10" src="/assets/shared/logo.svg" />
          </Link>
        </div>

        {
          <div
            className={`sm:hidden transition-all ease-out duration-500 ${sideOpen ? "-z-50" : " z-10"}`}
          >
            <TextAlignJustify
              onClick={() => setSideOpen(true)}
              className="cursor-pointer"
              size={30}
            />
          </div>
        }

        <div className="hidden  sm:flex">
          <div
            className={
              "w-60 z-50 hidden  md:flex flex-col items-center justify-center"
            }
          >
            <div>
              <p className="opacity-0">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="border-t border-white/30 w-80">
              <p className="opacity-0">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <nav className="text-sm md:text-sm sm:text-xs font-display backdrop-blur-md tracking-widest flex  items-center sm:gap-7  md:gap-12 sm:px-15  md:px-30 bg-white/10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `uppercase duration-500 hover:border-white/50 transition-all py-8 ${isActive ? "border-b-3 border-white" : "border-b-3 border-transparent"}`
              }
            >
              <span className="pr-2 font-bold">00</span>Home
            </NavLink>
            {links.map((link) => (
              <div key={link.number}>
                <NavLink
                  className={({ isActive }) =>
                    `hover:border-white/50 duration-500 transition-all py-8 ${isActive ? "border-b-3 border-white" : "border-b-3 border-transparent"}`
                  }
                  to={link.path}
                >
                  <span className="pr-2 font-bold">{link.number}</span>
                  {link.label.toUpperCase()}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setSideOpen(false)}
        className={`inset-0 fixed transition-all duration-500 ease-out  ${sideOpen ? "z-30" : "-z-50"}`}
      ></div>
      {/* Mobile Sidebar */}
      {
        <aside
          className={`transition-all  duration-500 ease-out ${sideOpen ? "translate-x-0" : "translate-x-full"}   sm:hidden  fixed right-0 top-0 backdrop-blur-lg z-50 bg-white/1 h-screen`}
        >
          <div className="flex justify-end p-5">
            <X
              onClick={() => setSideOpen(false)}
              className="cursor-pointer"
              size={30}
            />
          </div>

          <nav className="text-sm w-64 mt-15 font-display ">
            <div>
              <div className="flex ml-7 max-w-64">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `my-3  hover:border-white/50 uppercase w-full  ${isActive ? "border-r-4  border-white" : "border-r-4 border-transparent"}`
                  }
                >
                  <span className="pr-2 font-bold">00</span>Home
                </NavLink>
              </div>
              {links.map((link) => (
                <div
                  key={link.number}
                  className="flex ml-7 flex-col space-y-10 max-w-64"
                >
                  <NavLink
                    className={({ isActive }) =>
                      `uppercase hover:border-white/50 w-full my-3   ${isActive ? "border-r-4 border-white" : "border-r-4 border-transparent"}`
                    }
                    to={link.path}
                  >
                    <span className="pr-2 font-bold">{link.number}</span>
                    {link.label.toUpperCase()}
                  </NavLink>
                </div>
              ))}
            </div>
          </nav>
        </aside>
      }
      <Outlet/>
    </div>
  )
}
