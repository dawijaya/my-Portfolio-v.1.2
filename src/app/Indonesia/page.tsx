"use client";
import React, { useState, useEffect } from "react";
import bg from "@/app/assets/1.jpg";
import picture from "@/app/assets/bg-home.png";
import TentangSaya from "@/app/assets/3.jpg";
import Tentanggif from "@/app/assets/bg tentang saya.gif";

// Komponen untuk teks yang berganti-ganti
const RotatingText: React.FC = () => {
  const titles = [
    "Software Engineer",
    "Web Engineer",
    "Programmer",
    "Android Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Ganti teks setiap 2 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, []);

  return (
    <h2 className="text-2xl mb-2 font-sans font-light">{titles[index]}</h2>
  );
};

const ProfileCard: React.FC = () => {
  return (
    <>
      {/* // home */}
      <section
        id="home"
        className="relative container flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center text-white  rounded-lg shadow-lg w-80 mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl mb-2 font-bold text-skyblue">
              Dandi Agus Wijaya
            </h1>
            {/* Menggunakan RotatingText untuk mengganti-ganti teks */}
            <RotatingText />
          </div>
          <div className="mb-4">
            <img
              src={picture.src}
              alt="Dandi Agus Wijaya"
              className="w-36 h-36 rounded-full object-cover border-4 border-white"
            />
          </div>
          <p className="text-center font-sans font-semibold mt-4 text-lg">
            Mendesain dan Mengembangkan Web untuk
            <span className="text-skyblue"> Masa Depan.</span>
          </p>
        </div>
      </section>
      {/* // Tentang saya */}
      <section
        id="tentang-saya"
        className="relative container flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${TentangSaya.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="absolute inset-0 bg-black  opacity-60"></div>
        <div className="absolute inset-0 bg-black  opacity-60">
          <img src={Tentanggif.src} alt="gif" className="w-full h-full" />
        </div>
        <h1 className="text-3xl absolute top-24 font-bold ">Tentang Saya</h1>
        <div className="relative flex flex-col items-center text-white  rounded-lg shadow-lg w-80 mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-xl mb-2 font-bold text-second">
              Silahkan Pilih :
            </h2>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <button className="bg-skyblue hover:bg-primary hover:text-white transition-all text-black py-4 px-6 rounded">
              Deskripsi Singkat
            </button>
            <button className="bg-skyblue hover:bg-primary hover:text-white transition-all text-black py-4 px-4 rounded">
              Pengalaman Kerja
            </button>
            <button className="bg-skyblue hover:bg-primary hover:text-white transition-all text-black py-4 px-9 rounded">
              Keterampilan
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
