"use client";
import React, { useState, useEffect } from "react";
import bg from "@/app/assets/1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TentangSaya from "@/app/assets/3.jpg";
import Tentanggif from "@/app/assets/bg tentang saya.gif";
import GulirKebawah from "@/app/assets/gif-kebawah.gif";
import picture2 from "@/app/assets/2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import mybg from "@/app/assets/IMG_0416.png";
import "swiper/css/navigation";
import { FaSquareGithub } from "react-icons/fa6";
import "swiper/css/pagination";
import downloadcv from "@/app/assets/download-2486_256.gif";
import { Navigation, Pagination } from "swiper/modules";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from "@nextui-org/react";
import bgcv from "@/app/assets/background-6824_512.gif";
import sertif1 from "@/app/assets/sertif1.png";
import sertif2 from "@/app/assets/sertif2.png";
import sertif3 from "@/app/assets/sertif3.jpg";
import sertif4 from "@/app/assets/sertif4.png";
import sertif5 from "@/app/assets/sertif5.png";
import sertif6 from "@/app/assets/sertif6.png";
import sertif7 from "@/app/assets/Sertifikat seminar leadership kampus milenial.jpg";
import sertif8 from "@/app/assets/Sertif Gomawo fest 2023.png";
import lopec1 from "@/app/assets/portfolio/lopec1.png";
import lopec2 from "@/app/assets/portfolio/lopec2.png";
import motor1 from "@/app/assets/portfolio/motor1.png";
import motor2 from "@/app/assets/portfolio/motor2.png";
import win1 from "@/app/assets/portfolio/win1.png";
import win2 from "@/app/assets/portfolio/win2.png";
import isun1 from "@/app/assets/portfolio/isun1.png";
import isun2 from "@/app/assets/portfolio/isun2.png";
import figma from "@/app/assets/portfolio/figma.png";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";

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

// Array gambar yang diimpor dan deskripsinya
const imageSlides = [
  {
    src: sertif1.src,
    alt: "Peak Performance",
    description: "Mega Zoominar 2022 PEAK PERFORMNCE Tanggal: 18-19 Maret 2022",
  },
  {
    src: sertif2.src,
    alt: "PUBLIC SPEAKING IS LIFESTYLE",
    description:
      "Webinar Nasional 2023 PUBLIC SPEAKING IS LIFESTYLE Tanggal: 28 Februari 2023",
  },
  {
    src: sertif3.src, // Menggunakan gambar acak dari Unsplash
    alt: "Start and Developer a career in the Technology industry",
    description:
      "Webinar Nasional Start and Developer a career in the Technology industry as a back-end Developer Tanggal: 11 Juni 2022",
  },
  {
    src: sertif4.src, // Menggunakan gambar acak dari Unsplash
    alt: "Webinar Smartpath 345/SP/IX/2023",
    description: "Webinar Smartpath 345/SP/IX/2023",
  },
  {
    src: sertif5.src, // Menggunakan gambar acak dari Unsplash
    alt: "Completing the Calculator Project on Mini Bootcamp Frontend Development",
    description:
      "Completing the Calculator Project on Mini Bootcamp Frontend Development (JavaScript) from 18th to 24th Desember 2023",
  },
  {
    src: sertif6.src, // Menggunakan gambar acak dari Unsplash
    alt: "Kursus Fundamental JavaScript untuk pembangunan Web",
    description:
      "Kursus Fundamental JavaScript untuk pembangunan Web 24/12/2023",
  },
  {
    src: sertif7.src, // Menggunakan gambar acak dari Unsplash
    alt: "Seminar Mahasiswa Leadership di Era Digital Menuju Indonesia Emas 2045",
    description:
      "Seminar Mahasiswa Leadership di Era Digital Menuju Indonesia Emas 2045 21/02/2023",
  },
  {
    src: sertif8.src, // Menggunakan gambar acak dari Unsplash
    alt: "Education Fair to Study in South Korea 07/09/2023",
    description: "Education Fair to Study in South Korea 07/09/2023",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const imageSlides1 = [
  {
    src: lopec1.src,
    alt: "lopec1",
    description:
      "BackOffice ini dibuat dengan NexjJs App dan TailwindCss. Berisi tentang algoritma penjualan.",
  },
  {
    src: lopec2.src,
    alt: "lopec2",
    description:
      "ada data produk, marketing dan data inti lainnya tentang penjualan alat-alat Networking",
  },
];
const imageSlides2 = [
  {
    src: win1.src,
    alt: "win1",
    description: "Website ini dibuat dengan NextJs app dan TailwindCss",
  },
  {
    src: win2.src,
    alt: "win2",
    description:
      "Fitur Website ini ada Home, Produk, Tentang Perusahaan, Alamat dan Kontak",
  },
];
const imageSlides3 = [
  {
    src: motor1.src,
    alt: "motor1",
    description:
      "Website ini dibuat dengan NextJs app dan TailwindCss, website ini milik klien asal Singapura",
  },
  {
    src: motor2.src,
    alt: "motor2",
    description:
      "Fitur Website ini ada Home, Produk, Tentang Perusahaan, Alamat dan Kontak",
  },
];
const imageSlides4 = [
  {
    src: isun1.src,
    alt: "isun1",
    description:
      "Website ini dibuat dengan Wordpress, website ini milik klien asal Singapura",
  },
  {
    src: isun2.src,
    alt: "isun2",
    description:
      "Fitur Website ini ada Home, Produk, Tentang Perusahaan,penawaran, Alamat dan Kontak",
  },
];
const imageSlides5 = [
  {
    src: figma.src,
    alt: "figma",
    description:
      "Ini adalah Ui/Ux Design Web ini yang saya rancang agar seminimalis mungkin dan hanya 4 pemilihan Warna yang soft",
  },
];

const ProfileCard: React.FC = () => {
  const {
    isOpen: isOpenModal1,
    onOpen: onOpenModal1,
    onOpenChange: onOpenChangeModal1,
  } = useDisclosure();
  const {
    isOpen: isOpenModal2,
    onOpen: onOpenModal2,
    onOpenChange: onOpenChangeModal2,
  } = useDisclosure();
  const {
    isOpen: isOpenModal3,
    onOpen: onOpenModal3,
    onOpenChange: onOpenChangeModal3,
  } = useDisclosure();

  const [scrollBehavior, setScrollBehavior] = React.useState<
    "inside" | "normal" | "outside"
  >("inside");

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
        <div className="relative flex flex-col items-center text-white  rounded-lg  w-80 mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl mb-2 font-bold text-skyblue">
              Dandi Agus Wijaya
            </h1>
            {/* Menggunakan RotatingText untuk mengganti-ganti teks */}
            <RotatingText />
          </div>
          <div className="mb-4">
            <img
              src={mybg.src}
              alt="Dandi Agus Wijaya"
              className="w-36 h-36 rounded-full object-center border-4 border-white"
            />
          </div>
          <p className="text-center font-sans font-semibold mt-4 text-lg">
            Mendesain dan Mengembangkan Web untuk
            <span className="text-skyblue"> Masa Depan.</span>
          </p>
          <div className="absolute top-[24rem]">
            <img
              src={GulirKebawah.src}
              alt="Dandi Agus Wijaya"
              className="w-8 h-8 cursor-pointer object-cover border-white"
              onClick={() => {
                const element = document.getElementById("tentang-saya");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" }); // Scroll dengan animasi mulus
                }
              }}
            />
          </div>
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
        <h1 className="text-3xl absolute font-sans text-white dark:text-second top-24 font-bold ">
          Tentang Saya
        </h1>
        <div className="relative flex flex-col items-center text-white  rounded-lg shadow-lg w-80 mx-auto">
          <div className="text-center mt-14 ">
            <h2 className="text-xl font-sans mb-6 font-bold dark:text-white text-second">
              Silahkan Pilih :
            </h2>

            <div className="flex flex-col items-center  space-y-8">
              <Button
                onPress={onOpenModal1}
                className="bg-skyblue font-sans hover:bg-primary hover:text-white transition-all text-black py-4 px-6 rounded">
                Deskripsi Singkat
              </Button>

              <Button
                onPress={onOpenModal2}
                className="bg-skyblue hover:bg-primary hover:text-white transition-all text-black py-4 px-5 rounded">
                Pengalaman Kerja
              </Button>
              <Button
                onPress={onOpenModal3}
                className="bg-skyblue hover:bg-primary hover:text-white transition-all text-black py-4 px-9 rounded">
                Keterampilan
              </Button>

              <RadioGroup
                orientation="horizontal"
                value={scrollBehavior}
                onValueChange={(value) =>
                  setScrollBehavior(value as "inside" | "normal" | "outside")
                }></RadioGroup>
              {/* modal 1 */}
              <Modal
                isOpen={isOpenModal1}
                onOpenChange={onOpenChangeModal1}
                scrollBehavior="inside">
                <ModalContent className="bg-black text-white">
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex font-sans font-bold flex-col gap-1 mt-16 text-white bg-black">
                        Deskripsi Singkat
                      </ModalHeader>

                      <ModalBody className="max-h-[500px] p-5 gap-y-4 overflow-y-auto">
                        <p className="text-justify">
                          Saya Lulusan S1 Teknik Informatika Institut Teknologi
                          dan Bisnis Indonesia, salah satu perguruan tinggi
                          swasta di Kota Medan, Sumatera Utara, Indonesia
                        </p>
                        <p className="text-justify">
                          Saya memiliki kemampuan berbahasa Inggris dan Jepang
                          secara pasif, dengan tingkat kemahiran menengah. Saya
                          juga mampu membuat website responsif dari tahap
                          perancangan hingga peluncuran (produksi), tidak hanya
                          web, saya juga bisa menjadi Android developer. Selain
                          itu, saya memiliki pengalaman dalam merakit robot
                          berbasis Arduino menggunakan bahasa pemrograman C++,
                          saya juga dapat bekerja secara tim menggunakan GitHub
                          karena sebelumnya saya sudah pernah bekerja secara tim
                          diperusahaan agency di kota
                        </p>
                        <p className="text-justify">
                          Saat ini, minat saya tertuju pada pendalaman lebih
                          lanjut dalam bidang web engineering, mencakup
                          perancangan, pengembangan, hingga aspek keamanannya.
                          Saya juga tertarik untuk mengembangkan karier di
                          bidang keamanan siber (cyber security) di masa depan.
                          Saya dikenal sebagai individu yang mudah beradaptasi
                          dan memiliki semangat tinggi untuk mempelajari hal-hal
                          baru.
                        </p>
                        {/* Add more content as needed */}
                      </ModalBody>
                      <ModalFooter className="flex justify-end">
                        <Button
                          className="bg-primary h-[150%] w-1/2 rounded-lg text-white"
                          color="danger"
                          variant="light"
                          onPress={onClose}>
                          Kembali
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
              {/* modal 2 */}
              <Modal
                isOpen={isOpenModal2}
                onOpenChange={onOpenChangeModal2}
                scrollBehavior="inside">
                <ModalContent className="bg-black text-white">
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex font-sans font-semibold flex-col gap-1 mt-16 text-white bg-black">
                        Pengalaman Saya
                      </ModalHeader>

                      <ModalBody className="max-h-[500px] p-5 gap-y-4 overflow-y-auto">
                        <p className="text-justify">
                          Saya telah terjun ke dunia pemrograman selama lebih
                          dari 2 tahun, dengan fokus utama pada pengembangan web
                          sejak tahun 2022, Sselain web, saya juga mempelajadi
                          ui/ux design, android dev dan robotik.
                        </p>
                        <p className="text-justify">
                          Selama perjalanan tersebut, saya memiliki pengalaman
                          sebagai freelancer dengan membuat website berbagai
                          website. Selain itu, saya juga pernah bekerja sebagai
                          Frontend Developer di sebuah perusahaan agensi di Kota
                          Medan selama 5 bulan. Sebelum itu, saya aktif
                          mengikuti berbagai bootcamp dan pelatihan coding
                          lainnya untuk terus mengasah keterampilan saya.
                        </p>
                        <p className="text-justify">
                          Hingga saat ini, saya telah menyelesaikan dan
                          meluncurkan 4 website yang sudah diproduksi, saya juga
                          ketua kelas sewaktu mahasiswa jabatan ini membuat saya
                          terbiasa untuk peduli dan dewasa terhadap berbagai hal
                          meski terkadang banyak dari anggota saya yang melukai
                          perasaan saya.
                        </p>
                        {/* Add more content as needed */}
                      </ModalBody>
                      <ModalFooter className="flex justify-end">
                        <Button
                          className="bg-primary h-[150%] w-1/2 rounded-lg text-white"
                          color="danger"
                          variant="light"
                          onPress={onClose}>
                          Kembali
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>

              {/* modal 3 */}
              <Modal
                isOpen={isOpenModal3}
                onOpenChange={onOpenChangeModal3}
                scrollBehavior="inside">
                <ModalContent className="bg-black text-white">
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 mt-16 text-xl font-sans font-extrabold text-white bg-black">
                        Keterampilan :
                      </ModalHeader>

                      <ModalBody className="max-h-[500px] p-5 gap-y-4 overflow-y-auto">
                        <p className="text-justify font-sans font-semibold">
                          Keterampilan Teknis
                        </p>
                        {/* tabel 1 */}
                        <Table
                          className="bg-white rounded-sm text-black"
                          aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn className="font-sans font-bold">
                              Bahasa Pemrograman
                            </TableColumn>
                            <TableColumn className="font-sans font-bold">
                              Framework
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell className="text-center">
                                Html, Css, dan Javascript
                              </TableCell>
                              <TableCell className="text-center">
                                CodeIgniter
                              </TableCell>
                            </TableRow>
                            <TableRow key="2">
                              <TableCell className="text-center">
                                Php dan Sql
                              </TableCell>
                              <TableCell className="text-center">
                                AngularJs
                              </TableCell>
                            </TableRow>
                            <TableRow key="3">
                              <TableCell className="text-center">
                                C dan C++
                              </TableCell>
                              <TableCell className="text-center">
                                NextJs dan TailwindCss
                              </TableCell>
                            </TableRow>
                            <TableRow key="4">
                              <TableCell className="text-center">
                                Java
                              </TableCell>
                              <TableCell className="text-center">
                                ReactJs dan React Native
                              </TableCell>
                            </TableRow>
                            <TableRow key="5">
                              <TableCell className="text-center">
                                Git dan Github
                              </TableCell>
                              <TableCell className="text-center">
                                NodeJs
                              </TableCell>
                            </TableRow>
                            <TableRow key="6">
                              <TableCell className="text-center">
                                {" "}
                                Figma (ui/ux design)
                              </TableCell>
                              <TableCell className="text-center">
                                Jquery(Library)
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        {/* Tabel 2 */}
                        <Table
                          className="bg-white rounded-sm text-black"
                          aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn className="font-sans font-bold">
                              Database
                            </TableColumn>
                            <TableColumn className="font-sans font-bold">
                              Komponen
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell className="text-center">
                                Mysql
                              </TableCell>
                              <TableCell className="text-center">
                                MUi dan NextUi
                              </TableCell>
                            </TableRow>
                            <TableRow key="2">
                              <TableCell className="text-center">
                                MongoDb
                              </TableCell>
                              <TableCell className="text-center">Npm</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <p className="text-justify font-sans font-semibold">
                          Keterampilan Non-Teknis
                        </p>
                        {/* tabel 1 */}
                        <Table
                          className="bg-white rounded-sm text-black"
                          aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn className="font-sans font-bold">
                              Komunikasi
                            </TableColumn>
                            <TableColumn className="font-sans font-bold">
                              Kepemimpinan
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell className="text-center">
                                Penjelasan Teknis
                              </TableCell>
                              <TableCell className="text-center">
                                Mentorship
                              </TableCell>
                            </TableRow>
                            <TableRow key="2">
                              <TableCell className="text-center">
                                Kolaborasi Tim
                              </TableCell>
                              <TableCell className="text-center">
                                Pengambilan Keputusan
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        {/* tabel 2 */}
                        <Table
                          className="bg-white rounded-sm text-black"
                          aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn className="font-sans font-bold">
                              Adaptabilitas
                            </TableColumn>
                            <TableColumn className="font-sans font-bold">
                              Empati dan Pengertian
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell className="text-center">
                                Fleksibilitas
                              </TableCell>
                              <TableCell className="text-center">
                                Pengertian Pelanggan
                              </TableCell>
                            </TableRow>
                            <TableRow key="2">
                              <TableCell className="text-center">
                                Pembelajaran Berkelanjutan
                              </TableCell>
                              <TableCell className="text-center">
                                Pengalaman Pengguna (UX)
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        {/* Add more content as needed */}
                      </ModalBody>
                      <ModalFooter className="flex justify-end">
                        <Button
                          className="bg-primary h-[150%] w-1/2 rounded-lg text-white"
                          color="danger"
                          variant="light"
                          onPress={onClose}>
                          Kembali
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </section>
      {/* Sertifikat */}
      <section
        id="sertifikat"
        className="relative container flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${picture2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center text-white  rounded-lg shadow-lg w-80 mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl mb-2 font-bold font-sans text-white">
              Sertifikat
            </h1>
          </div>

          <div className="w-full max-w-2xl bg-primary shadow-lg rounded-lg">
            <Slider {...settings}>
              {imageSlides.map((slide, index) => (
                <div key={index}>
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-64 object-contain rounded-lg"
                  />
                  <p className="text-center text-white mt-4">
                    {slide.description}
                  </p>
                </div>
              ))}
            </Slider>
            {/* <div className="custom-pagination flex items-center justify-center mt-4"></div>{" "} */}
            {/* Tambahkan margin-top untuk memberi jarak */}
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section
        id="portfolio"
        className="relative flex items-center justify-center h-[190hv] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg.src})`, // Tetap perlu menggunakan inline style untuk gambar dinamis
        }}>
        <div className="relative flex flex-col p-4 items-center justify-center text-white  rounded-lg h-full  w-96 md:w-[27rem] mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl mt-24  font-bold font-sans text-white">
              Portfolio
            </h1>
          </div>

          <div className="w-full  shadow-lg rounded-lg">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="relative">
              {/* Slide Pertama - Nested Swiper dengan Gambar yang Bisa Di-slide */}
              <SwiperSlide className="px-14 py-14 bg-primary rounded-lg">
                <div className=" flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Back Office Lopectech
                  </h2>
                  <Swiper
                    modules={[Navigation, Pagination]} // Tambahkan modul navigasi dan pagination
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, el: ".custom-pagination1" }} // Pagination untuk nested swiper
                    className="w-full">
                    <div className="custom-pagination1 mt-20 gap-2 flex items-center justify-center"></div>
                    {imageSlides1.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-fill rounded-lg"
                        />
                        <p className="mt-6 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Link
                    href="https://dev-admin.lopectech.com/"
                    className="bg-skyblue text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </Link>
                </div>
              </SwiperSlide>
              {/* Slide Kedua - Bagian Lain */}
              <SwiperSlide className="px-14 py-14 bg-primary rounded-lg">
                <div className=" flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Win 81 Automotive
                  </h2>
                  <Swiper
                    modules={[Navigation, Pagination]} // Tambahkan modul navigasi dan pagination
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, el: ".custom-pagination1" }} // Pagination untuk nested swiper
                    className="w-full">
                    <div className="custom-pagination1 mt-20 gap-2 flex items-center justify-center"></div>
                    {imageSlides2.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-fill rounded-lg"
                        />
                        <p className="mt-6 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Link
                    href="https://winautomotive.id/"
                    className="bg-skyblue text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </Link>
                </div>
              </SwiperSlide>
              {/* Slide Ketiga - Tambahan Konten */}
              <SwiperSlide className="px-14 py-14 bg-primary rounded-lg">
                <div className=" flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    MotorCheckUp
                  </h2>
                  <Swiper
                    modules={[Navigation, Pagination]} // Tambahkan modul navigasi dan pagination
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, el: ".custom-pagination1" }} // Pagination untuk nested swiper
                    className="w-full">
                    <div className="custom-pagination1 mt-20 gap-2 flex items-center justify-center"></div>
                    {imageSlides3.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-fill rounded-lg"
                        />
                        <p className="mt-6 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Link
                    href="https://motorcheckup.sg/"
                    className="bg-skyblue text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </Link>
                </div>
              </SwiperSlide>
              {/* Slide Keeempat - Tambahan Konten */}
              <SwiperSlide className="px-14 py-14 bg-primary rounded-lg">
                <div className=" flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Isun Education
                  </h2>
                  <Swiper
                    modules={[Navigation, Pagination]} // Tambahkan modul navigasi dan pagination
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, el: ".custom-pagination1" }} // Pagination untuk nested swiper
                    className="w-full">
                    <div className="custom-pagination1 mt-20 gap-2 flex items-center justify-center"></div>
                    {imageSlides4.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-fill rounded-lg"
                        />
                        <p className="mt-6 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Link
                    href="https://isunworld.com/"
                    className="bg-skyblue text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </Link>
                </div>
              </SwiperSlide>
              {/* Slide Kelima - Tambahan Konten */}
              <SwiperSlide className="px-14 py-14 bg-primary rounded-lg">
                <div className=" flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Figma Portfolio Saya
                  </h2>
                  <Swiper
                    modules={[Navigation, Pagination]} // Tambahkan modul navigasi dan pagination
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, el: ".custom-pagination1" }} // Pagination untuk nested swiper
                    className="w-full">
                    <div className="custom-pagination1 mt-20 gap-2 flex items-center justify-center"></div>
                    {imageSlides5.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-fill rounded-lg"
                        />
                        <p className="mt-6 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Link
                    href="https://www.figma.com/design/hxF8qhAWdUsXgoxeHhQQFF/ui%2Fux-my-portfolio?node-id=0-1&node-type=CANVAS&t=ZnNjdTMGQs9TnS6o-0"
                    className="bg-skyblue text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </Link>
                </div>
              </SwiperSlide>
              {/* Slide Keenam - Tambahan Konten */}
              <SwiperSlide className="px-14 py-14 bg-primary rounded-lg">
                <div className=" flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Project Lainya
                  </h2>
                  <Swiper
                    modules={[Navigation, Pagination]} // Tambahkan modul navigasi dan pagination
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, el: ".custom-pagination1" }} // Pagination untuk nested swiper
                    className="w-full text-sm text-center">
                    <div className="custom-pagination1 mt-20 gap-2 flex items-center justify-center"></div>
                    Dapat ditemukan pada Versi 0.1
                  </Swiper>

                  <Link
                    href="https://dawijaya.github.io/Mycv/"
                    className="bg-skyblue text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* CV */}
      <section
        id="cv"
        className="relative container flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgcv.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="flex flex-col ">
          <div className="flex items-center justify-center mb-5">
            <h1 className="text-3xl  font-sans text-white dark:text-second top-24 font-bold ">
              Unduh Cv
            </h1>
          </div>
          <div>
            <a
              className="flex items-center cursor-pointer justify-center"
              href="/cv DANDI AGUS WIJAYA- indonesia.pdf">
              <img
                src={downloadcv.src}
                alt="gif"
                className="w-1/2 h-1/2 rounded-full"
              />
            </a>
          </div>
        </div>
      </section>
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
          <a
            href="https://github.com/dawijaya"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer">
            <FaSquareGithub size="2rem" />
          </a>
        </div>
        <p className="font-sans text-xs font-semibold">Versi 1.2</p>
        <p className="font-semibold">Copyright © Dandi Agus Wijaya 2024</p>
        <p className="text-xs font-sans font-medium">
          untuk versi dekstop masih dalam tahap pengembangan
        </p>
        <p className="text-xs font-sans text-blue-950 font-bold">
          for the desktop version is still under development
        </p>
      </footer>
    </>
  );
};

export default ProfileCard;
