"use client";
import React, { useState, useEffect } from "react";
import bg from "@/app/assets/1.jpg";
import picture from "@/app/assets/bg-home.png";
import TentangSaya from "@/app/assets/3.jpg";
import Tentanggif from "@/app/assets/bg tentang saya.gif";
import GulirKebawah from "@/app/assets/gif-kebawah.gif";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

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
                className="bg-skyblue font-sans hover:bg-primary hover:text-white transition-all text-black py-4 px-7 rounded">
                Deskripsi Singkat
              </Button>

              <Button
                onPress={onOpenModal2}
                className="bg-skyblue hover:bg-primary hover:text-white transition-all text-black py-4 px-5 rounded">
                Pengalaman Kerja
              </Button>
              <Button
                onPress={onOpenModal3}
                className="bg-skyblue hover:bg-primary hover:text-white transition-all text-black py-4 px-10 rounded">
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
                      <ModalHeader className="flex flex-col gap-1 mt-16 text-white bg-black">
                        Deskripsi Singkat
                      </ModalHeader>

                      <ModalBody className="max-h-[500px] gap-y-4 overflow-y-auto">
                        <p className="text-justify">
                          Saya Lulusan S1 Teknik Informatika Institut Teknologi
                          dan Bisnis Indonesia, salah satu perguruan tinggi
                          swasta di Kota Medan, Sumatera Utara.
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
                      <ModalFooter>
                        <Button
                          className="bg-primary h-full w-full rounded-sm text-white"
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
                      <ModalHeader className="flex flex-col gap-1 mt-16 text-white bg-black">
                        Pengalaman Saya
                      </ModalHeader>

                      <ModalBody className="max-h-[500px] gap-y-4 overflow-y-auto">
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
                      <ModalFooter>
                        <Button
                          className="bg-primary h-full w-full rounded-sm text-white"
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

                      <ModalBody className="max-h-[500px] gap-y-4 overflow-y-auto">
                        <p className="text-justify font-sans font-semibold">
                          Keterampilan Teknis
                        </p>
                        {/* tabel 1 */}
                        <Table
                          className="bg-white rounded-sm text-black"
                          aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn>Bahasa Pemrograman</TableColumn>
                            <TableColumn>Framework</TableColumn>
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
                            <TableColumn>Database</TableColumn>
                            <TableColumn>Komponen</TableColumn>
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
                            <TableColumn>Komunikasi</TableColumn>
                            <TableColumn>Kepemimpinan</TableColumn>
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
                            <TableColumn>Adaptabilitas</TableColumn>
                            <TableColumn>Empati dan Pengertian</TableColumn>
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
                      <ModalFooter>
                        <Button
                          className="bg-primary h-full w-full rounded-sm text-white"
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
    </>
  );
};

export default ProfileCard;
