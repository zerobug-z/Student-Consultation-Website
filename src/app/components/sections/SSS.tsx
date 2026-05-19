"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Almanya başvuru süreci toplam kaç ay sürer?",
    a: "Başvuru süreci öğrencinin eğitim durumu, dil seviyesi ve başvuracağı programa göre değişir. Genel olarak ortalama 4 ila 12 ay arasında tamamlanır. Dil yeterliliği hazırsa süreç daha hızlı ilerler; dil hazırlığı gerekiyorsa biraz daha uzayabilir.",
  },
  {
    q: "Almanya'da eğitim tamamen ücretsiz mi?",
    a: "Evet. Devlet üniversitelerinde eğitim büyük ölçüde ücretsizdir. Üniversiteler yalnızca dönem başına ortalama 150 – 400 Euro arasında bir sömestr katkı ücreti alır. Bunun dışında öğrenim ücreti bulunmamaktadır.",
  },
  {
    q: "Almanya'da istediğim bölüme yerleşebilir miyim?",
    a: "Her öğrenci doğrudan istediği bölüme yerleşemeyebilir. Alman üniversiteleri, Türkiye'de okunan bölüm ile Almanya'da hedeflenen bölüm arasında akademik uyum arar. Bu nedenle genellikle mevcut bölümünüze yakın veya bağlantılı bir bölüm seçmeniz gerekir.",
  },
  {
    q: "Almanya'da üniversite okumak için hangi belgelere ihtiyacım var?",
    a: "Genellikle Anadolu Lisesi veya Fen Lisesi mezunu olmanız ve Türkiye'de Almanya'da okumak istediğiniz bölüme yakın bir 4 yıllık programa kayıtlı ya da mezun olmanız gerekir. Yeterli Almanca bilginiz yoksa endişelenmeyin — şartlı kabul alarak Almanya'ya gidip önce dil eğitimi alabilir, ardından üniversite eğitiminize başlayabilirsiniz.",
  },
  {
    q: "Almanya'da geçimimi nasıl sağlarım?",
    a: "Düşündüğünüzden daha kolay olabilir. Uluslararası öğrenciler için çeşitli burs imkânları mevcuttur. Bunun yanında öğrenci statüsünde haftada maksimum 20 saat çalışma hakkınız vardır. Pek çok öğrenci part-time çalışarak eğitim ve yaşam giderlerini karşılayabilmektedir.",
  },
  {
    q: "Size nasıl ulaşabilirim?",
    a: "\"Bize Ulaşın\" sayfasındaki iletişim formunu doldurabilir veya ücretsiz ön görüşme talebinde bulunabilirsiniz. Merak ettiğiniz tüm soruları dilediğiniz zaman bize iletebilirsiniz.",
  },
];

export default function SSS() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 md:px-16 py-16 max-w-4xl mx-auto">

      {/* Başlık */}
      <h2
        className="text-3xl md:text-5xl font-extrabold text-green-950 mb-12"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Sıkça Sorulan Sorular
      </h2>

      {/* Accordion */}
      <div className="border-t border-gray-200">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-gray-200">

              {/* Question row */}
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center gap-4 py-5 text-left group"
              >
                {/* Number badge */}
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-green-950 text-white text-sm font-bold flex items-center justify-center"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {i + 1}
                </span>

                {/* Question text */}
                <span
                  className="flex-1 text-base md:text-lg font-semibold text-green-950 group-hover:text-amber-600 transition-colors duration-200"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {faq.q}
                </span>

                {/* +/- icon */}
                <span className="flex-shrink-0 text-2xl font-light text-green-950 group-hover:text-amber-600 transition-colors duration-200 select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Answer — smooth reveal with gray bg like reference */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <p
                  className="bg-gray-50 text-gray-700 leading-relaxed px-6 py-5 mb-2 rounded"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
                >
                  {faq.a}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
