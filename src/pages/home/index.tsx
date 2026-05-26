import { useNavigate } from "react-router-dom";
import AnimateOnNavigate from "../../components/Layout/AnimateOnNavigate";

export default function Home() {

  const navigate = useNavigate();
  return (
    <div
      className="bg-cover sm:bg-(image:--bg-tablet) md:bg-(image:--bg-desktop) bg-(image:--bg-mobile) text-white bg-center min-h-screen"
      style={
        {
          "--bg-desktop": `url(/assets/home/background-home-desktop.jpg)`,
          "--bg-mobile": `url(/assets/home/background-home-mobile.jpg)`,
          "--bg-tablet": `url(/assets/home/background-home-tablet.jpg)`,
        } as React.CSSProperties
      }
    >
     
      <AnimateOnNavigate>
        {/* Hero */}
        <main className="md:flex grid place-items-center  md:py-35 sm:pt-30 py-30 md:justify-around md:items-center">
          <div>
            <p className="font-display md:text-left text-center tracking-wide text-md sm:text-xl md:text-lg">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <p className="sm:text-9xl text-8xl pt-3 pb-9 text-center md:text-left font-custom">
              SPACE
            </p>
            <p className="md:text-sm text-center sm:w-125 leading-7 sm:text-sm w-94 md:text-left text-md tracking-wide text-white/85 font-display">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div>
            <button
              onClick={() => navigate("/destination")}
              className="md:h-45 mt-35 sm:hover:ring-75 sm:mt-15 mb-35 h-40 w-40 sm:w-55 sm:h-55 hover:ring-white/10 hover:ring-100  transition-all cursor-pointer md:w-45 text-blue-950 hover:text-blue-950/70 text-lg rounded-full bg-white"
            >
              EXPLORE
            </button>
          </div>
        </main>
      </AnimateOnNavigate>
    </div>
  );
}
