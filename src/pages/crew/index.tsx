import { useState } from "react"
import bgCrew1 from "/assets/crew/background-crew-mobile.jpg"
import bgCrew2 from "/assets/crew/background-crew-tablet.jpg"
import bgCrew3 from "/assets/crew/background-crew-desktop.jpg"
import { Link } from "react-router-dom"
import Logo from "/assets/shared/logo.svg"
import data from "../../data.json"



export default function Crew() {
  const crewData = data.crew
  const [activeTab, setActiveTab] = useState(crewData[0].name)
  const [isVisible, setIsVisible] = useState(true)
  const currentPerson = crewData.find(p => p.name === activeTab)

  const handleTransition = (name: string) => {
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
              "--bg-mobile": `url(${bgCrew1})`,
              "--bg-tablet": `url(${bgCrew2})`,
              "--bg-desk": `url(${bgCrew3})`,
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

          <h3 className="font-display mx-10 my-10 text-lg tracking-wider md:mt-15 md:ml-27"><span className="pr-2 text-white/50 font-bold tracking-widest">02</span>MEET YOUR CREW</h3>

         <main className="md:flex  md:justify-around items-center grid place-items-center">
            <div>
              <div className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <h2 className="uppercase text-white/50 font-custom text-2xl">
                {currentPerson?.role}
              </h2>
              <h1 className="uppercase mt-3 font-custom text-[44px]">
                {currentPerson?.name}
              </h1>
              <p className="w-93 mt-5 font-display text-sm">
               {currentPerson?.bio}
              </p>
            </div>
              <div className="flex  gap-5 transition-all mt-25">
                { crewData.map(p => (<button key={p.name} onClick={() => {
                  handleTransition(p.name)
                }} className={`h-3.5 w-3.5 ${p.name === activeTab ? "bg-white" : "bg-white/15"} hover:bg-white cursor-pointer  rounded-full`}></button>))
                
}
              </div>
            </div>
            <div className={`w-110 transition-all relative duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100"}`}>
              <img className="max-w-full" src={currentPerson?.images.png} alt="" />
              <div className="absolute bg-linear-to-t  from-[#0B0D17] to-transparent via-transparent  bottom-0 top-60 left-0 right-0"></div>
            </div>
          </main>

    </div>
  )
}
