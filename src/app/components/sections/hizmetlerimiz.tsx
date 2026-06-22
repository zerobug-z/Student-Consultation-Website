import Link from "next/link";
import {
  AcademicCapIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  IdentificationIcon,
  HomeIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: AcademicCapIcon,
    title: "Üniversite & Bölüm Seçimi",
    desc: "Akademik geçmişin ve kariyer hedeflerin doğrultusunda en uygun üniversiteyi birlikte seçiyoruz.",
    anchor: "universite-bolum-secimi",
  },
  {
    icon: DocumentTextIcon,
    title: "Başvuru Belge Hazırlığı",
    desc: "CV, motivasyon mektubu ve referans yazılarını Alman üniversitelerinin beklentilerine göre hazırlıyoruz.",
    anchor: "basvuru-belge-hazirligi",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Başvuru Süreci Takibi",
    desc: "Başvurularını takip ediyor, üniversitelerle iletişim kuruyor ve eksiklikleri zamanında tamamlıyoruz.",
    anchor: "basvuru-sureci-takibi",
  },
  {
    icon: IdentificationIcon,
    title: "Vize Süreci Yönetimi",
    desc: "Belge hazırlığından randevu almaya, vize onayına kadar tüm adımları seninle yönetiyoruz.",
    anchor: "vize-sureci-yonetimi",
  },
  {
    icon: HomeIcon,
    title: "Konaklama & Yerleşim",
    desc: "WG ve yurt başvurularında rehberlik ediyor, Anmeldung ve banka işlemlerinde yanında oluyoruz.",
    anchor: "konaklama-yerlesim",
  },
  {
    icon: BookOpenIcon,
    title: "Almanca Hazırlık Rehberliği",
    desc: "TestDaF, Telc ve Goethe sınavlarına yönelik stratejik hazırlık desteği sunuyoruz.",
    anchor: "almanca-hazirlik",
  },
];

export default function Hizmetlerimiz() {
  return (
    <section className="bg-amber-50 px-6 md:px-14 py-14">

      <h2
        className="text-3xl md:text-5xl font-extrabold text-green-950 mb-10"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Hizmetlerimiz
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, anchor }) => (
          <div
            key={title}
            className="relative bg-green-950 rounded-2xl p-8 flex flex-col gap-5 group hover:bg-green-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-950/30 transition-all duration-300 overflow-hidden border border-green-800"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-amber-400 rounded-t-2xl" />

            <div className="w-12 h-12 rounded-xl bg-green-800 flex items-center justify-center">
              <Icon className="w-6 h-6 text-amber-400" />
            </div>

            <h3
              className="text-amber-50 text-lg md:text-xl font-bold leading-snug"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {title}
            </h3>

            <p
              className="text-amber-100/60 text-sm leading-relaxed flex-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {desc}
            </p>

            <Link
              href={`/hizmetlerimiz#${anchor}`}
              className="text-xs font-bold tracking-widest text-amber-400 group-hover:text-amber-300 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              DETAYLI ÖĞREN ▶
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
}
