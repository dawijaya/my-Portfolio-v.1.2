"use client";
import React, { useState, useEffect } from "react";
import bg from "@/app/assets/1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bghome from "@/app/assets/IMG_20220310_144726_622.jpg";
import TentangSaya from "@/app/assets/3.jpg";
import Tentanggif from "@/app/assets/bg tentang saya.gif";
import GulirKebawah from "@/app/assets/gif-kebawah.gif";
import picture2 from "@/app/assets/2.jpg";

import mybg from "@/app/assets/IMG_0416.png";

import { FaSquareGithub } from "react-icons/fa6";

import downloadcv from "@/app/assets/download-2486_256.gif";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
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
import Link from "next/link";

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
    <h2 className="text-2xl md:text-4xl md:mt-3 mb-2 font-sans font-light">
      {titles[index]}
    </h2>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Array gambar yang diimpor dan deskripsinya
const imageSlides = [
  {
    src: sertif1.src,
    alt: "Peak Performance",
    description: "Mega Zoominar 2022 PEAK PERFORMANCE Date: March 18-19, 2022",
  },
  {
    src: sertif2.src,
    alt: "PUBLIC SPEAKING IS LIFESTYLE",
    description:
      "National Webinar 2023 PUBLIC SPEAKING IS LIFESTYLE Date: February 28, 2023",
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
      "JavaScript Fundamentals Course for Web Development 12/24/2023",
  },
  {
    src: sertif7.src, // Menggunakan gambar acak dari Unsplash
    alt: "Student Leadership Seminar in the Digital Era Towards Golden Indonesia 2045",
    description:
      "Student Leadership Seminar in the Digital Era Towards Golden Indonesia 2045 02/21/2023",
  },
  {
    src: sertif8.src, // Menggunakan gambar acak dari Unsplash
    alt: "Education Fair to Study in South Korea 07/09/2023",
    description: "Education Fair to Study in South Korea 07/09/2023",
  },
];

const imageSlides1 = [
  {
    src: lopec1.src,
    alt: "lopec1",
    description:
      "This BackOffice is made with Next Js App and TailwindCss. Contains sales algorithms.",
  },
  {
    src: lopec2.src,
    alt: "lopec2",
    description:
      "There is product data, marketing and other core data about the sales of Networking tools.",
  },
];
const imageSlides2 = [
  {
    src: win1.src,
    alt: "win1",
    description: "This website is made with NextJs app and TailwindCss",
  },
  {
    src: win2.src,
    alt: "win2",
    description:
      "This website features Home, Products, About the Company, Address and Contact",
  },
];
const imageSlides3 = [
  {
    src: motor1.src,
    alt: "motor1",
    description:
      "This website is made with NextJs app and TailwindCss, this website belongs to a client from Singapore",
  },
  {
    src: motor2.src,
    alt: "motor2",
    description:
      "This website features Home, Products, About the Company, Address and Contact",
  },
];
const imageSlides4 = [
  {
    src: isun1.src,
    alt: "isun1",
    description:
      "This website is made with Wordpress, this website belongs to a client from Singapore.",
  },
  {
    src: isun2.src,
    alt: "isun2",
    description:
      "This website features Home, Products, About the Company, Offers, Address and Contact",
  },
];
const imageSlides5 = [
  {
    src: figma.src,
    alt: "figma",
    description:
      "This is the Ui/Ux Design for this Web which I designed to be as minimalist as possible and only have 4 soft color choices",
  },
];
const imageSlides6 = [
  {
    src: bghome.src,
    alt: "Other projects",
    description: "Can be found in Version 0.1",
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
    <main className="container min-h-screen w-screen ">
      {/* // home */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen w-screen"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="absolute inset-0 h-full bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center text-white  rounded-lg   w-80 md:w-[30rem] mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-5xl mb-2 font-bold text-skyblue">
              Dandi Agus Wijaya
            </h1>
            {/* Menggunakan RotatingText untuk mengganti-ganti teks */}
            <RotatingText />
          </div>
          <div className="mb-4">
            <img
              src={mybg.src}
              alt="Dandi Agus Wijaya"
              className="w-44 h-44 md:w-64 md:h-64 rounded-full object-cover border-4 border-white"
            />
          </div>
          <p className="text-center font-sans font-semibold mt-4 md:text-xl md:w-96 text-lg">
            Designing and Developing Web for
            <span className="text-skyblue"> Future.</span>
          </p>
          <div className="absolute top-[24rem] md:top-[30rem]">
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
        className="relative flex items-center justify-center min-h-screen w-screen"
        style={{
          backgroundImage: `url(${TentangSaya.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="absolute inset-0 bg-black  opacity-60"></div>
        <div className="absolute inset-0 bg-black  opacity-60">
          <img src={Tentanggif.src} alt="gif" className="w-screen h-screen" />
        </div>

        <div className="relative flex flex-col items-center text-white  rounded-lg shadow-lg w-80 md:w-full mx-auto">
          <div className="text-center mt-3 ">
            <h1 className="text-3xl md:text-5xl mb-8 font-sans text-white dark:text-second  font-bold ">
              About me
            </h1>
            <h2 className="text-xl md:text-4xl font-sans mb-6 font-bold dark:text-white text-second">
              Please select :
            </h2>
            <div className="flex flex-col items-center justify-center  space-y-8">
              <Button
                onPress={onOpenModal1}
                className="bg-skyblue font-sans text-center hover:bg-primary hover:text-white transition-all text-black p-4 w-full h-full rounded">
                Short Description
              </Button>

              <Button
                onPress={onOpenModal2}
                className="bg-skyblue font-sans text-center hover:bg-primary hover:text-white transition-all text-black p-4 w-full h-full rounded">
                Work experience
              </Button>
              <Button
                onPress={onOpenModal3}
                className="bg-skyblue font-sans text-center hover:bg-primary hover:text-white transition-all text-black p-4 w-full h-full rounded">
                Skills
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
                        Short Description
                      </ModalHeader>

                      <ModalBody className="max-h-[500px] p-5 gap-y-4 overflow-y-auto">
                        <p className="text-justify">
                          I am a graduate of Informatics Engineering from the
                          Indonesian Institute of Technology and Business, one
                          of the leading private universities in Medan, North
                          Sumatra. Currently, I live in Medan, a dynamic and
                          ever-growing city. Born on August 2, 2001, I belong to
                          generation Z, a generation that is adaptive to the
                          development of technology and digital innovation. With
                          a solid educational background and a strong interest
                          in information technology, I am committed to
                          continuing to contribute to the development of the
                          technology industry, both locally and globally.
                        </p>
                        <p className="text-justify">
                          I have English and Japanese language skills passively,
                          with an intermediate level of proficiency. I am also
                          able to create responsive websites from the design
                          stage to launch (production), not only web, I can also
                          be an Android developer. In addition, I have
                          experience in assembling Arduino-based robots using
                          the C++ programming language, I can also work in a
                          team using GitHub because previously I had worked in a
                          team in an agency company in Medan
                        </p>
                        <p className="text-justify">
                          Currently, my interest is focused on further
                          exploration in the field of web engineering, including
                          design, development, and security aspects. I am also
                          interested in developing a career in cybersecurity in
                          the future. I am known as an adaptable individual and
                          have a high spirit to learn new things.
                        </p>
                        {/* Add more content as needed */}
                      </ModalBody>
                      <ModalFooter className="flex justify-end">
                        <Button
                          className="bg-primary h-[150%] w-1/2 rounded-lg text-white"
                          color="danger"
                          variant="light"
                          onPress={onClose}>
                          Back
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
                        My experience
                      </ModalHeader>

                      <ModalBody className="max-h-[500px] p-5 gap-y-4 overflow-y-auto">
                        <p className="text-justify">
                          I have been in the programming world for more than 2
                          years, with a primary focus on web development since
                          2022. In addition to web development, I also have
                          interests and experience in UI/UX design, Android
                          development, and robotics. As technology advances, I
                          continue to hone my skills, including as a prompt
                          engineer. In this role, I can provide effective
                          prompts to AI such as ChatGPT, Gemini, and others to
                          speed up my work process, without compromising the
                          quality of the code produced. Despite using AI, I
                          still maintain high standards in every project I work
                          on, ensuring that the final results remain precise and
                          professional.
                        </p>
                        <p className="text-justify">
                          During the journey, I have experience as a freelancer
                          by creating websites for various websites. In
                          addition, I have also worked as a Frontend Developer
                          at an agency company in Medan City for 5 months.
                          Before that, I actively participated in various
                          bootcamps and other coding trainings to continue
                          honing my skills.
                        </p>
                        <p className="text-justify">
                          Until now, I have completed and launched 4 websites
                          that have been produced, I was also the class
                          president when I was a student, this position made me
                          accustomed to caring and being mature about various
                          things even though sometimes many of my members hurt
                          my feelings.
                        </p>
                        {/* Add more content as needed */}
                      </ModalBody>
                      <ModalFooter className="flex justify-end">
                        <Button
                          className="bg-primary h-[150%] w-1/2 rounded-lg text-white"
                          color="danger"
                          variant="light"
                          onPress={onClose}>
                          Back
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
                        Skills :
                      </ModalHeader>

                      <ModalBody className="max-h-[500px] px-5 md:px-32 gap-y-4 overflow-y-auto">
                        <p className="text-justify font-sans font-semibold">
                          Technical Skills
                        </p>
                        {/* tabel 1 */}
                        <Table
                          className="bg-white rounded-sm  text-black"
                          aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn className="font-sans font-bold">
                              Programming language
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
                              Component
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
                          Non-Technical Skills
                        </p>
                        {/* tabel 1 */}
                        <Table
                          className="bg-white md:block hidden rounded-sm text-black"
                          aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn className="font-sans font-bold">
                              Communication
                            </TableColumn>
                            <TableColumn className="font-sans font-bold">
                              Leadership
                            </TableColumn>
                            <TableColumn className="font-sans font-bold">
                              Adaptability
                            </TableColumn>
                            <TableColumn className="font-sans font-bold">
                              Empathy and Understanding
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell className="text-center">
                                Technical Explanation
                              </TableCell>
                              <TableCell className="text-center">
                                Mentorship
                              </TableCell>
                              <TableCell className="text-center">
                                Fleksibilitas
                              </TableCell>
                              <TableCell className="text-center">
                                Customer Understanding
                              </TableCell>
                            </TableRow>
                            <TableRow key="2">
                              <TableCell className="text-center">
                                Team Collaboration
                              </TableCell>
                              <TableCell className="text-center">
                                Decision-making
                              </TableCell>
                              <TableCell className="text-center">
                                Continuous Learning
                              </TableCell>
                              <TableCell className="text-center">
                                User Experience (UX)
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <Table
                          className="bg-white md:hidden block rounded-sm text-black"
                          aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn className="font-sans font-bold">
                              Communication
                            </TableColumn>
                            <TableColumn className="font-sans font-bold">
                              Leadership
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell className="text-center">
                                Technical Explanation
                              </TableCell>
                              <TableCell className="text-center">
                                Mentorship
                              </TableCell>
                            </TableRow>
                            <TableRow key="2">
                              <TableCell className="text-center">
                                Team Collaboration
                              </TableCell>
                              <TableCell className="text-center">
                                Decision-making
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        {/* tabel 2 */}
                        <Table
                          className="bg-white md:hidden block rounded-sm text-black"
                          aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn className="font-sans font-bold">
                              Adaptability
                            </TableColumn>
                            <TableColumn className="font-sans font-bold">
                              Empathy and Understanding
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell className="text-center">
                                Flexibility
                              </TableCell>
                              <TableCell className="text-center">
                                Understanding Customers
                              </TableCell>
                            </TableRow>
                            <TableRow key="2">
                              <TableCell className="text-center">
                                Continuous Learning
                              </TableCell>
                              <TableCell className="text-center">
                                User Experience (UX)
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        {/* Add more content as needed */}
                      </ModalBody>
                      <ModalFooter className="flex justify-end md:px-32">
                        <Button
                          className="bg-primary h-[150%] md:w-1/3 w-1/2 rounded-lg text-white"
                          color="danger"
                          variant="light"
                          onPress={onClose}>
                          Return
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
        className="relative flex items-center justify-center min-h-screen w-screen"
        style={{
          backgroundImage: `url(${picture2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center text-white  rounded-lg shadow-lg w-80 mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-5xl mb-2 font-semibold font-sans text-white">
              Certificate
            </h1>
          </div>

          <div className="w-full md:w-screen max-w-2xl bg-primary shadow-lg rounded-lg">
            <Slider className="p-5 " {...settings}>
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
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section
        id="portfolio"
        className="relative flex items-center justify-center min-h-screen w-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg.src})`, // Tetap perlu menggunakan inline style untuk gambar dinamis
        }}>
        <div className="absolute inset-0 h-full bg-black opacity-60"></div>
        <div className="relative flex flex-col p-4 items-center justify-center text-white  rounded-lg h-full  w-96 md:w-[27rem] mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-5xl mt-24  font-bold font-sans text-white">
              Portfolio
            </h1>
          </div>

          <div className="w-full md:w-screen md:px-52  rounded-lg">
            <Carousel
              responsive={responsive}
              showDots={true}
              arrows={true}
              infinite={true}
              containerClass="relative">
              {/* Slide Pertama */}
              <div className="px-14 py-14  bg-primary rounded-lg">
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Back Office Lopectech
                  </h2>
                  <Carousel
                    className=""
                    responsive={responsive}
                    showDots={true}
                    arrows={true}
                    infinite={true}
                    containerClass="w-full md:w-1/2">
                    {imageSlides1.map((slide, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-contain rounded-lg"
                        />
                        <p className="mt-3 mb-8 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </div>
                    ))}
                  </Carousel>

                  <a
                    href="https://dev-admin.lopectech.com/"
                    className="bg-skyblue md:w-1/4 md:h-8 md:flex justify-center items-center text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </a>
                </div>
              </div>

              {/* Slide Kedua */}
              <div className="px-14 py-14 bg-primary rounded-lg">
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Win 81 Automotive
                  </h2>
                  <Carousel
                    responsive={responsive}
                    showDots={true}
                    arrows={true}
                    infinite={true}
                    containerClass="w-full md:w-1/2">
                    {imageSlides2.map((slide, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-contain rounded-lg"
                        />
                        <p className="mt-3 mb-6 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </div>
                    ))}
                  </Carousel>

                  <a
                    href="https://winautomotive.id/"
                    className="bg-skyblue text-black md:w-1/4 md:h-8 md:flex justify-center items-center text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </a>
                </div>
              </div>

              {/* Slide Ketiga */}
              <div className="px-14 py-14 bg-primary rounded-lg">
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    MotorCheckUp
                  </h2>
                  <Carousel
                    responsive={responsive}
                    showDots={true}
                    arrows={true}
                    infinite={true}
                    containerClass="w-full md:w-1/2">
                    {imageSlides3.map((slide, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-contain rounded-lg"
                        />
                        <p className="mt-3 mb-8 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </div>
                    ))}
                  </Carousel>

                  <a
                    href="https://motorcheckup.sg/"
                    className="bg-skyblue md:w-1/4 md:h-8 md:flex justify-center items-center text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </a>
                </div>
              </div>

              {/* Slide Keempat */}
              <div className="px-14 py-14 bg-primary rounded-lg">
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Isun Education
                  </h2>
                  <Carousel
                    responsive={responsive}
                    showDots={true}
                    arrows={true}
                    infinite={true}
                    containerClass="w-full md:w-1/2">
                    {imageSlides4.map((slide, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-contain rounded-lg"
                        />
                        <p className="mt-3 mb-7 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </div>
                    ))}
                  </Carousel>

                  <a
                    href="https://isunworld.com/"
                    className="bg-skyblue md:w-1/4 md:h-8 md:flex justify-center items-center text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </a>
                </div>
              </div>

              {/* Slide Kelima */}
              <div className="px-14 py-14 bg-primary rounded-lg">
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Figma Portfolio Saya
                  </h2>
                  <Carousel
                    responsive={responsive}
                    showDots={true}
                    arrows={true}
                    infinite={true}
                    containerClass="w-full md:w-1/2">
                    {imageSlides5.map((slide, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-contain rounded-lg"
                        />
                        <p className="mt-3 mb-7  text-justify text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </div>
                    ))}
                  </Carousel>

                  <a
                    href="https://www.figma.com/design/hxF8qhAWdUsXgoxeHhQQFF/ui%2Fux-my-portfolio?node-id=0-1&node-type=CANVAS&t=ZnNjdTMGQs9TnS6o-0"
                    className="bg-skyblue md:w-1/4 md:h-8 md:flex justify-center items-center text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 mt-4 rounded-lg">
                    <button>Link</button>
                  </a>
                </div>
              </div>
              {/* Keenam */}
              <div className="px-14 py-14 bg-primary rounded-lg">
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-sans text-center font-semibold mb-6 text-white">
                    Other Projects
                  </h2>
                  <Carousel
                    responsive={responsive}
                    showDots={true}
                    arrows={true}
                    infinite={true}
                    containerClass="w-full md:w-1/2">
                    {imageSlides6.map((slide, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-64 object-contain rounded-lg"
                        />
                        <p className="mt-3 mb-6 text-center text-sm font-semibold text-white">
                          {slide.description}
                        </p>
                      </div>
                    ))}
                  </Carousel>

                  <a
                    href="https://dawijaya.github.io/Mycv/"
                    className="bg-skyblue text-black text-center font-sans font-semibold cursor-pointer hover:text-green-700 w-1/2 md:w-1/4 md:h-8 md:flex justify-center items-center mt-4 rounded-lg">
                    <button>Link</button>
                  </a>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* CV */}
      <section
        id="cv"
        className="relative  flex items-center justify-center min-h-screen w-screen "
        style={{
          backgroundImage: `url(${bgcv.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="flex flex-col ">
          <div className="flex items-center justify-center mb-5">
            <h1 className="text-3xl  font-sans text-white dark:text-second top-24 font-bold ">
              Download Cv
            </h1>
          </div>
          <div>
            <a
              className="flex items-center cursor-pointer justify-center"
              href="/DANDI AGUS WIJAYA | ENGLISH CV.pdf">
              <img
                src={downloadcv.src}
                alt="gif"
                className="w-1/2 h-1/2 rounded-full"
              />
            </a>
          </div>
        </div>
      </section>
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
        <p className="font-sans text-xl font-semibold">Versi 1.2</p>
        <div className="flex items-center justify-center space-x-2">
          <Link
            className=" md:block hidden"
            href="https://dawijaya.github.io/Mycv/">
            <button className="bg-primary p-1 text-xs text-white rounded-lg">
              Versi 0.1 boostrap
            </button>
          </Link>
          <Link
            className=" md:block hidden"
            href="https://dawijaya.github.io/portfolio-pakai-Tailwind-CSS/">
            <button className="bg-primary p-1 text-xs text-white rounded-lg">
              Versi 0.2 Tailwind
            </button>
          </Link>
        </div>

        <p className="font-semibold">Copyright © Dandi Agus Wijaya 2024</p>
      </footer>
    </main>
  );
};

export default ProfileCard;
