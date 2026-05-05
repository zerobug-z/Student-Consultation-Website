"use client";
import { useRef, useState, useEffect } from "react";

export default function ScrollRevealImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
        
    <div
  ref={ref}
  className={`grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 w-full px-4 h-auto mx-auto  relative transition-all duration-1500 ease-out transform ${
    visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"
  }`}
>
  {/* 1. Kart: Büyük görsel */}
  <div className="col-span-2 lg:row-span-2 bg-[url('/almanyaBayragi.jpg')] bg-cover bg-center min-h-[200px] md:min-h-[700px]" />

  {/* 2. Kart: Kaliteli Üniversite */}
  <div className="col-span-2 py-10 px-6 flex justify-center items-center flex-col gap-3  bg-black border-t-4 border-t-red-800">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-amber-50 mb-4">
      🎓 Kaliteli Üniversite Eğitimi
    </h2>
    <p className="text-sm font-serif sm:text-lg md:text-xl leading-relaxed tracking-wide text-white">
      Almanya, yalnızca ekonomik fırsatlarıyla değil, sunduğu dünya çapında saygın üniversiteleriyle de dikkat çeker. 
      Teknik, tıp, sosyal bilimler ve mühendislik gibi alanlarda yüksek akademik standartlar sunar.
    </p>
  </div>

  {/* 3. Kart: Uygun Maliyet */}
  <div className="relative z-10 flex bg-red-600 flex-col py-3 justify-center items-center h-full px-6 text-center">
    <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg mb-2">
      💶 Uygun Maliyetli Öğrenci Hayatı
    </h2>
    <p className="text-white text-xs sm:text-lg md:text-xl font-medium drop-shadow-sm max-w-xl">
      Devlet üniversitelerinde düşük katkı payları, öğrenci indirimleri, uygun fiyatlı yurtlar ve WG (paylaşımlı evler) seçenekleri sayesinde Almanya’da bütçene uygun bir yaşam seni bekliyor.

    </p>
  </div>

  {/* 4. Kart: Uluslararası Ortam */}
  <div className="relative bg-amber-100 min-h-[200px]">
    <div className="absolute inset-0 bg-[url('/international.jpg')] bg-cover bg-center" />
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 flex justify-center items-center h-full px-4">
      <h2 className="w-full text-center text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg">
        🌍 Uluslararası Ortam & Kültürel Zenginlik
      </h2>
    </div>
  </div>

  {/* 5. Kart: Avrupa'yı Keşfetme */}
  <div className="relative border-t-2 border-t-red-800 bg-amber-100 min-h-[200px]">
    <div className="absolute inset-0 bg-[url('/seyahat.jpg')] bg-cover bg-center" />
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 flex justify-center items-center h-full px-4">
      <h2 className="w-full text-center text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg">
        ✈️ Avrupa’yı Keşfetme Fırsatı
      </h2>
    </div>
  </div>

  {/* 6. Kart: Kariyer */}
  <div className="relative border-t-4 border-t-red-800 bg-amber-100 min-h-[200px]">
  {/* Arka plan görseli */}
  <div className="absolute inset-0 bg-[url('/kariyer.jpg')] bg-cover bg-center" />
  {/* Daha karanlık katman */}
  <div className="absolute inset-0 bg-black/50" />

  {/* İçerik */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
    <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg mb-2">
      💼 Mezuniyet Sonrası Kariyer İmkanları
    </h2>
    <p className="text-white text-xs sm:text-lg md:text-xl font-medium drop-shadow-sm max-w-xl">
      Almanya’da edineceğin diploma yalnızca akademik değil, profesyonel yaşamda da kapıları aralar. 
      Mezuniyetin ardından ülkede kalıp çalışma hakkı tanınır ve birçok şirket, nitelikli mezunları istihdam etmeye hazırdır.
    </p>
  </div>
</div>
    <div className="bg-yellow-400 py-3 col-span-2 border-t-4 border-t-black min-h-[200px]">
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
    <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg mb-2">
      🗣️ Almanca ve İngilizce Eğitim Seçenekleri
    </h2>
    <p className="text-amber-50 text-xs sm:text-lg md:text-xl font-medium drop-shadow-sm max-w-xl">
      Almanya, çok sayıda lisans ve yüksek lisans programını hem Almanca hem de İngilizce olarak sunar. 
      Bu sayede uluslararası öğrenciler, dünya çapında geçerli bir dilde eğitim alırken aynı zamanda Almanca 
      öğrenerek Avrupa’da ve özellikle Almanya’da kariyer olanaklarını artırabilirler. İki dilli eğitim imkânı,
       hem akademik hem de profesyonel hayatta büyük avantaj sağlar.
    
    </p>
  </div>
    </div>
   

  
   
</div>
);
}
