import {useState} from "react";
import { X, TextAlignJustify} from "lucide-react";


import data from "../../data.json";

import { Link, NavLink } from "react-router-dom";


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
  const [sideOpen, setSideOpen] = useState(false)
  
  const links = [
    { path: '/destination', label: 'Destination', number: "01"},
    { path: '/crew', label: 'Crew', number: "02"},
    { path: '/technology', label: 'Technology', number: "03" },
  ]
 
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
      className="min-h-screen  text-white md:bg-(image:--bg-desk) bg-cover bg-center bg-(image:--bg-mobile) sm:bg-(image:--bg-tablet)"
      style={
        {
          "--bg-mobile": `url(/assets/destination/background-destination-mobile.jpg)`,
          "--bg-tablet": `url(/assets/destination/background-destination-tablet.jpg)`,
          "--bg-desk": `url(/assets/destination/background-destination-desktop.jpg)`,
        } as React.CSSProperties
      }
    >
         <div className="flex md:pt-10 p-7 sm:p-0 items-center justify-between">
        <div className="md:pl-10">
           <Link to={"/"}><img className="w-10" src="/assets/shared/logo.svg"/></Link>
        </div>
         
          {<div className={`sm:hidden transition-all ease-out duration-500 ${sideOpen ? "-z-50" : " z-10"}`}>
            <TextAlignJustify onClick={() => setSideOpen(true)} className="cursor-pointer" size={30}/>
          </div>}

         
        <div className="hidden  sm:flex">
          <div className={"w-60 z-50 hidden  md:flex flex-col items-center justify-center"}>
            <div><p className="opacity-0">Lorem ipsum dolor sit amet.</p></div>
            <div className="border-t border-white/30 w-80"><p className="opacity-0">Lorem ipsum dolor sit amet.</p></div>
          </div>
          <nav className="text-sm font-display  flex  items-center md:gap-12  md:px-30 bg-white/10">
              <NavLink to="/" className={({isActive}) => `uppercase py-8 ${isActive ? "border-b-3 border-white" :  "border-b-3 border-transparent"}`} ><span className="pr-2 font-bold">00</span>Home</NavLink>
          { links.map(link => (
              <div key={link.number}>
            <NavLink className={({isActive}) => `uppercase py-8 ${isActive ? "border-b-3 border-white" :  "border-b-3 border-transparent"}`} to={link.path}><span className="pr-2 font-bold">{link.number}</span>{link.label.toUpperCase()}</NavLink>
            </div>
          ))
         
}
          </nav>
        </div>
      </div>


{/* Overlay */}
<div onClick={() => setSideOpen(false)} className={`inset-0 fixed transition-all duration-500 ease-out  ${sideOpen ? "z-30" : "-z-50"}`}></div>
      {/* Mobile Sidebar */}
      {  
      <aside className={`transition-all  duration-500 ease-out ${sideOpen ? "translate-x-0" : "translate-x-full"}   sm:hidden  fixed right-0 top-0 backdrop-blur-lg z-50 bg-white/1 h-screen`}>
        <div className="flex justify-end p-5">
          <X onClick={() => setSideOpen(false)} className="cursor-pointer" size={30}/>
        </div>

        <nav className="text-sm w-64 mt-15 font-display ">
         <div>
          <div className="flex ml-7 max-w-64">
          <NavLink to="/" className={({isActive}) => `my-3 hover:border-white/50 uppercase w-full  ${isActive ? "border-r-4  border-white" :  "border-r-4 border-transparent"}`} ><span className="pr-2 font-bold">00</span>Home</NavLink>
          </div>
          { links.map(link => (
              <div key={link.number} className="flex ml-7 flex-col space-y-10 max-w-64">
            <NavLink className={({isActive}) => `uppercase hover:border-white/50 w-full my-3   ${isActive ? "border-r-4 border-white" :  "border-r-4 border-transparent"}`} to={link.path}><span className="pr-2 font-bold">{link.number}</span>{link.label.toUpperCase()}</NavLink>
            </div>

      
          ))
         
}
</div>
        </nav>
      </aside>

              }

      <h3 className="font-display mx-10 my-10 text-lg text-center md:text-left tracking-wider md:mt-15 md:ml-27"><span className="pr-2 text-white/50 font-bold tracking-widest">01</span>PICK YOUR DESTINATION</h3>

      <div className="md:flex grid pb-10 place-items-center space-y-8 md:py-20   md:justify-around md:items-center">
        <div className="sm:w-80 py-7 sm:py-0  w-50">
          <img className={`max-w-full transition-all duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`} src={Image} alt="" />
        
        </div>

        <div>
          {/* Tabs */}
         <div className="flex gap-7 justify-center md:justify-start  font-display">
          {destinationData.map(d =>  (
            <button onClick={() => {setTimeout(() => {setActiveTab(d.name)}, 500); handleTabTransition(d.name)}}  className={`border-b-2  ${d.name === activeTab ? "border-white hover:border-white" : "border-white/0 hover:border-white/50"} cursor-pointer text-sm text-white/80 pb-2  transition-all `}>{d.name.toUpperCase()}</button>
          ))}
         </div>

         <div className={`transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100" }`}>
        <h1 className="sm:text-8xl text-6xl text-center md:text-left py-5 font-custom">{currentDestination?.name.toUpperCase()}</h1>
        <p className="w-89 md:text-sm  text-center md:text-left pb-8 font-display">{currentDestination?.description}</p>
 
        <hr className="w-89"/>
        <div className="md:flex text-center  md:text-left  md:justify-start  mt-4">
          <div className="pb-5 md:pb-0">
            <h5 className="md:text-xs text-sm text-white/70 font-display">AVG. DISTANCE</h5>
            <h1 className="font-custom text-3xl">{currentDestination?.distance}</h1>
          </div>
          <div className="md:ml-10">
          <h5 className="md:text-xs text-sm text-white/70 font-display">EST. TRAVEL TIME</h5>
          <h1 className="text-3xl font-custom">{currentDestination?.travel}</h1>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div> 
  );
}
