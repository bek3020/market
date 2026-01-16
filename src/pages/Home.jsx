import React from "react";

// Rasmlaringiz (Ikonkalar)
import Card1 from "../assets/img/card1.png";
import Card2 from "../assets/img/card2.png";
import Card3 from "../assets/img/card3.png";
import Card4 from "../assets/img/card4.png";
import Card5 from "../assets/img/card5.png";
import Card6 from "../assets/img/card6.png";
import Card7 from "../assets/img/cardt7.png";
import Card8 from "../assets/img/card8.png";
import Card9 from "../assets/img/card9.png";
import { NavLink } from "react-router-dom";

const cards = [
  { img: Card1, title: "Beton va qorishmalar" },
  { img: Card2, title: "Kabel mahsulotlari" },
  { img: Card3, title: "To'ldiruvchilar" },
  { img: Card4, title: "Metall prokat va buyumlar" },
  { img: Card5, title: "Yog'och material va buyumlar" },
  { img: Card6, title: "Plastmassalar" },
  { img: Card7, title: "Keramika materiallari va buyumlar" },
  { img: Card8, title: "Issiqlik izolyatsiyasi va akustik materiallar" },
  { img: Card9, title: "Tom yopish va gidroizolyatsiya materiallari" },
  { img: Card9, title: "Qoplamali va yopishtiruvchi materiallar va buyumlar" },
];

const Home = () => {
  return (
    <div className="bg-[#f8fafc] py-10 min-h-screen">
      <div className="max-w-[1240px] mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm border border-transparent hover:shadow-md hover:border-blue-100 transition-all cursor-pointer min-h-[100px]"
            >
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-[#2d3748] text-sm font-medium leading-tight">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-10">
        <h1 className="relative pb-2 font-medium text-[24px] leading-[100%] uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100px] after:h-[2px] after:bg-blue-400">
          Ko‘p ko‘rilganlar
        </h1>
        <div className="flex items-center gap-4 mt-6">
          <NavLink
            to="/katalog1"
            className={({ isActive }) =>
              `px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300
      ${
        isActive
          ? "border-[#1890FF] bg-[#1890FF]/10 text-[#1890FF]"
          : "border-gray-200 bg-white text-gray-700 hover:border-[#1890FF]"
      }`
            }
          >
            <i className="fa-solid fa-list"></i>
          </NavLink>

          <NavLink
            to="/katalog2"
            className={({ isActive }) =>
              `px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300
      ${
        isActive
          ? "border-[#1890FF] bg-[#1890FF]/10 text-[#1890FF]"
          : "border-gray-200 bg-white text-gray-700 hover:border-[#1890FF]"
      }`
            }
          >
            <i className="fa-solid fa-bars"></i>
          </NavLink>

          <NavLink
            to="/katalog3"
            className={({ isActive }) =>
              `px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300
      ${
        isActive
          ? "border-[#1890FF] bg-[#1890FF]/10 text-[#1890FF]"
          : "border-gray-200 bg-white text-gray-700 hover:border-[#1890FF]"
      }`
            }
          >
            
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
