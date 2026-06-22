import Link from "next/link";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import {
  ClockIcon,
  AcademicCapIcon,
  BookOpenIcon,
  StarIcon,
  LightBulbIcon,
  CalendarDaysIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const exams = [
  {
    name: "TestDaF",
    level: "B2 – C1",
    desc: "Üniversite başvurularında en çok kabul gören sınav. Dört bölümden oluşur: okuma, dinleme, yazma, konuşma.",
    ideal: "Almanca lisans veya yüksek lisans başvurusu yapacaklar için ideal.",
    color: "bg-green-950",
    textColor: "text-amber-50",
    subColor: "text-amber-100/70",
  },
  {
    name: "DSH",
    level: "B2 – C2",
    desc: "Doğrudan üniversite bünyesinde yapılan sınav. Yalnızca üniversiteye kabul alındıktan sonra girilebilir.",
    ideal: "Şartlı kabul alan ve Almanya'da okumak isteyen öğrenciler için.",
    color: "bg-amber-400",
    textColor: "text-green-950",
    subColor: "text-green-950/70",
  },
  {
    name: "Goethe Zertifikat",
    level: "A1 – C2",
    desc: "Tüm seviyelerde geçerli, dünya genelinde tanınan sertifika. Her seviyede bireysel olarak alınabilir.",
    ideal: "Dil gelişimini belgelendirmek isteyenler ve başlangıç seviyesindekiler için.",
    color: "bg-white",
    textColor: "text-green-950",
    subColor: "text-green-950/65",
  },
  {
    name: "Telc C1 Hochschule",
    level: "C1",
    desc: "Özellikle yüksek lisans başvurularında tercih edilen sınav. Akademik Almanca yeterliliğini ölçer.",
    ideal: "Yüksek lisans başvurusu planlayan öğrenciler için.",
    color: "bg-white",
    textColor: "text-green-950",
    subColor: "text-green-950/65",
  },
];

const levels = [
  { level: "A1", title: "Başlangıç", desc: "Temel ifadeler, tanışma, sayılar, renkler." },
  { level: "A2", title: "Temel", desc: "Günlük konuşmalar, alışveriş, yön tarifi." },
  { level: "B1", title: "Orta Öncesi", desc: "Basit metinler, deneyimler, gelecek planları." },
  { level: "B2", title: "Orta", desc: "Karmaşık metinler, tartışma, soyut konular." },
  { level: "C1", title: "İleri", desc: "Akademik dil, uzun metinler, akıcı iletişim." },
  { level: "C2", title: "Ustalık", desc: "Anadil düzeyinde anlama ve ifade." },
];

const tips = [
  "Her gün en az 30 dakika Almanca dinle (podcast, dizi, müzik).",
  "Kelime öğrenmek için Anki gibi hafıza kartı uygulamaları kullan.",
  "Bir dil partneri bul — konuşma pratiği yapmak kritik.",
  "Hedef sınavın geçmiş sorularını çöz, format alışkanlığı edin.",
  "Yazma pratiğini ihmal etme — sınavlarda puanın büyük bölümü buradan gelir.",
  "Almanca-Almanca sözlük kullan, çeviri bağımlılığından kaç.",
];

const resources = [
  { name: "Deutsche Welle (DW)", desc: "Ücretsiz A1–B2 kursları, interaktif alıştırmalar.", href: "https://learngerman.dw.com" },
  { name: "Nicos Weg", desc: "ARD tarafından hazırlanmış A1–B1 video serisi.", href: "https://learngerman.dw.com/en/nicos-weg/c-36519687" },
  { name: "Anki", desc: "Aralıklı tekrar sistemiyle kelime kartı uygulaması.", href: "https://apps.ankiweb.net" },
  { name: "italki", desc: "Birebir online Almanca ders platformu.", href: "https://www.italki.com" },
];

export default function AlmancaEgitimiPage() {
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
            Hizmetlerimiz
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Almanca Hazırlık Rehberliği
          </h1>
          <p
            className="text-amber-100/80 text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Almanya'da üniversite okumak için dil yeterliliği şart. Hangi sınavı seçeceğinden nasıl çalışacağına kadar her adımda sana rehberlik ediyoruz.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-amber-400">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "A1–C2", label: "Seviye Aralığı" },
            { value: "4 Sınav", label: "Kabul Edilen" },
            { value: "6–18 Ay", label: "Hazırlık Süresi" },
            { value: "B2–C1", label: "Üniversite İçin Gerekli" },
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

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p
          className="text-base md:text-lg text-green-950/75 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Almanya'daki üniversitelerin büyük çoğunluğu, Almanca programlara kabul için B2 veya C1 düzeyinde dil belgesi ister. İngilizce programlarda ise IELTS veya TOEFL yeterlidir. Doğru sınavı seçmek, doğru kaynakla çalışmak ve süreci planlamak başarının temelidir.
        </p>
      </section>

      {/* Sınav Karşılaştırması */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
            <h2
              className="text-3xl md:text-4xl font-extrabold text-green-950"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Hangi Sınavı Seçmelisin?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {exams.map((exam) => (
              <div
                key={exam.name}
                className={`${exam.color} rounded-2xl p-7 flex flex-col gap-3 border border-green-950/10`}
              >
                <div className="flex items-center gap-3">
                  <AcademicCapIcon className={`w-6 h-6 ${exam.textColor === "text-amber-50" ? "text-amber-400" : "text-amber-500"} flex-shrink-0`} />
                  <h3
                    className={`text-xl font-extrabold ${exam.textColor}`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {exam.name}
                  </h3>
                  <span
                    className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${exam.textColor === "text-amber-50" ? "bg-green-800 text-amber-400" : "bg-green-950/10 text-green-950"}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exam.level}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${exam.subColor}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {exam.desc}
                </p>
                <p
                  className={`text-xs font-semibold ${exam.textColor === "text-amber-50" ? "text-amber-400" : "text-green-800"}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {exam.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seviyeler */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
          <h2
            className="text-3xl md:text-4xl font-extrabold text-green-950"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Almanca Seviyeleri
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {levels.map((item, i) => (
            <div
              key={item.level}
              className={`rounded-2xl p-6 flex flex-col gap-2 border ${i >= 3 ? "bg-green-950 border-green-800" : "bg-white border-green-950/10"}`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-2xl font-extrabold ${i >= 3 ? "text-amber-400" : "text-green-950"}`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.level}
                </span>
                {i >= 3 && <ChartBarIcon className="w-4 h-4 text-amber-400" />}
              </div>
              <p
                className={`text-xs font-bold uppercase tracking-wider ${i >= 3 ? "text-amber-50" : "text-green-950"}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.title}
              </p>
              <p
                className={`text-sm leading-relaxed ${i >= 3 ? "text-amber-100/70" : "text-green-950/60"}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.desc}
              </p>
              {i >= 3 && (
                <span
                  className="mt-1 text-xs font-bold text-amber-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  ✓ Üniversite başvurusu için gerekli
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Hazırlık Süreci */}
      <section className="bg-green-950 text-amber-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3">
              <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
              <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Hazırlık Süreci Nasıl İşler?
              </h2>
            </div>
            <div className="md:w-2/3 flex flex-col gap-4">
              {[
                { step: "1", title: "Mevcut Seviyeni Belirle", desc: "Ücretsiz online testlerle ya da deneme sınavıyla başlangıç seviyeni öğren." },
                { step: "2", title: "Hedef Sınavı Seç", desc: "Başvuracağın üniversitenin şartlarına göre TestDaF, DSH, Telc veya Goethe seç." },
                { step: "3", title: "Çalışma Planı Oluştur", desc: "Sınav tarihinden geriye sayarak haftalık çalışma planı hazırla." },
                { step: "4", title: "Deneme Sınavları Çöz", desc: "Son 4–6 haftada sadece deneme sınavı ve eksik analizi yap." },
                { step: "5", title: "Sınava Gir", desc: "Kayıt tarihlerini kaçırma; popüler merkezler hızlı dolar." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex items-start gap-4 bg-green-800/40 rounded-xl p-5">
                  <span
                    className="w-8 h-8 rounded-full bg-amber-400 text-green-950 font-extrabold text-sm flex items-center justify-center flex-shrink-0"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {step}
                  </span>
                  <div>
                    <p
                      className="text-sm font-bold text-amber-50 mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-sm text-amber-100/70 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Başvuru Tarihleri */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
            <h2
              className="text-3xl md:text-4xl font-extrabold text-green-950"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Sınav Takvimi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 rounded-2xl p-7 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <CalendarDaysIcon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-base font-bold text-green-950" style={{ fontFamily: "'Poppins', sans-serif" }}>TestDaF</h3>
              <div className="text-sm text-green-950/65 leading-relaxed space-y-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>Yılda <strong>5–6</strong> kez düzenlenir.</p>
                <p>Kayıt <strong>5–6 hafta</strong> öncesinde yapılmalı.</p>
                <p className="text-xs italic mt-2">testdaf.de üzerinden başvuru yapılır.</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-7 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-base font-bold text-green-950" style={{ fontFamily: "'Poppins', sans-serif" }}>Goethe Zertifikat</h3>
              <div className="text-sm text-green-950/65 leading-relaxed space-y-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>Yıl boyunca <strong>sürekli</strong> tarihler.</p>
                <p>Türkiye'deki Goethe Enstitüleri'nde yapılır.</p>
                <p className="text-xs italic mt-2">goethe.de üzerinden başvuru yapılır.</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-7 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <BookOpenIcon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-base font-bold text-green-950" style={{ fontFamily: "'Poppins', sans-serif" }}>Telc C1 Hochschule</h3>
              <div className="text-sm text-green-950/65 leading-relaxed space-y-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>Yılda <strong>4</strong> kez düzenlenir.</p>
                <p>Türkiye'de sınırlı merkezde yapılır.</p>
                <p className="text-xs italic mt-2">telc.net üzerinden başvuru yapılır.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İpuçları */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
          <h2
            className="text-3xl md:text-4xl font-extrabold text-green-950"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Çalışma İpuçları
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip) => (
            <div key={tip} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-green-950/10">
              <LightBulbIcon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p
                className="text-sm text-green-950/75 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Kaynaklar */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
            <h2
              className="text-3xl md:text-4xl font-extrabold text-green-950"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Önerilen Kaynaklar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {resources.map((r) => (
              <div key={r.name} className="flex items-start gap-4 bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <StarIcon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p
                    className="text-sm font-bold text-green-950 mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-sm text-green-950/65 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-950">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-amber-50"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hangi sınavla başlayacağını bilmiyor musun?
          </h2>
          <p
            className="text-amber-100/75 text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ücretsiz ön görüşmemizde mevcut seviyeni ve hedefini konuşarak en uygun yol haritasını birlikte belirleyelim.
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
