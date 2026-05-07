
import { Link, useNavigate } from "react-router-dom"
import bgHomeDesk from "../../assets/home/background-home-desktop.jpg"
import Logo from "../../assets/shared/logo.svg"

export default function Home() {


 const navigate = useNavigate()
  return (
    <div className='bg-cover text-white bg-center min-h-screen' style={{backgroundImage: `url(${bgHomeDesk})`}}>
      <div className="flex  pt-10 items-center justify-between">
        <div className="pl-10">
           <Link to={"/"}><img className="w-10" src={Logo}/></Link>
        </div>

        <div className="flex">
          <div className={"w-60 z-50 hidden  sm:flex flex-col items-center justify-center"}>
            <div><p className="opacity-0">Lorem ipsum dolor sit amet.</p></div>
            <div className="border-t border-white/30 w-80"><p className="opacity-0">Lorem ipsum dolor sit amet.</p></div>
          </div>
          <nav className="text-sm font-display flex items-center gap-12 py-9 px-20 bg-white/10">
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
      <main className="flex py-35 justify-around items-center">
        <div>
          <p className="font-display tracking-wide text-lg">SO, YOU WANT TO TRAVEL TO</p>
          <p className="text-9xl pt-3 pb-9 font-custom">SPACE</p>
          <p className="text-sm tracking-wide font-display">Let’s face it; if you want to go to space, you might as well<br/> genuinely go to outer space and not hover kind of on the<br/> edge of it. Well sit back, and relax because we’ll give you<br/> a truly out of this world experience!</p>
        </div>



           <div>
        <button onClick={() => navigate("/destination")} className="h-45 hover:ring-white/10 hover:ring-100  transition-all cursor-pointer w-45 text-blue-950 text-lg rounded-full bg-white">
          EXPLORE
        </button>
        </div>
      </main>
    </div>
  )
}
