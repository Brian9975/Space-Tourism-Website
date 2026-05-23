import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import data from "../../data.json";
import { TextAlignJustify, X } from "lucide-react";
import AnimateOnNavigate from "../../components/Layout/AnimateOnNavigate";

export default function Crew() {
  const [sideOpen, setSideOpen] = useState(false);

  const links = [
    { path: "/destination", label: "Destination", number: "01" },
    { path: "/crew", label: "Crew", number: "02" },
    { path: "/technology", label: "Technology", number: "03" },
  ];
  const crewData = data.crew;
  const [activeTab, setActiveTab] = useState(crewData[0].name);
  const [isVisible, setIsVisible] = useState(true);
  const currentPerson = crewData.find((p) => p.name === activeTab);

  const handleTransition = (name: string) => {
    if (name === activeTab) return;

    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
      setActiveTab(name);
    }, 500);
  };
  return (
    <div
    className="min-h-screen pb-20  text-white md:bg-(image:--bg-desk) bg-cover bg-center bg-(image:--bg-mobile) sm:bg-(image:--bg-tablet)"
    style={
        {
          "--bg-mobile": `url(/assets/crew/background-crew-mobile.jpg)`,
          "--bg-tablet": `url(/assets/crew/background-crew-tablet.jpg)`,
          "--bg-desk": `url(/assets/crew/background-crew-desktop.jpg)`,
        } as React.CSSProperties
      }
    >
      <div className="flex md:pt-10 p-7 sm:p-0 items-center justify-between">
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
                    `my-3 hover:border-white/50 uppercase w-full  ${isActive ? "border-r-4  border-white" : "border-r-4 border-transparent"}`
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

          <AnimateOnNavigate>
      <h3 className="font-display text-center sm:text-left mx-10 my-10 text-lg tracking-wider md:mt-15 md:ml-27">
        <span className="pr-4 text-white/50 font-bold tracking-widest">02</span>
        MEET YOUR CREW
      </h3>

      <main className="md:flex  md:justify-around items-center grid place-items-center">
        <div>
          <div
            className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="uppercase text-center md:text-left text-white/50 font-custom text-2xl">
              {currentPerson?.role}
            </h2>
            <h1 className="uppercase mt-3 text-center md:text-left font-custom text-3xl sm:text-[44px]">
              {currentPerson?.name}
            </h1>
            <p className="w-93 mt-5 md:w-93 sm:w-120 text-center md:text-left font-display leading-7 sm:text-sm">
              {currentPerson?.bio}
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-5 my-15 transition-all md:mt-25">
            {crewData.map((p) => (
              <button
                key={p.name}
                onClick={() => {
                  handleTransition(p.name);
                }}
                className={`md:h-3.5 md:w-3.5 h-2.5 w-2.5  ${p.name === activeTab ? "bg-white" : "bg-white/15"} hover:bg-white cursor-pointer  rounded-full`}
              ></button>
            ))}
          </div>
        </div>
        <div
          className={`sm:w-110 w-75  transition-all relative duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100"}`}
        >
          <img className="max-w-full" src={currentPerson?.images.png} alt="" />
          <div className="absolute bg-linear-to-t  from-[#0B0D17] to-transparent via-transparent  bottom-0 top-60 left-0 right-0"></div>
        </div>
      </main>
    </AnimateOnNavigate>
    </div>

  );
}
