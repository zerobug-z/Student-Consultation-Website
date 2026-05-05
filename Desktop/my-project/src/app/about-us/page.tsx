import { div, main } from "framer-motion/client";
import { section } from "framer-motion/m";
import Navbar from "../components/sections/navbar";
import { Merriweather, Inter } from 'next/font/google'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'], // normal ve bold kullanacaksan
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

import { CheckCircleIcon, UsersIcon, MapIcon, ShieldCheckIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const principles = [
  {
    icon: <CheckCircleIcon className="w-10 h-10 text-amber-500" />,
    title: "Şeffaflık",
    desc: "Tüm süreçleri açık ve anlaşılır şekilde paylaşır, gizli maliyetlere yer vermeyiz.",
  },
  {
    icon: <MapIcon className="w-10 h-10 text-amber-500" />,
    title: "Gerçekçi Hedefler",
    desc: "Öğrencilerin durumuna en uygun, uygulanabilir yol haritaları sunarız.",
  },
  {
    icon: <UsersIcon className="w-10 h-10 text-amber-500" />,
    title: "Birebir İlgilenme",
    desc: "Her öğrenciye özel danışmanlık ve mentörlük desteği veririz.",
  },
  {
    icon: <AcademicCapIcon className="w-10 h-10 text-amber-500" />,
    title: "Deneyimle Şekillenen Yol",
    desc: "Kendi öğrencilik serüvenimizden edindiğimiz tecrübeleri sizinle paylaşırız.",
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-amber-500" />,
    title: "Güvenilir İş Ortakları",
    desc: "Sadece güvenilir üniversite, dil okulu ve kurumlarla çalışırız.",
  },{
  icon: <CheckCircleIcon className="w-10 h-10 text-amber-500" />,
    title: "Sürekli Destek",
    desc: "Başvurudan mezuniyete kadar, sürecin her aşamasında yanınızdayız.",
  }
];


export default function AboutUs() {
  return (
    
    
       <main className={`${merriweather.className} bg-amber-50 min-h-screen`}>
        <Navbar/>    
        <div className="mx-5">
          <div className=" py-5 mb-5 px-4 w-full flex md:justify-between gap-5 items-center justify-start flex-col md:flex-row min-h-92 bg-amber-200">
          <div className="text-bold  text-5xl h-auto w-full md:w-1/2 text-center md:text-right">
          <h2 className=" text-3xl mt-3 md:text-5xl   font-medium ">Biz Kimiz?</h2>
          </div>

          <div className="mt-2  md:mt-2 md:w-1/2 flex justify-center">
            <img className="max-w-full h-auto rounded-lg shadow-lg" src="/bizKimiz.jpg" alt="Uniway Takimi" />
          </div>
        </div>
        <div className="md:p-15 mb-6 flex flex-col  gap-3">
        <h3 className=" text-3xl slide-in-left md:text-5xl font-bold slide-in-left">Kuruluş Amacımız</h3>
        <p className={`${inter.className} text-lg leading-relaxed slide-in-left`}>Almanya’da eğitim hayatımıza devam ederken, yabancı bir ülkede karşılaştığımız zorluklar bana, bu sürecin yalnızca akademik değil, aynı zamanda sosyal ve kişisel açıdan da ne kadar büyük bir deneyim olduğunu gösterdi. Bu tecrübeler, aynı hedefe sahip diğer öğrencilere yol göstermek ve onlara güvenilir bir destek sunmak için bizi motive etti. İşte bu yüzden, hem bir öğrenci topluluğu hem de profesyonel bir danışmanlık platformu olarak <span className="text-green-950 font-bold">Uniway’i</span> kurduk. Amacımız; doğru bilgi, gerçekçi hedefler ve güçlü bir dayanışma ağı ile Almanya’daki akademik yolculuğunuzu daha kolay, bilinçli ve başarılı hale getirmek.</p>
        </div>

        <div className="md:p-15 mb-10 w-full flex flex-col md:flex-row gap-7 h-auto ">
          <img className="rounded-2xl" src="/vision.jpg" alt="Vizyonumuz" />
          <div className="flex flex-col gap-4">
            <h4 className={`${merriweather.className} text-4xl text-center font-bold`}>Vizyonumuz</h4>
            <p className={`${inter.className} text-lg leading-relaxed slide-in-left`}>Amacımız, Almanya’da eğitim hedefi olan her öğrencinin bu süreci yalnız ve belirsizlik içinde 
              yaşamamasını sağlamak. Bu nedenle diğer kurumsal danışmanlık şirketlerinden farklı olarak sınırlı kontenjan ile çalışıyor, 
              her öğrencimize ayırabileceğimiz zamanı ve ilgiyi en üst seviyede tutuyoruz. Gerçekçi hedefler belirleyerek hayal ile gerçek 
              rasındaki dengeyi kuruyor, bu hedeflere ulaşmanız için uygulanabilir ve sürdürülebilir adımlar atıyoruz. Birebir mentörlük 
              yaklaşımımız sayesinde sürecin her aşamasında yanınızda oluyor, sorularınızı anında cevaplıyor ve kararlarınızı doğru bilgiler ışığında almanızı sağlıyoruz.
               Tüm bunları alanında tecrübeli ve uzman bir ekip ile yaparak, yalnızca bugününüze değil,
               geleceğinize de değer katmayı hedefliyoruz.</p>
          </div>
        </div>


      <div className="md:p-15 mb-10 w-full flex flex-col gap-6 h-auto">
         <h4 className={`${merriweather.className} text-4xl font-bold text-center mb-8`}>İlkelerimiz</h4>
       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {principles.map((p, index) => (
          <div key={index} className="bg-amber-50 p-6 rounded-xl shadow hover:shadow-lg transition">
         <div className="flex items-center justify-center mb-4">
            {p.icon}
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">{p.title}</h3>
         <p className={`${inter.className} text-center text-gray-700`}>{p.desc}</p>
        </div>
       ))}
       </div>
     </div>

        <div className="md:p-15 mb-6 flex flex-col  gap-3">
        <h4 className=" text-3xl slide-in-left md:text-4xl text-center md:text-left font-bold slide-in-left">Sizlerden Biriyiz</h4>
        <p className={`${inter.className} text-lg leading-relaxed slide-in-left`}>Biz, Almanya’da eğitim hayali kuran binlerce öğrenciden sadece birkaçı olarak başladık bu yolculuğa. Üniversite başvurularını hazırlarken yaşadığımız stres, vize sürecinde karşılaştığımız belirsizlikler, konaklama arayışında harcadığımız uzun saatler ve yepyeni bir kültüre alışma çabası… Hepsini bizzat deneyimledik. Bu süreçte kimi zaman yalnız hissettik, kimi zaman da doğru bilgiye ulaşmanın ne kadar değerli olduğunu anladık.İşte tam da bu yüzden, bugün burada sizlerle birlikteyiz. Çünkü yaşadığınız duyguları, aklınızdaki soruları ve karşılaşabileceğiniz zorlukları en iyi biz anlayabiliriz. Biz sadece bir danışmanlık ekibi değil, aynı yoldan geçmiş, aynı hayalleri taşımış ve bugün deneyimlerini paylaşmaya hazır bir topluluğuz. Sizden biri olarak, yolun her adımında yanınızda durmayı ve bu süreci daha güvenli, bilinçli ve motive edici hale getirmeyi hedefliyoruz.</p>
        </div>


   </div>
        
       </main>
  
    
  )
  }