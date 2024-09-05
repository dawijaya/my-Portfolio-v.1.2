import React from "react";
import type { Metadata } from "next";
import bg from "@/app/assets/2.jpg";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "@nextui-org/link";

export const metadata: Metadata = {
  title: "Pilih Bahasa",
  description: "Select Languange",
};

const LanguageSelection: React.FC = () => {
  return (
    <section className="container">
      <div
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="bg-black bg-opacity-70 p-8 rounded-lg text-white text-center w-80">
          <h2 className="text-xl font-sans font-semibold mb-2">
            Silahkan Pilih Bahasa 💎
          </h2>
          <p className="text-sm mb-6">Please select language 🌎</p>
          <Link href="/Indonesia">
            <button className="w-full mb-4 py-2 bg-skyblue rounded-full flex items-center justify-center">
              Indonesia 🇮🇩
            </button>
          </Link>
          <Link href="/English">
            <button className="w-full mb-4 py-2 bg-skyblue rounded-full flex items-center justify-center">
              English 🇬🇧
            </button>
          </Link>
          <Link href="https://wa.me/6285175232251">
            <button className="w-[70%] py-2 text-white bg-[#136080] rounded-full flex flex-col items-center font-sans font-medium justify-center mx-auto">
              📞 Pusat bantuan
              <span className="text-xs text-white font-sans font-bold">
                ( help center )
              </span>
            </button>
          </Link>
        </div>
      </div>
      <footer className="w-full bg-gray-300 text-black p-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://www.instagram.com/d_a_wijayaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer">
            <FaInstagram size="2rem" />
          </a>
          <a
            href="mailto:geryybangsawan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer">
            <SiGmail size="2rem" />
          </a>
          <a
            href="https://wa.me/6285175232251"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer">
            <FaWhatsappSquare size="2rem" />
          </a>
        </div>
        <p className="font-semibold">Copyright©DandiAgusWijaya2024</p>
        <p>Versi 1.2</p>
        <p className="text-xs font-sans font-medium">
          untuk versi dekstop masih dalam tahap pengembangan
        </p>
        <p className="text-xs font-sans text-blue-950 font-bold">
          for the desktop version is still under development
        </p>
      </footer>
    </section>
  );
};

export default LanguageSelection;
