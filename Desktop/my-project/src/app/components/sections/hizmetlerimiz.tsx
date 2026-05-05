export default function Home(){
    return(
    <section className="bg-green-950 grid rounded-lg grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-10 p-10">

 
            {/*Yazi ve yatay cizgi  */}
        <div className="md:col-span-3 sm:col-span-2 px-4">
  <div className="flex flex-col sm:flex-row items-center w-full my-10">
    <div className="hidden sm:block flex-grow h-px bg-gray-400" />
    
    
     <span className="text-amber-50 text-xl font-serif sm:text-2xl md:text-3xl font-extrabold  my-4 sm:my-0 whitespace-nowrap text-center">
      Size Nasıl Yardımcı Oluyoruz?
    </span>
    
    
    <div className="hidden sm:block flex-grow h-px bg-gray-400" />
  </div>
</div>

            {/*Hizmet Kartlari 1.Kart */}
        <div className="relative bg-[url('/üniversiteSecimi.jpg')] bg-cover bg-center bg-green-950 h-[500px] rounded-xl ">
  {/* Karartma katmanı */}
  <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300 "></div>

  {/* Yazı + buton */}
  <div className="absolute left-4 right-4 bottom-10 max-w-xl">
    <p className="text-sm sm:text-lg font-serif md:text-lg lg:text-xl text-white font-extrabold drop-shadow-lg leading-snug">
      Hedefine en uygun üniversiteyi <br /> birlikte seçiyoruz.
    </p>

    <p className="text-xs font-serif sm:text-sm md:text-lg text-white drop-shadow mb-3 mt-2 leading-relaxed">
      Akademik geçmişin, ilgi alanların ve kariyer hedeflerin doğrultusunda Almanya’daki en uygun üniversiteleri seninle birlikte belirliyoruz.
    </p>

    <button className="bg-green-950 text-white hover:bg-amber-50 hover:text-black transition-colors duration-300 px-4 py-2 text-sm sm:text-lg font-bold rounded-2xl mt-2">
      Detaylı Öğren
    </button>
  </div>
</div>

         {/*Hizmet Kartlari 2.Kart */}
         <div className="relative bg-[url('/basvuruBelgeleri.jpg')] bg-cover bg-center bg-green-950 h-[500px] rounded-xl ">
            {/* Karartma katmanı */}
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300 "></div>

            {/* Yazı + buton */}
            <div className="absolute left-5 bottom-10 max-w-xl">
             <p className="text-sm font-serif sm:text-lg md:text-lg lg:text-xl text-white font-extrabold drop-shadow-lg leading-snug">
                  Üniversite Başvuru Belge Hazırlığı
             </p>

            <p className="text-xs font-serif sm:text-sm md:text-lg text-white drop-shadow mb-3 mt-2 leading-relaxed">
                 Özgeçmişin, motivasyon mektubun ve referans yazıların Almanya’daki üniversitelerin beklentilerine uygun olarak içerik ve biçim açısından birlikte düzenlenir ve eksiksiz hale getirilir.
            </p>

            <button className="bg-green-950 text-white hover:bg-amber-50 hover:text-black  transition-colors duration-300 px-6 py-3 font-bold rounded-2xl mt-2">
             Detaylı Öğren
            </button>
             </div>
        </div>
        {/*Hizmet Kartlari 3.Kart */}
            <div className="relative bg-[url('/basvuruTakibi.jpg')] bg-cover bg-center bg-green-950 h-[500px] rounded-xl ">
            {/* Karartma katmanı */}
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300 "></div>

            {/* Yazı + buton */}
            <div className="absolute left-5 bottom-10 max-w-xl">
             <p className="text-sm  sm:text-lg md:text-lg lg:text-xl text-white font-extrabold drop-shadow-lg leading-snug">
                Başvuru Süreci Takibi
             </p>

            <p className="text-xs  sm:text-sm md:text-lg text-white drop-shadow mb-3 mt-2 leading-relaxed">
                 Başvurularının her aşamasını senin adına takip ediyor, üniversitelerle iletişim kuruyor ve olası eksiklik ya da güncellemeleri zamanında yerine getirilmesini sağlıyoruz
            </p>

            <button className="bg-green-950 text-white hover:bg-amber-50 hover:text-black  transition-colors duration-300 px-6 py-3 font-bold rounded-2xl mt-2">
             Detaylı Öğren
            </button>
             </div>
        </div>
        {/*Hizmet Kartlari 4.Kart */}
            <div className="relative bg-[url('/vize.jpg')] bg-cover bg-center bg-green-950 h-[500px] rounded-xl ">
            {/* Karartma katmanı */}
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300 "></div>

            {/* Yazı + buton */}
            <div className="absolute left-5 bottom-10 max-w-xl">
             <p className="text-sm  sm:text-lg md:text-lg lg:text-xl text-white font-extrabold drop-shadow-lg leading-snug">
                Vize Süreci Yönetimi
             </p>

            <p className="text-xs  sm:text-sm md:text-lg text-white drop-shadow mb-3 mt-2 leading-relaxed">
                 Almanya ulusal vize başvurunda gerekli tüm belgeleri eksiksiz şekilde hazırlamana yardımcı oluyor, randevu alma sürecinden vize onayına kadar tüm adımları seninle birlikte yönetiyoruz.
            </p>

            <button className="bg-green-950 text-white hover:bg-amber-50 hover:text-black  transition-colors duration-300 px-6 py-3 font-bold rounded-2xl mt-2">
             Detaylı Öğren
            </button>
             </div>
        </div>
            {/*Hizmet Kartlari 5.Kart */}
            <div className="relative bg-[url('/konaklama.jpg')] bg-cover bg-center bg-green-950 h-[500px] rounded-xl ">
            {/* Karartma katmanı */}
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300 "></div>

            {/* Yazı + buton */}
            <div className="absolute left-5 bottom-10 max-w-xl">
             <p className="text-sm  sm:text-lg md:text-lg lg:text-xl text-white font-extrabold drop-shadow-lg leading-snug">
                Konaklama ve Yerleşim Süreci Desteği
             </p>

            <p className="text-xs  sm:text-sm md:text-lg text-white drop-shadow mb-3 mt-2 leading-relaxed">
                Almanya’ya vardığında yalnız kalmaman için WG (paylaşımlı daire) ve öğrenci yurdu başvurularında sana rehberlik ediyor, yerleşim sonrası gerekli tüm resmi işlemleri (Anmeldung, banka, sağlık sigortası) adım adım birlikte tamamlıyoruz.
            </p>

            <button className="bg-green-950 text-white hover:bg-amber-50 hover:text-black  transition-colors duration-300 px-6 py-3 font-bold rounded-2xl mt-2">
             Detaylı Öğren
            </button>
             </div>
        </div>
            {/*Hizmet Kartlari 6.Kart */}
            <div className="relative bg-[url('/almanca.jpg')] bg-cover bg-center bg-green-950 h-[500px] rounded-xl">
            {/* Karartma katmanı */}
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300 rounded-xl"></div>

            {/* Yazı + buton */}
            <div className="absolute left-5 bottom-10 max-w-xl">
             <p className="text-sm  sm:text-lg md:text-lg lg:text-xl text-white font-extrabold drop-shadow-lg leading-snug">
                Almanca Hazırlık Rehberliği
             </p>

            <p className="text-xs  sm:text-sm md:text-lg text-white drop-shadow mb-3 mt-2 leading-relaxed">
                 Almanca dil seviyeni sistemli şekilde geliştirmen için seni uygun kaynaklara yönlendiriyor, TestDaF, Telc ve Goethe gibi sınavlara yönelik stratejik hazırlık desteği sunuyoruz.
            </p>

            <button className="bg-green-950 text-white hover:bg-amber-50 hover:text-black  transition-colors duration-300 px-6 py-3 font-bold rounded-2xl mt-2">
             Detaylı Öğren
            </button>
             </div>
        </div>


            
    </section>

 )
}