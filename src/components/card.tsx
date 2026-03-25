"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import UserCard from '@/public/Jovem estiloso com look todo preto.png'

export default function Card() {

  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="w-full max-w-2xl bg-black flex flex-col items-center justify-center rounded-3xl shadow-lg p-8 gap-6 border-2 border-black">
        
        <Image
        src={UserCard}
        alt="Foto de Henrique Cartunesca"
        width={300}
        className="rounded-3xl border-2 border-black"
        />

        <div className="flex flex-col gap-4 items-center justify-center px-8">
            <h2 className="text-6xl font-oswald text-white py-4">Henrique Handlovics</h2>
            <ul className="w-full flex flex-col items-start gap-6">
                <li className="w-full flex items-center justify-between text-3xl font-poppins text-white border-b-2">
                    <span className="uppercase font-fira">Idade: </span>
                    <strong className="font-poppins font-medium">20 anos</strong>
                </li>
                <li className="w-full flex items-center justify-between text-3xl font-poppins text-white border-b-2">
                    <span className="uppercase font-fira">Contato: </span>
                    <strong className="font-poppins font-medium">(13) 99124-8239</strong>
                </li>
                <li className="w-full flex items-center justify-between text-3xl font-poppins text-white">
                    <span className="uppercase font-fira">Status: </span>
                    <strong className="font-poppins font-medium">● Disponível</strong>
                </li>
            </ul>
        </div>
    </div>
  );
}