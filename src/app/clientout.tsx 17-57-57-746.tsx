"use client";
import React from "react";
import Navbar from "@/app/components/Navbar/page";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Conditionally render Navbar based on pathname
  return (
    <>
      <Navbar pathname={pathname} />
      {children}
    </>
  );
}
