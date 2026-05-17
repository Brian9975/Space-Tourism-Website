
import { Link, useNavigate } from "react-router-dom"




export default function Home() {


 const navigate = useNavigate()
  return (
    <div className='bg-cover sm:bg-(image:--bg-tablet) md:bg-(image:--bg-desktop) bg-(image:--bg-mobile) text-white bg-center min-h-screen' 
    style={{  '--bg-desktop': `url(/assets/home/background-home-desktop.jpg)`, '--bg-mobile': `url(/assets/home/background-home-mobile.jpg)`, '--bg-tablet': `url(/assets/home/background-home-tablet.jpg)`,} as React.CSSProperties}>
      <div className="flex  pt-10 items-center justify-between">
        <div className="pl-10">
           <Link to={"/"}><img className="w-10" src="/assets/shared/logo.svg"/></Link>
        </div>

        <div className="flex">
          <div className={"w-60 z-50 hidden  sm:flex flex-col items-center justify-center"}>
            <div><p className="opacity-0">Lorem ipsum dolor sit amet.</p></div>
            <div className="border-t border-white/30 w-80"><p className="opacity-0">Lorem ipsum dolor sit amet.</p></div>
          </div>
          <nav className="text-sm font-display flex items-center md:gap-12 md:py-8 md:px-30 bg-white/10">
            <div>
            <Link to={"/"}><span className="pr-2 font-bold">00</span>HOME</Link>
            </div>
            <div>
            <Link to={"/destination"}><span className="pr-2 font-bold">01</span>DESTINATION</Link>
            </div>
            <div>
            <Link to={"/crew"}><span className="pr-2 font-bold">02</span>CREW</Link>
            </div>
            <div>
            <Link to={"/technology"}><span className="pr-2 font-bold">03</span>TECHNOLOGY</Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <main className="md:flex grid place-items-center  py-35 md:justify-around md:items-center">
        <div>
          <p className="font-display md:text-left text-center tracking-wide text-lg">SO, YOU WANT TO TRAVEL TO</p>
          <p className="text-9xl pt-3 pb-9 text-center md:text-left font-custom">SPACE</p>
          <p className="md:text-sm text-center md:text-left text-lg tracking-wide font-display">Let’s face it; if you want to go to space, you might as well<br/> genuinely go to outer space and not hover kind of on the<br/> edge of it. Well sit back, and relax because we’ll give you<br/> a truly out of this world experience!</p>
        </div>



           <div>
        <button onClick={() => navigate("/destination")} className="md:h-45 mt-30 h-60 w-60  hover:ring-white/10 hover:ring-100  transition-all cursor-pointer md:w-45 text-blue-950 text-lg rounded-full bg-white">
          EXPLORE
        </button>
        </div>
      </main>
    </div>
  )
}
