import { useState } from "react"
import { TextAlignJustify, X } from "lucide-react"
import { Link, useNavigate, NavLink } from "react-router-dom"




export default function Home() {
const [sideOpen, setSideOpen] = useState(false)

const links = [
  { path: '/destination', label: 'Destination', number: "01"},
  { path: '/crew', label: 'Crew', number: "02"},
  { path: '/technology', label: 'Technology', number: "03" },
]
 const navigate = useNavigate()
  return (
    <div className='bg-cover sm:bg-(image:--bg-tablet) md:bg-(image:--bg-desktop) bg-(image:--bg-mobile) text-white bg-center min-h-screen' 
    style={{  '--bg-desktop': `url(/assets/home/background-home-desktop.jpg)`, '--bg-mobile': `url(/assets/home/background-home-mobile.jpg)`, '--bg-tablet': `url(/assets/home/background-home-tablet.jpg)`,} as React.CSSProperties}>
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
      {/* Hero */}
      <main className="md:flex grid place-items-center  md:py-35 py-10 md:justify-around md:items-center">
        <div>
          <p className="font-display md:text-left text-center tracking-wide text-md sm:text-lg">SO, YOU WANT TO TRAVEL TO</p>
          <p className="sm:text-9xl text-8xl pt-3 pb-9 text-center md:text-left font-custom">SPACE</p>
          <p className="md:text-sm text-center w-94 md:text-left text-md tracking-wide font-display">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>



           <div>
        <button onClick={() => navigate("/destination")} className="md:h-45 mt-35 mb-35 md:h-60 md:w-60 h-40 w-40 hover:ring-white/10 hover:ring-100  transition-all cursor-pointer md:w-45 text-blue-950 hover:text-blue-950/70 text-lg rounded-full bg-white">
          EXPLORE
        </button>
        </div>
      </main>
    </div>
  )
}
