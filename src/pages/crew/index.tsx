import { useState } from "react";

import data from "../../data.json";
import AnimateOnNavigate from "../../components/Layout/AnimateOnNavigate";

export default function Crew() {



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

   <div className="overflow-hidden">
        <div
          className={`sm:w-110 w-75  transition-all relative duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <img className="max-w-full" src={currentPerson?.images.png} alt="" />
          <div className="absolute bg-linear-to-t  from-[#0B0D17] to-transparent via-transparent  bottom-0 top-60 left-0 right-0"></div>
        </div>

        </div>
      </main>
    </AnimateOnNavigate>
    </div>

  );
}
