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
    <div ref={tiltRef} className="w-[300px] md:max-w-[500px] lg:max-w-2xl bg-black flex flex-col items-center justify-center rounded-3xl shadow-lg px-4 py-6 lg:p-8 gap-6 border-2 border-black">
        
        <Image
        src={UserCard}
        alt="Foto de Henrique Cartunesca"
        width={200}
        className=" lg:w-[300px] rounded-3xl border-2 border-black"
        />

        <div className="flex flex-col gap-4 items-center justify-center px-8">
            <h2 className="text-4xl lg:text-6xl font-oswald text-white py-4">Henrique Handlovics</h2>
            <ul className="w-full flex flex-col items-start gap-6">
                <li className="w-full flex items-center justify-between text-3xl font-poppins text-white border-b-2">
                    <span className="uppercase font-fira text-2xl lg:text-3xl">Idade: </span>
                    <strong className="font-poppins font-medium text-2xl lg:text-3xl">20 anos</strong>
                </li>
                <li className="w-full flex items-center justify-between text-3xl font-poppins text-white border-b-2">
                    <span className="uppercase font-fira text-2xl lg:text-3xl">Contato: </span>
                    <strong className="font-poppins font-medium text-xl lg:text-2xl">(13) 99124-8239</strong>
                </li>
                <li className="w-full flex items-center justify-between text-3xl font-poppins text-white">
                    <span className="uppercase font-fira text-2xl lg:text-3xl">Status: </span>
                    <strong className="font-poppins font-medium text-2xl lg:text-3xl">● Disponível</strong>
                </li>
            </ul>
        </div>
    </div>
  );
}