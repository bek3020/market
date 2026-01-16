import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Input } from "antd";
import Logo from "../assets/img/logo.png";

const items = [
  { label: "Toshkent", key: "toshkent" },
  { label: "Samarqand", key: "samarqand" },
  { label: "Buxoro", key: "buxoro" },
];

const langItems = [
  { key: "uz", label: "UZ" },
  { key: "ru", label: "RU" },
];

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-[#182041]">
        <div className="max-w-[1170px] mx-auto px-4 h-10 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4 text-white text-sm">
            <i className="fa-solid fa-location-arrow text-xs" />

            <Dropdown menu={{ items }} trigger={["click"]}>
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
                <Space size={4}>
                  <span className="font-medium">TOSHKENT</span>
                  <DownOutlined className="text-xs" />
                </Space>
              </div>
            </Dropdown>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 text-white text-sm">
            <span className="cursor-pointer hover:underline">Yo‘riqnoma</span>

            <Dropdown menu={{ items: langItems }} trigger={["click"]}>
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
                <Space size={4}>
                  <span className="uppercase">uz</span>
                  <DownOutlined className="text-[10px]" />
                </Space>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="bg-[#202B57] h-20 flex items-center">
        <div className="max-w-[1170px] mx-auto px-4 w-full flex items-center justify-between">
          <img src={Logo} alt="Logo" className="h-8" />

          <div className="w-[400px]">
            <Input.Search
              placeholder="Qidiruv"
              allowClear
              enterButton
              size="large"
            />
          </div>
          <div className="">
            <button className=" text-white px-4 py-2 rounded-lg hover:bg-[#182041] transition">
              <i class="fa-regular fa-floppy-disk"></i>
            </button>
            <button className=" text-white px-4 py-2 rounded-lg hover:bg-[#182041] transition">
              <i class="fa-solid fa-shop"></i>
            </button>
            <button className=" text-white px-4 py-2 rounded-lg hover:bg-[#182041] transition">
              <span>
                <i className="fa-regular fa-user"></i>
              </span>
              KIRISH
            </button>
          </div>
        </div>
      </div>

      <div className="header_bottom bg-[#28366D] ">
        <div className="max-w-[1170px] mx-auto px-4 flex justify-around items-center h-12 text-white text-sm">
          <p className="cursor-pointer">Materiallar va buyumlar</p>
          <p className="cursor-pointer">Mashina mexanizmlar</p>
          <p className="cursor-pointer">Qurilish ishlari</p>
          <p className="cursor-pointer">Kichik mexanizatsiya</p>
          <p className="cursor-pointer">Uskuna va qurilmalar</p>

          <div className="flex items-center gap-3">
            <p className="cursor-pointer">Klassifikator</p>
            <p className="cursor-pointer">Bo’limlar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
