import React from "react";
import Logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2B3674] text-white py-12 mt-20">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col space-y-6">
            <div className="flex items-start gap-4">
              <img
                src={Logo}
                alt="Logo"
                className="w-14 h-14 object-contain brightness-0 invert"
              />
              <div>
                <h3 className="text-[15px] font-bold leading-tight uppercase">
                  Qurilishda texnik me'yorlash va standartlashtirish
                  ilmiy-tadqiqot instituti
                </h3>
                <p className="text-[13px] text-gray-300 mt-2 leading-snug">
                  Qurilish materiallari, mashina va mexanizmlari, ish turlari
                  elektron portali
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[14px] font-medium mb-4">
                Bizni ijtimoiy tarmoqlarda kuzating:
              </p>
              <div className="flex gap-5 text-xl">
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <p className="text-[12px] text-gray-400 mt-4">
              All rights reserved © 2022
            </p>
          </div>

          {/* 2-Qism: Menyu */}
          <div className="flex flex-col">
            <h4 className="text-[18px] font-bold mb-6 uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a href="#" className="text-[#1890FF] hover:underline">
                  Qurilish materiallari
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  Mashina mexanizmlar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  Qurilish ishlari
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  Korxonalar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  Klassifikator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  Yangiliklar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1890FF] transition-colors">
                  Aloqa
                </a>
              </li>
            </ul>
          </div>

          {/* 3-Qism: Obuna bo'lish */}
          <div className="flex flex-col">
            <h4 className="text-[16px] font-bold mb-2">
              Yangiliklarga obuna bo'ling!
            </h4>
            <p className="text-[13px] text-gray-300 mb-6">
              Tezkor yangiliklar e-mail orqali
            </p>

            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email kiriting"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-[#1890FF] hover:bg-[#1177d1] text-white font-bold py-3 rounded-lg transition-all shadow-lg active:scale-95"
              >
                Obuna bo'lish
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
