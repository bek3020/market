import React from "react";
import Home from "./Home";

const products = [
  {
    id: "02.02.02.01-1008",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: "03.03.02.01-1000",
    title:
      "Изделие с армирующим материалом на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
];

const displayProducts = Array(9).fill(products).flat();

const Katalog1 = () => {
  return (
    <div className="bg-[#f8f9fa] py-10 px-4">
      <Home />
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#e6f7ff] text-[#1890FF] text-[12px] px-2 py-1 rounded">
                  #{item.id}
                </span>

                <button className="text-gray-400 hover:text-[#1890FF]">
                  <i className="fa-regular fa-bookmark"></i>
                </button>
              </div>
              <p className="text-[#333] text-[14px] leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#1890FF] cursor-pointer hover:underline font-medium">
            Barcha mahsulotlarni ko'rish
          </p>
        </div>
      </div>
    </div>
  );
};

export default Katalog1;
