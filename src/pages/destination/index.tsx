import { useState } from "react";

import data from "../../data.json";

import AnimateOnNavigate from "../../components/Layout/AnimateOnNavigate";

interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}
export default function Destination() {
  const destinationData = data.destinations;
  const [activeTab, setActiveTab] = useState(destinationData[0].name);
  const [isVisible, setIsVisible] = useState(true);

  const handleTabTransition = (name: string) => {
    if (name === activeTab) return;
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  };
  const currentDestination = destinationData.find((d) => d.name === activeTab);
 
  const Image = currentDestination?.images.png;
  return (
    <div
      className="min-h-screen  text-white md:bg-(image:--bg-desk) bg-cover bg-center bg-(image:--bg-mobile) sm:bg-(image:--bg-tablet)"
      style={
        {
          "--bg-mobile": `url(/assets/destination/background-destination-mobile.jpg)`,
          "--bg-tablet": `url(/assets/destination/background-destination-tablet.jpg)`,
          "--bg-desk": `url(/assets/destination/background-destination-desktop.jpg)`,
        } as React.CSSProperties
      }
    >
      <AnimateOnNavigate>
        <h3 className="font-display mx-10 pt-30 pb-10 text-lg text-center sm:text-left tracking-wider md:pt-55 md:ml-27">
          <span className="pr-4 text-white/50 font-bold tracking-widest">
            01
          </span>
          PICK YOUR DESTINATION
        </h3>

        <div className="md:flex grid pb-10 place-items-center space-y-8 md:py-20   md:justify-around md:items-center">
          <div className="sm:w-80 py-7   w-50">
            <img
              className={`max-w-full transition-all duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
              src={Image}
              alt=""
            />
          </div>

          <div>
            {/* Tabs */}
            <div className="flex gap-7 justify-center md:justify-start  font-display">
              {destinationData.map((d) => (
                <button
                key={d.name}
                  onClick={() => {
                    setTimeout(() => {
                      setActiveTab(d.name);
                    }, 500);
                    handleTabTransition(d.name);
                  }}
                  className={`border-b-2  ${d.name === activeTab ? "border-white hover:border-white" : "border-white/0 hover:border-white/50"} cursor-pointer text-sm text-white/80 pb-2  transition-all `}
                >
                  {d.name.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="overflow-hidden">
              <div
                className={`transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <h1 className="md:text-8xl sm:text-7xl text-6xl text-center md:text-left py-5 font-custom">
                  {currentDestination?.name.toUpperCase()}
                </h1>
                <p className="w-89 md:w-89  text-white/85 sm:w-134 sm:text-sm leading-7  text-center md:text-left pb-8 font-display">
                  {currentDestination?.description}
                </p>

                <hr className="w-89 sm:w-134 md:w-89 text-white/50" />
                <div className="sm:flex text-center sm:justify-around  md:text-left  md:justify-start  mt-4">
                  <div className="pb-5 md:pb-0">
                    <h5 className="md:text-xs text-sm text-white/70 font-display">
                      AVG. DISTANCE
                    </h5>
                    <h1 className="font-custom text-3xl">
                      {currentDestination?.distance}
                    </h1>
                  </div>
                  <div className="md:ml-10">
                    <h5 className="md:text-xs text-sm text-white/70 font-display">
                      EST. TRAVEL TIME
                    </h5>
                    <h1 className="text-3xl font-custom">
                      {currentDestination?.travel}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnNavigate>
    </div>
  );
}
