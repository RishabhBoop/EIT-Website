'use client';
import React from "react";
import { Doto } from 'next/font/google';
import { Button } from "@heroui/react";

const doto = Doto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-doto',
});

export default function Homepage() {
  return (
    <div className="relative w-full h-screen overflow-hidden place-content-center">
      <img
        src="Gemini_Generated_Img_1.jpeg"
        alt="Fachschaft EIT"
        // className="blur-md brightness-50 w-full h-full object-cover opacity-100"
        className="w-full h-full object-scale-down opacity-100"
      />
      {/* <div className="select-none absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl text-center md:text-7xl lg:text-[120px] font-hero font-bold doto.className">
          Fachschaft EIT
        </h1>
      </div> */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-20">
        <Button color="primary" variant="ghost" size="lg" className="rounded-full">
          YOOOOOO
        </Button>
      </div>
    </div>
  );
}
