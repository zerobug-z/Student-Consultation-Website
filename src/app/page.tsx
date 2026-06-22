import Hero from "./components/sections/hero";
import SwiperComponent from "./components/SwiperComponent"
import Hizmetlerimiz from "./components/sections/hizmetlerimiz"
import Timeline from "./components/sections/timeline";
import AlmanyaHakkinda from "./components/sections/almanyaHakkinda"
import Navbar from "./components/sections/navbar";
import Footer from "./components/sections/footer";
export default function Home() {
return (
    <main className="bg-amber-50">  
      <Navbar/>
      <Hero />
      <Hizmetlerimiz/>
      

      <div className="w-full h-auto bg-amber-50 rounded-xl my-20"><Timeline/></div>
      <div className="flex items-center justify-center my-20">
  {/* Sol çizgi */}
  <div className="flex-grow border-t border-green-950"></div>

  {/* Yazı */}
  <span className="mx-4 font-bold md:text-4xl sm:text-3xl text-2xl text-green-950">
    Neden Almanya?
  </span>

  {/* Sağ çizgi */}
  <div className="flex-grow border-t border-green-950"></div>
</div>


      <AlmanyaHakkinda/>
      <h2 className="font-extrabold text-xl md:text-3xl flex justify-center items-center my-20">Almanya'nın Önde Gelen Üniversiteleri</h2>
    
      <div className="px-4 sm:px-10 md:px-20 py-10 bg-white">
        <SwiperComponent/>
      </div>

      <Footer/>
    </main>
  );
}

