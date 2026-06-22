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
  DocumentCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  CurrencyEuroIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

const advantages = [
  {
    icon: BanknotesIcon,
    title: "Ücretsiz veya Düşük Maliyetli Eğitim",
    desc: "Devlet üniversitelerinin büyük çoğunluğunda eğitim ücretsizdir. Öğrenciler yalnızca dönemlik katkı payı öderler.",
  },
  {
    icon: AcademicCapIcon,
    title: "Uluslararası Geçerliliğe Sahip Diploma",
    desc: "Alman üniversitelerinden alınan diplomalar dünya genelinde tanınır ve yüksek itibara sahiptir.",
  },
  {
    icon: SparklesIcon,
    title: "Yüksek Kaliteli Eğitim Sistemi",
    desc: "Almanya; araştırma odaklı, uygulamalı ve disiplinli eğitim sistemiyle öne çıkar.",
  },
  {
    icon: BriefcaseIcon,
    title: "Kariyer ve İş İmkânları",
    desc: "Öğrenciler eğitim süresince yasal olarak çalışma hakkına sahiptir. Mezuniyet sonrasında Almanya'da iş bulma ve oturum izni alma fırsatı bulunmaktadır.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Uygulamalı Eğitim Modeli",
    desc: "Birçok üniversite teorik eğitimi staj ve proje çalışmalarıyla destekler. Mezun olmadan iş deneyimi kazanılabilir.",
  },
  {
    icon: GlobeAltIcon,
    title: "Güçlü Dil ve Kültürel Deneyim",
    desc: "Almanca öğrenerek uluslararası kariyerde avantaj elde edilir; Avrupa'nın merkezinde kültürel bir deneyim yaşanır.",
  },
];

const documents = [
  "Lise diploması",
  "Transkript (not dökümü)",
  "Üniversite sınav sonuç belgesi",
  "ÖSYM yerleştirme belgesi",
  "Pasaport veya kimlik fotokopisi",
  "Dil yeterlilik belgesi",
  "Motivasyon mektubu (bazı üniversitelerde)",
  "CV (özgeçmiş)",
  "Sağlık sigortası belgesi",
];

const popularMajors = [
  "Tıp",
  "Bilgisayar Mühendisliği",
  "Makine Mühendisliği",
  "Yapay Zeka ve Veri Bilimi",
  "Psikoloji",
  "Mimarlık",
  "Ekonomi ve İşletme",
  "Elektrik-Elektronik Mühendisliği",
  "Otomotiv Mühendisliği",
];

const targetAudience = [
  "Avrupa'da kariyer hedefleyenler",
  "Uygulamalı ve kaliteli eğitim isteyenler",
  "Düşük maliyetle yurtdışında okumak isteyenler",
  "Mezuniyet sonrası iş fırsatı arayanlar",
  "Uluslararası deneyim kazanmak isteyenler",
];

export default function LisansPage() {
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
            Almanya'da Lisans Eğitimi
          </h1>
          <p
            className="text-amber-100/80 text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Almanya, yüksek eğitim kalitesi, güçlü ekonomisi ve uluslararası geçerliliğe sahip diplomalarıyla dünyanın en çok tercih edilen eğitim destinasyonlarından biridir.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-amber-400">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "Ücretsiz", label: "Devlet Üniversiteleri" },
            { value: "6 Dönem", label: "Lisans Süresi" },
            { value: "140 Gün", label: "Yıllık Çalışma Hakkı" },
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
          Almanya'da lisans eğitimi almak isteyen öğrenciler; akademik yeterlilik, dil seviyesi ve başvuru belgeleri açısından belirli şartları yerine getirmelidir. Eğitim süresince öğrencilere sunulan çalışma izni sayesinde hem yaşam giderlerini karşılamak hem de profesyonel deneyim kazanmak mümkündür.
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
              Almanya'da Lisans Eğitiminin Avantajları
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
              Üniversiteye ve bölüme göre ek belge talep edilebilir.
            </p>
          </div>

          {/* Şartlar */}
          <div className="flex flex-col gap-8">
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
                Akademik Şartlar
              </h3>
              <p
                className="text-sm text-green-950/65 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Türkiye'de alınan lise diplomasının Almanya'daki üniversite sistemine uygun olması gerekir. Çoğu üniversite, öğrencinin Türkiye'de 4 yıllık bir bölüme yerleşmiş olmasını talep eder.
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
                <p>TestDaF · DSH · Telc C1 Hochschule</p>
                <p className="font-semibold text-green-950/80 mt-2">İngilizce programlar:</p>
                <p>IELTS · TOEFL</p>
                <p className="mt-2 text-xs italic">Bazı üniversiteler B1–B2 seviyesinde başvuru kabul ederek dil seviyesinin sonradan tamamlanmasını isteyebilir.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
              <h3
                className="text-base font-bold text-green-950 flex items-center gap-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <BanknotesIcon className="w-5 h-5 text-amber-500" />
                Bloke Hesap & Sağlık Sigortası
              </h3>
              <p
                className="text-sm text-green-950/65 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Öğrencilerin maddi yeterliliğini kanıtlamak için bloke hesap açması zorunludur. Eğitim süresince geçerli bir sağlık sigortası da gerekmektedir.
              </p>
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
                Dil seviyesi veya bazı akademik şartları henüz tamamlamamış öğrencilere verilen geçici kabul türüdür. Bu sistem sayesinde öğrenciler Almanya'ya giderek dil eğitimi alabilir ve gerekli şartları tamamladıktan sonra üniversiteye tam kayıt yaptırabilirler.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Almanca seviyesinin yetersiz olması",
                  "Studienkolleg hazırlık programı gerekliliği",
                  "Eksik akademik belgelerin tamamlanması",
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
                Eğitim büyük ölçüde ücretsizdir. Öğrencilerden yalnızca dönemlik katkı payı alınır.
              </p>
              <div className="mt-2 bg-white rounded-xl px-5 py-4 flex items-center gap-3">
                <CurrencyEuroIcon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span
                  className="text-sm font-semibold text-green-950"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  150 € – 500 € / dönem
                </span>
              </div>
              <p
                className="text-xs text-green-950/50 italic"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Baden-Württemberg eyaletinde uluslararası öğrenciler için ek öğrenim ücreti uygulanabilir.
              </p>
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
                Yıllık ücretler bölüme ve üniversiteye göre değişiklik gösterir.
              </p>
              <div className="mt-2 bg-green-800 rounded-xl px-5 py-4 flex items-center gap-3">
                <CurrencyEuroIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span
                  className="text-sm font-semibold text-amber-50"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  5.000 € – 26.000 € / yıl
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Yaşam, Süre, Tarih ── */}
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
              Lisans programları genellikle <strong>3 yıl (6 dönem)</strong> sürer. Mühendislik gibi teknik bölümlerde 3,5–4 yıl, tıp ve diş hekimliğinde daha uzun olabilir.
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
              <p className="text-xs italic">Tarihler üniversiteye göre değişebilir.</p>
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
              Aylık ortalama yaşam maliyeti <strong>850 – 1.400 €</strong> arasındadır. Münih ve Hamburg daha pahalı; Leipzig ve Dresden daha ekonomiktir.
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
              Uluslararası öğrenciler Almanya'da eğitim alırken yasal olarak yılda <strong>140 tam gün</strong> veya <strong>280 yarım gün</strong> çalışma iznine sahiptir. Bu durum öğrencilere hem ek gelir hem de iş deneyimi kazanma fırsatı sağlar.
            </p>
          </div>
        </div>
      </section>

      {/* ── Popüler Bölümler ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
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
                className="px-5 py-2.5 bg-amber-50 border border-amber-200 rounded-full text-sm font-semibold text-green-950 hover:bg-amber-400 hover:border-amber-400 transition-colors duration-200 cursor-default"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {major}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dil Sınavları & Denklik ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
            <h2
              className="text-2xl md:text-3xl font-extrabold text-green-950 mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Dil Sınavları
            </h2>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3
                  className="text-sm font-bold text-green-950 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Almanca Programlar
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["TestDaF", "DSH", "Goethe Sertifikası", "Telc C1 Hochschule"].map((exam) => (
                    <span
                      key={exam}
                      className="px-3 py-1 bg-green-950 text-amber-50 rounded-lg text-xs font-semibold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3
                  className="text-sm font-bold text-green-950 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  İngilizce Programlar
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["IELTS", "TOEFL"].map((exam) => (
                    <span
                      key={exam}
                      className="px-3 py-1 bg-amber-400 text-green-950 rounded-lg text-xs font-semibold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
              <p
                className="text-xs text-green-950/50 italic px-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Her üniversitenin istediği minimum puan farklı olabilir.
              </p>
            </div>
          </div>

          <div>
            <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
            <h2
              className="text-2xl md:text-3xl font-extrabold text-green-950 mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Diploma Denkliği
            </h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <p
                className="text-sm text-green-950/65 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Türkiye'deki birçok üniversite Almanya tarafından tanınmaktadır. Diploma denkliği işlemleri genellikle <strong className="text-green-950">ZAB</strong> tarafından değerlendirilir.
              </p>
              <div className="flex flex-col gap-2 mt-2">
                {["Üniversitenin tanınırlığı", "Eğitim süresi", "Ders içerikleri"].map((item) => (
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
                Bazı durumlarda ek eğitim veya adaptasyon programı talep edilebilir.
              </p>
            </div>
          </div>
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
