
import data from "../../data.json";
import { useState } from "react";

import AnimateOnNavigate from "../../components/Layout/AnimateOnNavigate";

export default function Technology() {
  

  const techData = data.technology;
  const [activeTab, setActiveTab] = useState(techData[0].name);
  const [isVisible, setIsVisible] = useState(true);


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
      
      <AnimateOnNavigate>
        <h3 className="font-display text-center sm:text-left pt-30 pb-10 mx-10  text-lg tracking-wider md:pt-55 md:ml-27">
          <span className="pr-4 text-white/50 font-bold tracking-widest">
            03
          </span>
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
          <div className={`md:ml-10 overflow-hidden`}>
            <div
              className={` transition-all  duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
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
