"use client";
import { useRef, useState, useEffect } from "react";

const heading: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontWeight: 700 };
const body: React.CSSProperties    = { fontFamily: "'Inter', sans-serif" };

export default function ScrollRevealImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 w-full px-4 h-auto mx-auto relative transition-all duration-1500 ease-out transform ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"
      }`}
    >
      {/* 1. Büyük görsel */}
      <div className="col-span-2 lg:row-span-2 bg-[url('/almanyaBayragi.jpg')] bg-cover bg-center min-h-[180px] md:min-h-[420px]" />

      {/* 2. Kaliteli Üniversite */}
      <div className="col-span-2 py-6 px-6 flex justify-center items-center flex-col gap-1 bg-black border-t-4 border-t-red-800">
        <h2 style={heading} className="text-base sm:text-xl md:text-2xl text-amber-50 text-center">
          🎓 Kaliteli Üniversite Eğitimi
        </h2>
        <p style={body} className="text-xs sm:text-sm text-white/80 text-center max-w-xs leading-relaxed">
          TUM, LMU ve RWTH gibi dünya lideri kurumlar — mühendislikten tıba küresel standartlar.
        </p>
      </div>

      {/* 3. Uygun Maliyet */}
      <div className="col-span-2 lg:col-span-1 flex bg-red-600 flex-col py-6 justify-center items-center px-5 text-center">
        <h2 style={heading} className="text-white text-base sm:text-xl md:text-2xl mb-1">
          💶 Uygun Maliyet
        </h2>
        <p style={body} className="text-white/90 text-xs sm:text-sm max-w-[220px] leading-relaxed">
          Sömestr katkısıyla neredeyse ücretsiz eğitim, öğrenci indirimleri ve paylaşımlı ev seçenekleri.
        </p>
      </div>

      {/* 4. Uluslararası Ortam */}
      <div className="relative min-h-[180px]">
        <div className="absolute inset-0 bg-[url('/international.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex justify-center items-center h-full px-3">
          <h2 style={heading} className="text-center text-white text-sm sm:text-lg md:text-xl drop-shadow-lg">
            🌍 Uluslararası Ortam
          </h2>
        </div>
      </div>

      {/* 5. Avrupa'yı Keşfet */}
      <div className="relative border-t-2 border-t-red-800 min-h-[180px]">
        <div className="absolute inset-0 bg-[url('/seyahat.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex justify-center items-center h-full px-3">
          <h2 style={heading} className="text-center text-white text-sm sm:text-lg md:text-xl drop-shadow-lg">
            ✈️ Avrupa'yı Keşfet
          </h2>
        </div>
      </div>

      {/* 6. Kariyer */}
      <div className="relative col-span-2 lg:col-span-1 border-t-4 border-t-red-800 min-h-[180px]">
        <div className="absolute inset-0 bg-[url('/kariyer.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-5 text-center">
          <h2 style={heading} className="text-white text-base sm:text-xl md:text-2xl mb-1">
            💼 Kariyer İmkânları
          </h2>
          <p style={body} className="text-white/90 text-xs sm:text-sm max-w-[220px] leading-relaxed">
            Mezuniyetten sonra 18 ay çalışma izni ve Avrupa'nın güçlü iş piyasasına doğrudan erişim.
          </p>
        </div>
      </div>

      {/* 7. Dil Seçenekleri */}
      <div className="col-span-2 border-t-4 border-t-black bg-yellow-400 py-6 min-h-[180px]">
        <div className="flex flex-col justify-center items-center h-full px-6 text-center">
          <h2 style={heading} className="text-white text-base sm:text-xl md:text-2xl mb-1">
            🗣️ Almanca & İngilizce Eğitim
          </h2>
          <p style={body} className="text-white/90 text-xs sm:text-sm max-w-sm leading-relaxed">
            Yüzlerce İngilizce program mevcut — Almanca öğrenerek çift dilli bir kariyere adım at.
          </p>
        </div>
      </div>
    </div>
  );
}
