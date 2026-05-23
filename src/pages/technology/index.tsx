import { NavLink, Link } from "react-router-dom";
import data from "../../data.json";
import { useState } from "react";
import { X, TextAlignJustify } from "lucide-react";
import AnimateOnNavigate from "../../components/Layout/AnimateOnNavigate";

export default function Technology() {
  const [sideOpen, setSideOpen] = useState(false);

  const links = [
    { path: "/destination", label: "Destination", number: "01" },
    { path: "/crew", label: "Crew", number: "02" },
    { path: "/technology", label: "Technology", number: "03" },
  ];
  const techData = data.technology;
  const [activeTab, setActiveTab] = useState(techData[0].name);
  const [isVisible, setIsVisible] = useState(true);
  console.log(techData);

  const currentTab = techData.find((t) => t.name === activeTab);

  const handleSmoothTransition = (name: string) => {
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
          "--bg-mobile": `url(/assets/technology/background-technology-mobile.jpg)`,
          "--bg-tablet": `url(/assets/technology/background-technology-tablet.jpg)`,
          "--bg-desk": `url(/assets/technology/background-technology-desktop.jpg)`,
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
      <h3 className="font-display text-center sm:text-left mx-10 md:my-10 mb-25 mt-8 text-lg tracking-wider md:mt-15 md:ml-27">
        <span className="pr-4 text-white/50 font-bold tracking-widest">03</span>
        SPACE LAUNCH 101
      </h3>

      <main className="flex text-center md:text-left flex-col-reverse md:flex-row  md:justify-between items-center">
        {/* Tabs */}
        <div className="font-custom hidden md:flex md:ml-30  md:flex-col gap-6">
          {techData.map((t) => (
            <button
              onClick={() => handleSmoothTransition(t.name)}
              key={t.name}
              className={`h-16 ${activeTab === t.name ? "bg-white text-[#0B0D17]" : "bg-transparent"} cursor-pointer hover:border-white/85  transition-all w-16 rounded-full border-2 duration-500 border-white/20 flex justify-center items-center text-2xl`}
            >
              <div>{t.id}</div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div>
            <h6 className="font-custom text-2xl uppercase text-white/50 md:text-sm">
              the terminology...
            </h6>
            <h1 className="font-custom uppercase py-3 md:p-0 text-3xl sm:text-[44px]">
              {currentTab?.name}
            </h1>
            <p className="font-display sm:text-sm sm:w-110 leading-7 md:w-85 text-white/85  w-85">
              {currentTab?.description}
            </p>
          </div>
        </div>

        {/* Technology Image */}
        <div
          className={`md:ml-10`}
        >
          <div className={` transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100"}`}>
          <img
            className="md:w-110 hidden md:flex"
            src={currentTab?.images.portrait}
            alt={currentTab?.name}
          />
          <img
            className="md:w-110 md:hidden sm:h-90 h-75"
            src={currentTab?.images.landscape}
            alt={currentTab?.name}
          />
          </div>
          {/* Tabs */}
          <div className="font-custom mb-13 mt-10 md:hidden justify-center md:justify-start flex md:ml-30  md:flex-col gap-6">
            {techData.map((t) => (
              <button
                onClick={() => handleSmoothTransition(t.name)}
                key={t.name}
                className={`md:h-16 duration-500 h-12 w-12 ${activeTab === t.name ? "bg-white text-[#0B0D17]" : "bg-transparent"} cursor-pointer hover:border-white/85  transition-all md:w-16 rounded-full border-2 border-white/20 flex justify-center items-center text-2xl`}
              >
                <div>{t.id}</div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </AnimateOnNavigate>
    </div>

  );
}
