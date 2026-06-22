"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  "Ücretsiz Ön Görüşme",
  "Üniversite & Bölüm Seçimi",
  "Belgelerin Hazırlanması",
  "Başvuruların Gönderilmesi",
  "Vize Süreci",
  "Yerleşim & İlk Günler",
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 bg-green-950 px-6 md:px-10">
      <h2 className="text-center text-3xl font-bold text-amber-50 font-serif mb-12">
        UniWay ile Adım Adım Almanya
      </h2>

      {/* Mobile: dikey liste */}
      <ul className="md:hidden flex flex-col gap-5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-4">
            <span
              className={`w-4 h-4 rounded-full border-2 border-amber-50 flex-shrink-0 transition-colors duration-300 ${
                visible ? "bg-amber-50" : "bg-green-800"
              }`}
              style={{ transitionDelay: `${i * 300}ms` }}
            />
            <span
              className={`text-sm text-amber-50 font-medium transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${300 + i * 300}ms` }}
            >
              {s}
            </span>
          </li>
        ))}
      </ul>

      {/* Desktop: yatay çizgi */}
      <div className="hidden md:block relative mx-auto max-w-5xl">
        <div className="h-1 bg-green-800 rounded-full" />
        <div
          className={`absolute top-0 left-0 h-1 bg-amber-50 rounded-full transition-[width] duration-[2500ms] ${
            visible ? "w-full" : "w-0"
          }`}
        />
        <ul className="flex justify-between mt-[-10px]">
          {steps.map((s, i) => (
            <li key={s} className="relative flex flex-col items-center text-center">
              <span
                className={`w-5 h-5 rounded-full border-2 border-amber-50 transition-colors duration-300 ${
                  visible ? "bg-amber-50" : "bg-green-800"
                }`}
                style={{ transitionDelay: `${i * 400}ms` }}
              />
              <span
                className={`mt-3 text-sm text-amber-50 font-medium w-28 transition-opacity duration-300 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${400 + i * 400}ms` }}
              >
                {s}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
