"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import bg from "@/app/assets/bg-1.png";
import gif from "@/app/assets/hud-13102_512.gif";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { MdOutlineLanguage } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { IoReaderOutline } from "react-icons/io5";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { FaInstagram, FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const [backdropOpen, setBackdropOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    setChecked(true);
    handleClose();
  };

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setChecked(event.target.checked);
  };

  const [alert, setAlert] = useState<React.ReactNode>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setBackdropOpen(true);

    if (!checked) {
      setAlert(
        <Alert className="text-xs" severity="warning">
          Setujui kebijakan privasi terlebih dahulu.
          <br />
          <span className="text-xs">
            You must agree to the privacy policy first.
          </span>
        </Alert>
      );

      setTimeout(() => {
        setAlert(null);
        setBackdropOpen(false); // Menutup backdrop setelah 2 detik
      }, 2000);

      return;
    }

    const userData = {
      name,
      phone,
    };

    try {
      const response = await axios.post(
        "https://be-my-portfolio.vercel.app/user",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 201) {
        throw new Error("Failed to submit form");
      }

      setAlert(<Alert severity="success">Terimakasih, Thank you!</Alert>);

      setTimeout(() => {
        router.push("/Pilih-Bahasa");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setAlert(
        <Alert severity="error">
          Terjadi kesalahan saat mengirimkan formulir.
        </Alert>
      );
    } finally {
      setBackdropOpen(false); // Set loading ke false setelah proses selesai
    }
  };

  return (
    <main
      className="container min-h-screen overflow-hidden"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <Stack
        className="fixed"
        sx={{
          width: "100%",
          zIndex: (theme) => theme.zIndex.drawer + 2, // Set zIndex higher than Backdrop
        }}
        spacing={10}>
        {alert}
      </Stack>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
        onClick={() => setBackdropOpen(false)}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <section
        className="flex flex-col items-center justify-center flex-grow p-8"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="mb-4 flex justify-center">
          <img src={gif.src} alt="Animated HUD GIF" className="w-1/2 h-1/2" />
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          {" "}
          <section className="bg-black bg-opacity-80 rounded-xl p-6 sm:p-10">
            <h1 className="text-white text-center font-bold text-2xl font-sans">
              Selamat Datang
            </h1>
            <h2 className="text-white text-center text-xl mb-6 font-sans font-semibold">
              Welcome
            </h2>
            <div className="">
              <div className="block mb-1 text-lg font-medium font-sans dark:text-skyblue text-[#87CEEB]">
                Masukan Nama
              </div>
              <TextField
                id="name"
                type="text"
                label="Enter Name"
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                className="bg-white"
                InputProps={{
                  sx: {
                    backgroundColor: "background.paper",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "skyblue",
                      },
                      "&:hover fieldset": {
                        borderColor: "skyblue",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "skyblue",
                      },
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "black",
                    "&.Mui-focused": {
                      color: "skyblue",
                    },
                  },
                }}
              />
            </div>
            <div className="my-4">
              <div className="block mb-1 font-sans text-lg font-medium dark:text-skyblue text-[#87CEEB]">
                Masukan Nomor HP
              </div>

              <TextField
                id="phone"
                type="number"
                label="Enter Phone Number"
                variant="filled"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                fullWidth
                className="bg-white"
                InputProps={{
                  sx: {
                    backgroundColor: "background.paper",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "skyblue",
                      },
                      "&:hover fieldset": {
                        borderColor: "skyblue",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "skyblue",
                      },
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "black",
                    "&.Mui-focused": {
                      color: "skyblue",
                    },
                  },
                }}
              />
            </div>
            <div className="flex mb-4 items-center justify-center">
              <div className="flex items-center">
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  className="border border-white"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                      border: "2px solid white",
                      borderRadius: "4px",
                    },
                  }}
                />

                <div className="text-white font-sans">
                  Setujui Kebijakan Privasi
                  <span className="block text-xs">
                    ( agree to the privacy policy )
                  </span>
                </div>
              </div>

              <div
                onClick={handleClickOpen}
                className="cursor-pointer text-white">
                <IoReaderOutline size={30} />
              </div>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                  {"Kebijakan Privasi"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                    sx={{ textAlign: "justify", textJustify: "inter-word" }}>
                    Saya sangat menghargai privasi Anda dan berkomitmen untuk
                    menjaga dan melindungi informasi pribadi yang Anda berikan
                    kepada saya. Kebijakan privasi ini menjelaskan bagaimana
                    saya mengumpulkan, menggunakan, dan melindungi informasi
                    pribadi Anda saat Anda menggunakan layanan saya.
                    <ol>
                      <li>
                        <strong>1. Informasi yang saya Kumpulkan</strong>
                        <br />
                        Saya dapat meminta Anda untuk memberikan nama dan nomor
                        telepon Anda saat mengakses atau menggunakan layanan
                        tertentu di situs web saya. Informasi ini akan digunakan
                        untuk tujuan berikut:
                        <ul>
                          <li>
                            - Memantau lalu lintas pengguna di situs web guna
                            meningkatkan pengalaman Anda.
                          </li>
                          <li>
                            - Menghubungi Anda jika diperlukan, terkait dengan
                            layanan yang kami sediakan.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>2. Akses dan Pembaruan Informasi</strong>
                        <br />
                        Anda memiliki hak untuk mengakses dan memperbarui
                        informasi pribadi yang Anda berikan kepada saya. Jika
                        Anda ingin memperbarui atau menghapus informasi Anda,
                        silakan hubungi saya melalui kontak yang disediakan.
                      </li>
                    </ol>
                  </DialogContentText>
                </DialogContent>

                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={handleAgree} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className=" flex items-center justify-center">
              <Button
                type="submit"
                className="font-sans w-1/2 flex flex-row items-center justify-center space-x-2"
                color="primary"
                variant="contained">
                <MdOutlineLanguage size={30} />
                <div className="flex flex-col items-start">
                  <span>Lanjut</span>
                  <span className="text-xs font-sans">(Next)</span>
                </div>
              </Button>
            </div>
          </section>
        </form>
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
    </main>
  );
}
