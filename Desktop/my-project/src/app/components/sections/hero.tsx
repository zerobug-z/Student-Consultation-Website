"use client";
import { p } from "framer-motion/client";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Arka plan görseli */}
      <img
        src="/pexels-shvets-2570062.jpg"
        alt="Almanya'da üniversite hayatı"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-10"
      />

      {/* Yazı içeriği */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-amber-50">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl drop-shadow-lg">
          <Typewriter
            options={{
              loop: true,
              delay: 70,
              deleteSpeed: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hayalin Almanya!")
                .pauseFor(1500)
                .deleteAll()
                .typeString('Yol Arkadaşın UniWay ')
                .pauseFor(1500)
                .deleteAll()
                .typeString("Eğitimde Avrupa Standartları")
                .pauseFor(1500)
                .deleteAll()
                .deleteAll()
                .start();
            }}
          />
        </h1>

        <p className="mt-6 font-bold text-lg md:text-xl max-w-2xl text-amber-50 drop-shadow leading-relaxed">
          Almanya’da üniversite okumak artık hayal değil. UniWay olarak başvuru sürecinden vizeye, konaklamadan uyuma kadar her adımda senin yanındayız.
        </p>

        <button className="mt-8 px-6 py-3 bg-green-950 hover:bg-amber-50 transition-colors duration-300 hover:text-black text-white font-semibold rounded-xl">
          Ücretsiz Ön Görüşme Planla
        </button>
      </div>
    </section>
  );
}
