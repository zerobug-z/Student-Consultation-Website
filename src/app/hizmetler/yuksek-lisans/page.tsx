import Link from "next/link";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import {
  BanknotesIcon,
  AcademicCapIcon,
  SparklesIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  LanguageIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarDaysIcon,
  BuildingLibraryIcon,
  CurrencyEuroIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

const advantages = [
  {
    icon: SparklesIcon,
    title: "Yüksek Kaliteli Eğitim",
    desc: "Araştırma odaklı üniversiteleri, modern laboratuvarları ve güçlü akademik kadrosuyla dünya çapında saygın bir eğitim sistemi.",
  },
  {
    icon: BanknotesIcon,
    title: "Düşük Maliyetli veya Ücretsiz Eğitim",
    desc: "Devlet üniversitelerinde yüksek lisans programlarının büyük bölümü ücretsizdir. Öğrenciler yalnızca dönemlik katkı payı öder.",
  },
  {
    icon: AcademicCapIcon,
    title: "Uluslararası Geçerliliğe Sahip Diploma",
    desc: "Almanya'dan alınan yüksek lisans diploması dünya genelinde tanınır ve kariyer açısından güçlü avantaj sağlar.",
  },
  {
    icon: LanguageIcon,
    title: "İngilizce Eğitim Seçenekleri",
    desc: "Özellikle mühendislik, işletme ve teknoloji alanlarında çok sayıda İngilizce program mevcuttur.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Sanayi ile İç İçe Eğitim",
    desc: "Üniversiteler birçok sektörel firma ile iş birliği içerisindedir. Staj ve proje çalışmalarıyla doğrudan sektör deneyimi kazanılabilir.",
  },
  {
    icon: BriefcaseIcon,
    title: "Çalışma ve Kariyer İmkânları",
    desc: "Öğrenciler eğitim süresince yasal olarak çalışma hakkına sahiptir. Mezuniyet sonrasında 18 aya kadar iş arama vizesiyle Almanya'da kalınabilir.",
  },
  {
    icon: GlobeAltIcon,
    title: "Çok Kültürlü Ortam",
    desc: "Dünyanın birçok ülkesinden gelen öğrencilerle uluslararası bir çevre oluşturma ve global network kurma fırsatı.",
  },
];

const documents = [
  "Lisans diploması",
  "Üniversite transkripti",
  "Dil yeterlilik belgesi",
  "Motivasyon mektubu",
  "Referans mektupları",
  "Güncel CV",
  "Pasaport fotokopisi",
  "Sağlık sigortası",
  "Finansal yeterlilik belgesi",
  "Kabul mektubu (vize süreci için)",
];

const universities = [
  "Technical University of Munich (TUM)",
  "Freie Universität Berlin",
  "Heidelberg Üniversitesi",
  "Ludwig Maximilian Üniversitesi (LMU)",
  "Jacobs University Bremen",
];

const popularMajors = [
  "Bilgisayar Mühendisliği",
  "Yapay Zeka ve Veri Bilimi",
  "Makine Mühendisliği",
  "Elektrik-Elektronik Mühendisliği",
  "İşletme ve MBA",
  "Ekonomi",
  "Mimarlık",
  "Psikoloji",
  "Enerji Sistemleri",
  "Hukuk (LLM)",
  "Tıp ve Sağlık Bilimleri",
];

const targetAudience = [
  "Avrupa'da kariyer hedefleyenler",
  "Uluslararası deneyim kazanmak isteyenler",
  "Düşük maliyetli kaliteli eğitim arayanlar",
  "Araştırma ve akademik kariyer planlayanlar",
  "Mezuniyet sonrası yurt dışında çalışma hedefi olanlar",
];

export default function YuksekLisansPage() {
  return (
    <main className="bg-amber-50 min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-green-950 text-amber-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p
            className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Hizmetlerimiz
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Almanya'da Yüksek Lisans Eğitimi
          </h1>
          <p
            className="text-amber-100/80 text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Güçlü akademik altyapısı, uluslararası geçerliliğe sahip diplomaları ve düşük maliyetli eğitim sistemi sayesinde her yıl binlerce uluslararası öğrenci Almanya'yı tercih etmektedir.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-amber-400">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "Ücretsiz", label: "Devlet Üniversiteleri" },
            { value: "2 Yıl", label: "Ortalama Süre" },
            { value: "18 Ay", label: "İş Arama Vizesi" },
            { value: "Dünya", label: "Genelinde Tanınan Diploma" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span
                className="text-2xl md:text-4xl font-extrabold text-green-950"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {value}
              </span>
              <span
                className="text-xs font-semibold text-green-950/70 mt-1 uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p
          className="text-base md:text-lg text-green-950/75 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Özellikle mühendislik, teknoloji, ekonomi ve sosyal bilimler alanlarında sunulan kaliteli eğitim programları; öğrencilere hem akademik gelişim hem de uluslararası kariyer fırsatları sunar. Almanya'daki üniversiteler, öğrencilerin sektörle doğrudan bağlantı kurabileceği uygulamalı eğitim modelleriyle dikkat çeker.
        </p>
      </section>

      {/* ── Avantajlar ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
            <h2
              className="text-3xl md:text-4xl font-extrabold text-green-950"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Yüksek Lisans Yapmanın Avantajları
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-amber-50 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
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
        </div>
      </section>

      {/* ── Belgeler & Şartlar ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Belgeler */}
          <div>
            <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
            <h2
              className="text-2xl md:text-3xl font-extrabold text-green-950 mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Gerekli Belgeler
            </h2>
            <ul className="flex flex-col gap-3">
              {documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span
                    className="text-sm text-green-950/75 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {doc}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className="mt-4 text-xs text-green-950/50 italic"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Bazı bölümlerde portfolyo veya mülakat süreci de bulunabilir.
            </p>
          </div>

          {/* Şartlar */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
              <h2
                className="text-2xl md:text-3xl font-extrabold text-green-950 mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Başvuru Şartları
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
              <h3
                className="text-base font-bold text-green-950 flex items-center gap-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <AcademicCapIcon className="w-5 h-5 text-amber-500" />
                Lisans Mezuniyeti & Ortalama
              </h3>
              <p
                className="text-sm text-green-950/65 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Başvurulacak programla uyumlu bir lisans diplomasına sahip olunmalıdır. Rekabetin yüksek olduğu programlarda güçlü bir akademik ortalama önemlidir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
              <h3
                className="text-base font-bold text-green-950 flex items-center gap-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <LanguageIcon className="w-5 h-5 text-amber-500" />
                Dil Yeterliliği
              </h3>
              <div style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm text-green-950/65 leading-relaxed space-y-1">
                <p className="font-semibold text-green-950/80">Almanca programlar:</p>
                <p>TestDaF · DSH · Goethe Sertifikası · Telc C1 Hochschule</p>
                <p className="font-semibold text-green-950/80 mt-2">İngilizce programlar:</p>
                <p>IELTS · TOEFL</p>
                <p className="mt-2 text-xs italic">Bazı üniversiteler minimum IELTS 6.5 veya TOEFL 80+ puanı istemektedir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Şartlı Kabul ── */}
      <section className="bg-green-950 text-amber-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3">
              <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
              <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Şartlı Kabul Nedir?
              </h2>
            </div>
            <div className="md:w-2/3 flex flex-col gap-6">
              <p
                className="text-amber-100/80 text-base leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Dil seviyesi veya bazı akademik eksikleri bulunan öğrencilere sunulan özel bir kabul türüdür. Öğrenciler önce dil eğitimi veya hazırlık programına katılır, gerekli şartları tamamladıktan sonra yüksek lisans programına tam kayıt yaptırabilir.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Almanca seviyesi yeterli olmayan öğrenciler",
                  "Dil sınav sonucunu henüz almamış öğrenciler",
                  "Akademik belgelerini tamamlamamış öğrenciler",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                    <span
                      className="text-sm text-amber-100/80"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ücretler ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
          <h2
            className="text-3xl md:text-4xl font-extrabold text-green-950 mb-12"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Eğitim Ücretleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-2xl p-8 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <BuildingLibraryIcon className="w-6 h-6 text-amber-500" />
              </div>
              <h3
                className="text-xl font-bold text-green-950"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Devlet Üniversiteleri
              </h3>
              <p
                className="text-sm text-green-950/65 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Yüksek lisans programlarının çoğu ücretsizdir. Öğrenciler yalnızca dönemlik katkı payı öder.
              </p>
              <div className="mt-2 bg-white rounded-xl px-5 py-4 flex items-center gap-3">
                <CurrencyEuroIcon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span
                  className="text-sm font-semibold text-green-950"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  85 € – 350 € / dönem
                </span>
              </div>
            </div>

            <div className="bg-green-950 rounded-2xl p-8 flex flex-col gap-4 text-amber-50">
              <div className="w-12 h-12 rounded-xl bg-green-800 flex items-center justify-center">
                <BuildingLibraryIcon className="w-6 h-6 text-amber-400" />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Özel Üniversiteler
              </h3>
              <p
                className="text-sm text-amber-100/70 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Programın içeriği ve üniversitenin prestiji fiyatları etkileyebilir.
              </p>
              <div className="mt-2 bg-green-800 rounded-xl px-5 py-4 flex items-center gap-3">
                <CurrencyEuroIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span
                  className="text-sm font-semibold text-amber-50"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  8.500 € – 18.000 € / yıl
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Süre, Tarih, Yaşam ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
              <ClockIcon className="w-6 h-6 text-amber-500" />
            </div>
            <h3
              className="text-base font-bold text-green-950"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Eğitim Süresi
            </h3>
            <p
              className="text-sm text-green-950/65 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Programlar genellikle <strong>1,5 – 2 yıl</strong> (3 veya 4 dönem) sürer. MBA ve LLM programları daha kısa, mühendislik bölümleri daha uzun olabilir.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
              <CalendarDaysIcon className="w-6 h-6 text-amber-500" />
            </div>
            <h3
              className="text-base font-bold text-green-950"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Başvuru Tarihleri
            </h3>
            <div style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm text-green-950/65 leading-relaxed space-y-2">
              <div>
                <p className="font-semibold text-green-950/80">Kış Dönemi</p>
                <p>Son başvuru: <strong>15 Temmuz</strong></p>
              </div>
              <div>
                <p className="font-semibold text-green-950/80">Yaz Dönemi</p>
                <p>Son başvuru: <strong>15 Ocak</strong></p>
              </div>
              <p className="text-xs italic">En az 6 ay önceden planlanması önerilir.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
              <BriefcaseIcon className="w-6 h-6 text-amber-500" />
            </div>
            <h3
              className="text-base font-bold text-green-950"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Yaşam Masrafları
            </h3>
            <p
              className="text-sm text-green-950/65 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Aylık ortalama <strong>850 – 1.500 €</strong> arasındadır. Berlin, Münih ve Frankfurt gibi büyük şehirlerde maliyetler daha yüksek olabilir.
            </p>
          </div>
        </div>
      </section>

      {/* ── Çalışma Hakkı ── */}
      <section className="bg-amber-400">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-16 h-16 rounded-2xl bg-green-950 flex items-center justify-center flex-shrink-0">
            <UserGroupIcon className="w-8 h-8 text-amber-400" />
          </div>
          <div>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-green-950 mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Çalışma Hakkı
            </h2>
            <p
              className="text-green-950/80 text-base leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Uluslararası öğrenciler haftada <strong>20 saate kadar</strong> veya yılda <strong>120 tam gün / 240 yarım gün</strong> çalışabilir. Mezuniyet sonrasında ise <strong>18 aya kadar</strong> iş arama vizesiyle Almanya'da kalma hakkı tanınmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* ── İngilizce Veren Üniversiteler ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12">

            <div className="md:w-1/2">
              <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
              <h2
                className="text-2xl md:text-3xl font-extrabold text-green-950 mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                İngilizce Program Sunan Üniversiteler
              </h2>
              <div className="flex flex-col gap-3">
                {universities.map((uni) => (
                  <div key={uni} className="flex items-center gap-3 bg-amber-50 rounded-xl px-5 py-4">
                    <BuildingOffice2Icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span
                      className="text-sm font-semibold text-green-950"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {uni}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
              <h2
                className="text-2xl md:text-3xl font-extrabold text-green-950 mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Diploma Denkliği
              </h2>
              <div className="bg-amber-50 rounded-2xl p-6 flex flex-col gap-4">
                <p
                  className="text-sm text-green-950/65 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Almanya'daki üniversiteler Bologna eğitim sistemine dahil olduğu için alınan diplomalar birçok ülkede tanınmaktadır. Türkiye'de denklik süreçleri <strong className="text-green-950">YÖK</strong> tarafından değerlendirilmektedir.
                </p>
                <div className="flex flex-col gap-2">
                  {["Üniversitenin tanınırlığı", "Eğitim süresi ve içeriği", "Bologna uyumluluğu"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <DocumentCheckIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span
                        className="text-sm text-green-950/65"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className="text-xs text-green-950/50 italic"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Başvuru yapmadan önce üniversitenin tanınırlığını kontrol etmeniz önerilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Popüler Bölümler ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
        <h2
          className="text-3xl md:text-4xl font-extrabold text-green-950 mb-10"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          En Çok Tercih Edilen Bölümler
        </h2>
        <div className="flex flex-wrap gap-3">
          {popularMajors.map((major) => (
            <span
              key={major}
              className="px-5 py-2.5 bg-white border border-amber-200 rounded-full text-sm font-semibold text-green-950 hover:bg-amber-400 hover:border-amber-400 transition-colors duration-200 cursor-default"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {major}
            </span>
          ))}
        </div>
      </section>

      {/* ── Kimler İçin Avantajlı ── */}
      <section className="bg-green-950 text-amber-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3">
              <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
              <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Kimler İçin Avantajlıdır?
              </h2>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {targetAudience.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-green-800/50 rounded-xl p-4">
                  <CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span
                    className="text-sm text-amber-100/80 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
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
