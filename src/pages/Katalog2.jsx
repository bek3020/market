import React from "react";
import Home from "./Home";

// Rasmlarni import qilish
import Img1 from "../assets/img/image1.png";
import Img2 from "../assets/img/image2.png";
import Img3 from "../assets/img/image3.png";
import Img4 from "../assets/img/image4.png";
import Img5 from "../assets/img/image5.png";
import Img6 from "../assets/img/image6.png";
import Img7 from "../assets/img/image7.png";
import Img8 from "../assets/img/image8.png";
import Img9 from "../assets/img/image9.png";
import Img10 from "../assets/img/image10.png";
import Img11 from "../assets/img/image11.png";
import Img12 from "../assets/img/image11.png";
import Img13 from "../assets/img/image12.png";
import Img14 from "../assets/img/image13.png";
import Img15 from "../assets/img/image14.png";
import Img16 from "../assets/img/image15.png";

const products = [
  {
    id: "02.02.02.01-1008",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    img: Img1,
  },
  {
    id: "02.02.02.01-1001",
    title: "Глина бентонитовая для буровых растворов высокого качества",
    img: Img2,
  },
  {
    id: "02.02.02.01-1002",
    title: "Удаляемый герметизирующий компаунд для защиты соединений",
    img: Img3,
  },
  {
    id: "01.01.01.01-0802",
    title: "Изделие с армирующим материалом на основе стеклоткани",
    img: Img4,
  },
  {
    id: "02.02.02.01-1008",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    img: Img5,
  },
  {
    id: "02.02.02.01-1001",
    title: "Глина бентонитовая для буровых растворов высокого качества",
    img: Img6,
  },
  {
    id: "02.02.02.01-1002",
    title: "Удаляемый герметизирующий компаунд для защиты соединений",
    img: Img7,
  },
  {
    id: "01.01.01.01-0802",
    title: "Изделие с армирующим материалом на основе стеклоткани",
    img: Img8,
  },
  {
    id: "02.02.02.01-1008",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    img: Img9,
  },
  {
    id: "02.02.02.01-1001",
    title: "Глина бентонитовая для буровых растворов высокого качества",
    img: Img10,
  },
  {
    id: "02.02.02.01-1002",
    title: "Удаляемый герметизирующий компаунд для защиты соединений",
    img: Img11,
  },
  {
    id: "01.01.01.01-0802",
    title: "Изделие с армирующим материалом на основе стеклоткани",
    img: Img12,
  },
  {
    id: "02.02.02.01-1008",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    img: Img13,
  },
  {
    id: "02.02.02.01-1001",
    title: "Глина бентонитовая для буровых растворов высокого качества",
    img: Img14,
  },
  {
    id: "02.02.02.01-1002",
    title: "Удаляемый герметизирующий компаунд для защиты соединений",
    img: Img15,
  },
  {
    id: "01.01.01.01-0802",
    title: "Изделие с армирующим материалом на основе стеклоткани",
    img: Img16,
  },
];

const Katalog2 = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-16">
      <Home />

      <div className="max-w-[1240px] mx-auto px-4 mt-12">
        <div className="mb-8">
          <h1 className="relative pb-3 font-medium text-[22px] uppercase inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100px] after:h-[2px] after:bg-[#1890FF]">
            Ko‘p ko‘rilganlar
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-[200px] w-full p-4 flex items-center justify-center bg-[#F9FAFB] rounded-t-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[11px] font-bold text-[#1890FF] bg-[#E6F7FF] px-2 py-0.5 rounded border border-[#BAE7FF]">
                    #{item.id}
                  </span>
                  <button className="text-gray-400 hover:text-[#1890FF] transition-colors">
                    <i className="fa-regular fa-bookmark text-lg"></i>
                  </button>
                </div>

                <h3 className="text-[13px] text-[#262626] font-medium leading-[1.4] mb-5 h-[40px] overflow-hidden">
                  {item.title}
                </h3>
                <div className="flex gap-2 mt-auto">
                  <button className="flex-grow py-2 border border-[#D9D9D9] rounded-md text-[13px] font-medium text-[#595959] hover:bg-[#1890FF] hover:text-white hover:border-[#1890FF] transition-all">
                    Ko'rish
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center border border-[#D9D9D9] rounded-md text-[#595959] hover:border-[#1890FF] hover:text-[#1890FF] transition-all">
                    <i className="fa-solid fa-basket-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-[#1890FF] text-[14px] font-semibold hover:underline">
            Barcha mahsulotlarni ko'rish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Katalog2;
