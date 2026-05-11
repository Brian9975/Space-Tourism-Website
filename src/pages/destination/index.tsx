import {useState} from "react";
import bgDestination1 from "/assets/destination/background-destination-mobile.jpg";
import bgDestination2 from "/assets/destination/background-destination-tablet.jpg";
import bgDestination3 from "/assets/destination/background-destination-desktop.jpg";
import data from "../../data.json";
import Logo from "/assets/shared/logo.svg";
import { Link } from "react-router-dom";


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
   const [activeTab, setActiveTab] = useState(destinationData[0].name)
   const [isVisible, setIsVisible] = useState(true)


   const handleTabTransition = (name: string) => {
    if (name === activeTab) return
    setIsVisible(false)

    setTimeout(() => {
      setIsVisible(true)
    }, 500)

   }
   const currentDestination = destinationData.find(d => d.name === activeTab)
   console.log(currentDestination?.images.png)
   const Image = currentDestination?.images.png
  return (
    <div
      className="min-h-screen text-white md:bg-(image:--bg-desk) bg-cover bg-center bg-(image:--bg-mobile) sm:bg-(image:--bg-tablet)"
      style={
        {
          "--bg-mobile": `url(${bgDestination1})`,
          "--bg-tablet": `url(${bgDestination2})`,
          "--bg-desk": `url(${bgDestination3})`,
        } as React.CSSProperties
      }
    >
      <div className="flex  pt-10 items-center justify-between">
        <div className="md:not-[]:pl-10">
          <Link to={"/"}>
            <img className="w-7" src={Logo} />
          </Link>
        </div>

        <div className="flex">
          <div
            className={
              "w-60 z-50 hidden  sm:flex flex-col items-center justify-center"
            }
          >
            <div>
              <p className="opacity-0">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="border-t border-white/30 w-80">
              <p className="opacity-0">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <nav className="text-sm font-display flex items-center md:gap-12 md:py-8 md:px-30 bg-white/10">
            <div>
              <Link to={"/"}>
                <span className="pr-2 font-bold">00</span>HOME
              </Link>
            </div>
            <div>
              <Link to={"/destination"}>
                <span className="pr-2 font-bold">01</span>DESTINATION
              </Link>
            </div>
            <div>
              <Link to={"/crew"}>
                <span className="pr-2 font-bold">02</span>CREW
              </Link>
            </div>
            <div>
              <Link to={"/technology"}>
                <span className="pr-2 font-bold">03</span>TECHNOLOGY
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <h3 className="font-display text-lg tracking-wider md:mt-15 md:ml-27"><span className="pr-2 tracking-widest">01</span>PICK YOUR DESTINATION</h3>

      <div className="md:flex grid place-items-center space-y-6 md:py-20   md:justify-around md:items-center">
        <div className="w-80">
          <img className={`max-w-full transition-all duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`} src={Image} alt="" />
        
        </div>

        <div>
          {/* Tabs */}
         <div className="flex gap-7 font-display">
          {destinationData.map(d =>  (
            <button onClick={() => {setTimeout(() => {setActiveTab(d.name)}, 500); handleTabTransition(d.name)}}  className="border-b-2  border-white/0 cursor-pointer text-sm text-white/80 pb-2 hover:border-white transition-all ">{d.name}</button>
          ))}
         </div>

         <div className={`transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10" }`}>
        <h1 className="text-8xl py-5 font-custom">{currentDestination?.name}</h1>
        <p className="w-89 text-sm pb-8 font-display">{currentDestination?.description}</p>
 
        <hr className="w-89"/>
        <div className="flex mt-4">
          <div>
            <h5 className="text-xs font-display">AVG. DISTANCE</h5>
            <h1 className="font-custom text-3xl">{currentDestination?.distance}</h1>
          </div>
          <div className="ml-10">
          <h5 className="text-xs font-display">EST. TRAVEL TIME</h5>
          <h1 className="text-3xl font-custom">{currentDestination?.travel}</h1>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div> 
  );
}
