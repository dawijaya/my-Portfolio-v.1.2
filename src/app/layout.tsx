import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar/page"; // Pastikan path sudah benar
import "./globals.css";

export const metadata: Metadata = {
  title: "DANDI AGUS WIJAYA",
  description: "Web Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
