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
  },
  {
    icon: DocumentTextIcon,
    title: "Başvuru Belge Hazırlığı",
    desc: "CV, motivasyon mektubu ve referans yazılarını Alman üniversitelerinin beklentilerine göre hazırlıyoruz.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Başvuru Süreci Takibi",
    desc: "Başvurularını takip ediyor, üniversitelerle iletişim kuruyor ve eksiklikleri zamanında tamamlıyoruz.",
  },
  {
    icon: IdentificationIcon,
    title: "Vize Süreci Yönetimi",
    desc: "Belge hazırlığından randevu almaya, vize onayına kadar tüm adımları seninle yönetiyoruz.",
  },
  {
    icon: HomeIcon,
    title: "Konaklama & Yerleşim",
    desc: "WG ve yurt başvurularında rehberlik ediyor, Anmeldung ve banka işlemlerinde yanında oluyoruz.",
  },
  {
    icon: BookOpenIcon,
    title: "Almanca Hazırlık Rehberliği",
    desc: "TestDaF, Telc ve Goethe sınavlarına yönelik stratejik hazırlık desteği sunuyoruz.",
  },
];

export default function Hizmetlerimiz() {
  return (
    <section className="bg-green-950 px-6 md:px-14 py-14">

      {/* Başlık */}
      <h2
        className="text-3xl md:text-5xl font-extrabold text-amber-50 mb-10"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Hizmetlerimiz
      </h2>

      {/* Grid — gap-px + bg-green-800 creates the divider lines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-green-800 gap-px">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-green-950 p-8 flex flex-col gap-5 group hover:bg-green-900 transition-colors duration-300"
          >
            {/* Icon */}
            <Icon className="w-10 h-10 text-amber-400 stroke-[1.5]" />

            {/* Title */}
            <h3
              className="text-white text-lg md:text-xl font-bold leading-snug"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="text-green-300 text-sm leading-relaxed flex-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {desc}
            </p>

            {/* CTA */}
            <span className="text-xs font-bold tracking-widest text-amber-400 group-hover:text-amber-300 transition-colors cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              DETAYLI ÖĞREN ▶
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
