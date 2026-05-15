import bgTech3 from "/assets/technology/background-technology-desktop.jpg"
import bgTech1 from "/assets/technology/background-technology-mobile.jpg"
import bgTech2 from "/assets/technology/background-technology-tablet.jpg"
import { Link } from "react-router-dom"
import Logo from "/assets/shared/logo.svg"
import data from "../../data.json"
import { useState } from "react"


export default function Technology() {
 const techData = data.technology
  const [activeTab, setActiveTab] = useState(techData[0].name)
  const [isVisible, setIsVisible] = useState(true)
  console.log(techData)

  const currentTab = techData.find(t => t.name === activeTab)

  const handleSmoothTransition = (name: string) => {
    if (name === activeTab) return
   
    setIsVisible(false)
    setTimeout(() => {
    setIsVisible(true)
    setActiveTab(name)
    }, 500)
  }
  return (
    <div  className="min-h-screen pb-20  text-white md:bg-(image:--bg-desk) bg-cover bg-center bg-(image:--bg-mobile) sm:bg-(image:--bg-tablet)"
          style={
            {
              "--bg-mobile": `url(${bgTech1})`,
              "--bg-tablet": `url(${bgTech2})`,
              "--bg-desk": `url(${bgTech3})`,
            } as React.CSSProperties
          }>
       <div className="flex  md:pt-10 items-center justify-between">
               <div className="md:pl-10">
                 <Link to={"/"}>
                   <img className="w-10" src={Logo} />
                 </Link>
               </div>
               
               <div className="md:flex hidden">
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

                    <h3 className="font-display mx-10 my-10 text-lg tracking-wider md:mt-15 md:ml-27"><span className="pr-2 text-white/50 font-bold tracking-widest">03</span>SPACE LAUNCH 101</h3>

                    <main className="flex  md:flex-row flex-col md:justify-between items-center">
                      {/* Tabs */}
                     <div className="font-custom md:ml-30 flex md:flex-col gap-6">{
                      techData.map(t => (
                         <button onClick={() => handleSmoothTransition(t.name)} key={t.name} className="h-16 cursor-pointer hover:bg-white hover:text-[#0B0D17] transition-all w-16 rounded-full border-2 border-white/20 flex justify-center items-center text-2xl"><div>{t.id}</div></button>
                      ))
                       
                     }
                      </div>

                      {/* Content */}
                    <div className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    
                      <div>
                      <h6 className="font-display uppercase text-white/85 text-sm">the terminology</h6>
                      <h1 className="font-custom uppercase text-[44px]">{currentTab?.name}</h1>
                      <p className="font-display text-sm text-white/85 w-85">{currentTab?.description}</p>
                      </div>
                    </div>

                   {/* Technology Image */}
                   <div className={`md:ml-10 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100"}`}>
                    <img className="md:w-110" src={currentTab?.images.portrait} alt={currentTab?.name} />
                   </div>
                    </main>
    </div>
  )
}
