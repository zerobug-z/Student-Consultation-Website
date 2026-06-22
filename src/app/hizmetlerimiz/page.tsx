import Link from "next/link";
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import {
  AcademicCapIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  IdentificationIcon,
  HomeIcon,
  BookOpenIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    id: "universite-bolum-secimi",
    icon: AcademicCapIcon,
    title: "Üniversite & Bölüm Seçimi",
    subtitle: "Sana özel bir yol haritasıyla doğru üniversiteye ulaş.",
    desc: "Almanya'daki yüzlerce üniversite ve binlerce bölüm arasından sana en uygun olanı seçmek karmaşık görünebilir. Akademik geçmişini, not ortalamanı, dil seviyeni ve kariyer hedeflerini birlikte değerlendiriyor; kamu üniversitelerinden Fachhochschule'lere kadar tüm seçenekleri masaya yatırıyoruz.",
    items: [
      "Akademik profil ve not ortalaması analizi",
      "Bölüm ve program karşılaştırması",
      "Üniversite sıralama ve tanınırlık değerlendirmesi",
      "Şehir ve yaşam maliyeti karşılaştırması",
      "NC (numerus clausus) hesaplama rehberliği",
      "Yedek tercih stratejisi oluşturma",
    ],
    bg: "bg-white",
  },
  {
    id: "basvuru-belge-hazirligi",
    icon: DocumentTextIcon,
    title: "Başvuru Belge Hazırlığı",
    subtitle: "Alman üniversitelerinin beklentilerine uygun, güçlü bir başvuru dosyası.",
    desc: "Başvuru belgeleri, kabul kararında belirleyici rol oynar. CV formatından motivasyon mektubu içeriğine kadar her detayı Alman üniversitelerinin standartlarına göre şekillendiriyoruz. Belge eksikliği ya da format hatası yüzünden reddedilme riskini minimize ediyoruz.",
    items: [
      "Europass / Alman standardında CV hazırlama",
      "Motivasyon mektubu yazımı ve düzenlenmesi",
      "Referans mektubu için öğretmen/hoca yönlendirmesi",
      "Diploma ve transkript tercümesi rehberliği",
      "Apostil ve noter tasdik süreç danışmanlığı",
      "Uni-Assist için belge kontrol listesi",
    ],
    bg: "bg-amber-50",
  },
  {
    id: "basvuru-sureci-takibi",
    icon: ClipboardDocumentCheckIcon,
    title: "Başvuru Süreci Takibi",
    subtitle: "Hiçbir son tarihi kaçırma, hiçbir adımı atlatma.",
    desc: "Başvuru sürecinde onlarca üniversiteyle yazışmak, portal takibi yapmak ve son tarihleri yönetmek yorucu olabilir. Başvurularını bizimle takip ediyor, üniversitelerle iletişimi koordine ediyor ve eksik belgeleri en kısa sürede tamamlıyoruz.",
    items: [
      "Uni-Assist ve doğrudan başvuru portal yönetimi",
      "Başvuru takvimi ve son tarih takibi",
      "Üniversitelerle e-posta iletişimi desteği",
      "Eksik veya hatalı belge tespiti ve düzeltme",
      "Kabul / red mektubu değerlendirmesi",
      "Şartlı kabul (Zulassung) süreç yönetimi",
    ],
    bg: "bg-white",
  },
  {
    id: "vize-sureci-yonetimi",
    icon: IdentificationIcon,
    title: "Vize Süreci Yönetimi",
    subtitle: "Konsolosluğa adım atmadan önce her şey hazır olsun.",
    desc: "Öğrenci vizesi başvurusu; doğru belgelerle, doğru sırayla ve doğru zamanda yapılmalıdır. Bloke hesap açılışından randevu planlamasına, sağlık sigortası seçiminden vize mülakatı hazırlığına kadar tüm adımlarda yanındayız.",
    items: [
      "Gerekli belge listesi hazırlama",
      "Bloke hesap (Sperrkonto) açma rehberliği",
      "Konsolosluk randevusu planlama ve takip",
      "Seyahat sağlık sigortası seçim danışmanlığı",
      "Vize mülakat hazırlığı",
      "Vize sonrası Almanya'ya giriş süreci bilgilendirmesi",
    ],
    bg: "bg-amber-50",
  },
  {
    id: "konaklama-yerlesim",
    icon: HomeIcon,
    title: "Konaklama & Yerleşim",
    subtitle: "Almanya'ya adım attığında ev hazır olsun.",
    desc: "Almanya'ya varıştan önce ve sonra yapılması gereken onlarca idari işlem seni bekliyor. Konaklama bulmaktan ikametgah kaydına, banka hesabından sigorta kurulumuna kadar yerleşim sürecinin her adımında rehberlik ediyoruz.",
    items: [
      "Öğrenci yurdu (Studentenwohnheim) başvurusu",
      "WG (paylaşımlı daire) arama platformları rehberliği",
      "Anmeldung (ikametgah kaydı) süreç desteği",
      "Banka hesabı açma danışmanlığı",
      "Öğrenci sigortası (TK, AOK, Barmer) seçimi",
      "Almanya'ya uyum için pratik bilgiler",
    ],
    bg: "bg-white",
  },
  {
    id: "almanca-hazirlik",
    icon: BookOpenIcon,
    title: "Almanca Hazırlık Rehberliği",
    subtitle: "Hangi sınava hazırlanacağından hangi kaynakları kullanacağına kadar stratejik rehberlik.",
    desc: "Almanca dil sınavları, Alman üniversitelerine kabulün önündeki en kritik eşiği oluşturur. TestDaF, DSH, Telc C1 Hochschule ve Goethe sertifikaları arasında sana en uygun olanı seçmenize yardımcı oluyor; çalışma planı ve kaynak önerileriyle sınava hazırlık sürecini planlıyoruz.",
    items: [
      "Hedef üniversiteye göre sınav seçimi",
      "TestDaF / DSH / Telc / Goethe süreç karşılaştırması",
      "Kişiselleştirilmiş çalışma takvimi oluşturma",
      "Kaynak ve materyal önerileri",
      "Sınav kayıt ve başvuru takvimi takibi",
      "B1–B2 seviyesinden C1'e geçiş stratejisi",
    ],
    bg: "bg-amber-50",
  },
];

export default function HizmetlerimizPage() {
  return (
    <main className="bg-amber-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-green-950 text-amber-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p
            className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            UniWay
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hizmetlerimiz
          </h1>
          <p
            className="text-amber-100/80 text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Üniversite seçiminden vize onayına, belgelerden yerleşime kadar Almanya yolculuğunun her adımında yanındayız.
          </p>

          {/* Quick navigation */}
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 bg-green-800 hover:bg-amber-400 hover:text-green-950 text-amber-50 rounded-lg text-xs font-semibold transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map(({ id, icon: Icon, title, subtitle, desc, items, bg }) => (
        <section key={id} id={id} className={`${bg} scroll-mt-20`}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row gap-12">

              {/* Left: icon + title */}
              <div className="md:w-1/3 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-green-950/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>
                <div className="w-12 h-1 bg-amber-400 rounded-full" />
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-green-950 leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {title}
                </h2>
                <p
                  className="text-sm font-semibold text-amber-500 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {subtitle}
                </p>
              </div>

              {/* Right: description + checklist */}
              <div className="md:w-2/3 flex flex-col gap-6">
                <p
                  className="text-base text-green-950/70 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {desc}
                </p>
                <div className="bg-white rounded-2xl p-6 border border-green-950/10">
                  <h3
                    className="text-sm font-bold text-green-950 mb-4 uppercase tracking-wider"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Bu hizmet kapsamında
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span
                          className="text-sm text-green-950/75 leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-green-950">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-amber-50"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Nereden başlayacağını bilmiyor musun?
          </h2>
          <p
            className="text-amber-100/75 text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ücretsiz ön görüşmemizde hangi hizmetlerin sana uygun olduğunu birlikte belirleyelim.
          </p>
          <Link
            href="https://calendar.app.google/LAMxAL8PsUxrSxCQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-4 bg-amber-400 text-green-950 font-bold rounded-xl hover:bg-amber-300 transition-colors duration-300"
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
