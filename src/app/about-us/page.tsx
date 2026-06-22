import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import {
  CheckCircleIcon,
  UsersIcon,
  MapIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const principles = [
  {
    icon: CheckCircleIcon,
    title: "Şeffaflık",
    desc: "Tüm süreçleri açık ve anlaşılır şekilde paylaşır, gizli maliyetlere yer vermeyiz.",
  },
  {
    icon: MapIcon,
    title: "Gerçekçi Hedefler",
    desc: "Öğrencilerin durumuna en uygun, uygulanabilir yol haritaları sunarız.",
  },
  {
    icon: UsersIcon,
    title: "Birebir İlgilenme",
    desc: "Her öğrenciye özel danışmanlık ve mentörlük desteği veririz.",
  },
  {
    icon: AcademicCapIcon,
    title: "Deneyimle Şekillenen Yol",
    desc: "Kendi öğrencilik serüvenimizden edindiğimiz tecrübeleri sizinle paylaşırız.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Güvenilir İş Ortakları",
    desc: "Sadece güvenilir üniversite, dil okulu ve kurumlarla çalışırız.",
  },
  {
    icon: CheckCircleIcon,
    title: "Sürekli Destek",
    desc: "Başvurudan mezuniyete kadar, sürecin her aşamasında yanınızdayız.",
  },
];

const stats = [
  { value: "50+", label: "Başarılı Öğrenci" },
  { value: "15+", label: "Partner Üniversite" },
  { value: "%95", label: "Başvuru Başarı Oranı" },
  { value: "2+",  label: "Yıl Deneyim" },
];

export default function AboutUs() {
  return (
    <main className="bg-amber-50 min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-green-950 text-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p
              className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hakkımızda
            </p>
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Biz Kimiz?
            </h1>
            <p
              className="text-amber-100/80 text-base md:text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              UniWay, Almanya'da bizzat eğitim gören öğrenciler tarafından kurulmuş bir danışmanlık ve öğrenci topluluğudur. Yaşadığımız süreci sizin için daha kolay hale getirmek için buradayız.
            </p>
          </div>
          {/* international.jpg — diverse students with flags, reflects who UniWay serves */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/international.jpg"
              alt="UniWay öğrenci topluluğu"
              width={500}
              height={380}
              className="rounded-2xl shadow-2xl object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-amber-400">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span
                className="text-4xl md:text-5xl font-extrabold text-green-950"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {value}
              </span>
              <span
                className="text-sm font-semibold text-green-950/70 mt-1 uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Kuruluş Amacı ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/3">
            <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
            <h2
              className="text-3xl md:text-4xl font-extrabold text-green-950"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Kuruluş Amacımız
            </h2>
          </div>
          <p
            className="md:w-2/3 text-base md:text-lg text-green-950/75 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Almanya'da eğitim hayatımıza devam ederken yaşadığımız zorluklar, bu sürecin yalnızca akademik değil, sosyal ve kişisel açıdan da büyük bir deneyim olduğunu gösterdi. Aynı hedefe sahip öğrencilere yol göstermek için hem bir öğrenci topluluğu hem de profesyonel bir danışmanlık platformu olarak{" "}
            <span className="text-green-950 font-bold">UniWay</span>'i kurduk. Amacımız; doğru bilgi, gerçekçi hedefler ve güçlü bir dayanışma ağıyla Almanya'daki akademik yolculuğunuzu daha kolay ve başarılı kılmak.
          </p>
        </div>
      </section>

      {/* ── Vizyon ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <Image
            src="/vision.jpg"
            alt="Vizyonumuz"
            width={480}
            height={360}
            className="rounded-2xl shadow-lg object-cover w-full max-w-sm md:max-w-md flex-shrink-0"
          />
          <div className="flex flex-col gap-5">
            <div className="w-12 h-1 bg-amber-400 rounded-full" />
            <h2
              className="text-3xl md:text-4xl font-extrabold text-green-950"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Vizyonumuz
            </h2>
            <p
              className="text-base md:text-lg text-green-950/75 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Almanya'da eğitim hedefi olan her öğrencinin bu süreci yalnız yaşamamasını sağlamak istiyoruz. Sınırlı kontenjanla çalışarak her öğrencimize gereken ilgi ve zamanı ayırıyoruz. Gerçekçi hedefler belirleyerek hayal ile gerçek arasındaki dengeyi kuruyor; birebir mentörlük yaklaşımımızla sürecin her adımında yanınızda oluyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* ── İlkeler ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="w-12 h-1 bg-amber-400 rounded-full mx-auto mb-4" />
          <h2
            className="text-3xl md:text-4xl font-extrabold text-green-950"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            İlkelerimiz
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                <Icon className="w-6 h-6 text-amber-500" />
              </div>
              <h3
                className="text-base font-bold text-green-950"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-sm text-green-950/65 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sizlerden Biriyiz ── */}
      <section className="bg-green-950 text-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-6">
            <div className="w-12 h-1 bg-amber-400 rounded-full" />
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Sizlerden Biriyiz
            </h2>
            <p
              className="text-amber-100/80 text-base md:text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Başvuru sürecindeki stres, vizedeki belirsizlikler, konaklama arayışı ve yeni bir kültüre alışma çabası — hepsini bizzat yaşadık. Bu süreçte doğru bilgiye ulaşmanın ne kadar değerli olduğunu anladık. Yaşadığınız duyguları, aklınızdaki soruları en iyi biz anlayabiliriz; çünkü aynı yoldan geçtik.
            </p>
          </div>
          {/* bizKimiz.jpg — the actual team, fits "We are one of you" perfectly */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/bizKimiz.jpg"
              alt="UniWay ekibi"
              width={480}
              height={360}
              className="rounded-2xl shadow-2xl object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-amber-50 px-6 py-20">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-green-950"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Almanya yolculuğuna bugün başla.
          </h2>
          <p
            className="text-green-950/65 text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ücretsiz ön görüşmemizde sürecini birlikte değerlendiriyor, sana özel bir yol haritası çiziyoruz.
          </p>
          <Link
            href="https://calendar.app.google/LAMxAL8PsUxrSxCQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-4 bg-green-950 text-white font-bold rounded-xl hover:bg-amber-400 hover:text-green-950 transition-colors duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ücretsiz Ön Görüşme →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
