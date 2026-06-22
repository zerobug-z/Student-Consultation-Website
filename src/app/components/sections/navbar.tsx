"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return(
      
      
      <header className="sticky top-0 bg-amber-50 z-50 shadow">
        <nav className="w-full justify-between mx-auto px-5 md:flex items-center gap-6">

          {/*Logo Container */}
          <div className="flex items-center justify-between md:w-auto w-full ml-6">
            <Link href="/">
            <Image className="w-24 cursor-pointer h-auto" src="/UniwayLogo.png" alt="Uniway Logo" width={96} height={96} />
            </Link>
            {/*mobile menu icon */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-green-950 size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

              </button>

            </div>
          </div>
          
          <div className={`
            flex flex-col items-center justify-start pb-3
            overflow-hidden transition-all duration-300 ease-in-out
            md:flex-row md:overflow-visible md:max-h-none md:opacity-100 md:pb-0 md:space-x-1
            ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}>


            <Link href="/" className="py-2 px-3 block hover:underline ">Anasayfa</Link>
            <Link  href="/about-us" className="py-2 px-3 block hover:underline ">Hakkimizda</Link>
            <Link href="/contact" className="py-2 px-3 block hover:underline ">Bize Ulaşın</Link>
            <Link href="/sss" className="py-2 px-3 block hover:underline ">S.S.S.</Link>
            <Link href="https://calendar.app.google/LAMxAL8PsUxrSxCQ9" target="_blank" rel="noopener noreferrer" className="py-2 px-3 block hover:underline bg-green-950 text-white font-semibold rounded-xl hover:bg-amber-400 hover:text-black transition duration-300 shadow-md ">Ücretsiz Ön Görüşme</Link>
          </div>
          {/*Dropdown menu */}
          <div className="relative">
            <button
  type="button"
  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  className="dropdown-toggle py-2 px-3 hover:underline  flex items-center gap-1 rounded-lg transition-colors duration-300"
>
  <span className="pointer-events-none select-none">Hizmetlerimiz</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`w-3 h-3 transition-transform duration-300 ${
      isDropdownOpen ? "rotate-180" : ""
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
</button>

            <div className={`absolute bg-green-900 text-white rounded-b-xl pb-2 w-48
    transition-all duration-200 ease-out transform origin-top ${
      isDropdownOpen
        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
    }`}>
  <a className="block px-6 py-2 hover:bg-green-800 hover:underline" href="/hizmetler/lisans">Lisans</a>
  <a className="block px-6 py-2 hover:bg-green-800 hover:underline" href="/hizmetler/yuksek-lisans">Yüksek Lisans</a>
  <a className="block px-6 py-2 hover:bg-green-800 hover:underline" href="/hizmetler/almanca-egitimi">Almanca Eğitimi</a>
</div>

          </div>


        </nav>
      </header>
    )
}

