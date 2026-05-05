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
      { threshold: 0.4 }
    );
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 overflow-hidden bg-green-950  px-10">
      <h2 className="text-center text-3xl font-bold text-amber-50 font-serif mb-16">
        UniWay ile Adım Adım Almanya
      </h2>

      {/* çizgi */}
      <div className="relative mx-auto max-w-8xl">
        <div className="h-1 bg-gray-300 rounded-full" />
        {/* dolan ışık efekti */}
        <div
          className={`absolute top-0 left-0 h-1 bg-amber-500 rounded-full transition-[width] duration-[2500ms] ${
            visible ? "w-full" : "w-0"
          }`}
        />

        {/* milestone noktaları */}
        <ul className="flex justify-between mt-[-10px]">
          {steps.map((s, i) => (
            <li
              key={s}
              className={`relative flex flex-col items-center text-center w-max`}
            >
              {/* nokta */}
              <span
                className={`w-5 h-5 rounded-full border-2 border-white transition-colors duration-300 ${
                  visible ? "bg-emerald-500" : "bg-gray-300"
                }`}
                style={{ transitionDelay: `${i * 400}ms` }}
              />
              {/* etiket */}
              <span
                className={`mt-3 text-sm text-amber-50 font-medium w-32 ${
                  visible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
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


