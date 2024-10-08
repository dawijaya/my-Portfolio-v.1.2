import React from "react";
import type { Metadata } from "next";
import bg from "@/app/assets/2.jpg";
import { FaInstagram, FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "@nextui-org/link";

export const metadata: Metadata = {
  title: "Pilih Bahasa",
  description: "Select Languange",
};

const LanguageSelection: React.FC = () => {
  return (
    <section className="container min-h-screen h-full w-screen">
      <div
        className="flex items-center justify-center h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Menambah agar gambar tetap menempel di layar
        }}>
        <div className="bg-black bg-opacity-80 p-8 rounded-lg text-white text-center w-80  md:w-[34rem] md:h-[30rem]">
          <div className="md:mt-10">
            <h2 className="text-xl  md:text-3xl font-sans font-semibold mb-2">
              Silahkan Pilih Bahasa 💎
            </h2>
            <p className="text-sm md:text-xl mb-6">Please select language 🌎</p>
            <div className="mt-10 space-y-4">
              <Link
                className="md:flex justify-center items-center"
                href="/Indonesia">
                <button className="w-full md:w-1/2 md:text-xl font-sans font-semibold text-primary md:h-14 mb-4 py-2 bg-skyblue rounded-full flex items-center justify-center">
                  Indonesia 🇮🇩
                </button>
              </Link>
              <Link
                className="md:flex justify-center items-center"
                href="/English">
                <button className="w-full md:w-1/2 md:text-xl font-sans font-semibold text-primary md:h-14 mb-4 py-2 bg-skyblue rounded-full flex items-center justify-center">
                  English 🇬🇧
                </button>
              </Link>
              <Link
                className="md:flex justify-center items-center"
                href="https://wa.me/6285175232251">
                <button className="w-[70%] py-2 text-white bg-[#136080] md:text-xl rounded-full flex flex-col items-center font-sans font-medium justify-center mx-auto">
                  📞 Pusat bantuan
                  <span className="text-xs text-white font-sans md:text-lg font-extralight">
                    ( help center )
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-screen bg-gray-300 text-black p-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://www.instagram.com/d_a_wijayaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-orange-400">
            <FaInstagram size="2rem" />
          </a>
          <a
            href="mailto:geryybangsawan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-red-500">
            <SiGmail size="2rem" />
          </a>
          <a
            href="https://wa.me/6285175232251"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-green-500">
            <FaWhatsappSquare size="2rem" />
          </a>
          <a
            href="https://github.com/dawijaya"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-primary">
            <FaSquareGithub size="2rem" />
          </a>
        </div>
        <p className="font-sans text-xs font-semibold">Versi 1.2</p>
        <p className="font-semibold">Copyright © Dandi Agus Wijaya 2024</p>
      </footer>
    </section>
  );
};

export default LanguageSelection;
