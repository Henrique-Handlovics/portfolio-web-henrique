"use client"; // necessário para usar hooks no Next.js

import Image from "next/image";
import { GridContainer } from "./grid";
import { useState, useEffect } from "react";
import Logo from "@/public/Logo-H.png";

export default function Header() {
  // controla quando o header muda de estilo ao scroll
  const [scrolled, setScrolled] = useState(false);

  // controla qual link está ativo (baseado na section visível)
  const [active, setActive] = useState("");

  useEffect(() => {
    // pega todas as sections da página
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
    setScrolled(window.scrollY > 80);

    let current = "";

    sections.forEach((section) => {
        const top = section.offsetTop - 150; // ajuste fino

        // 👇 se já passou do topo, ela vira candidata
        if (window.scrollY >= top) {
        current = section.getAttribute("id")!;
        }
    });

    setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    // limpa o evento quando o componente desmontar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // função que monta as classes dos links
  const linkClass = (id: string) =>
    `relative text-4xl text-white font-poppins
    after:content-[''] after:absolute after:left-0 after:-bottom-2 
    after:h-[2px] after:bg-white after:transition-all after:duration-300
    
    ${
      active === id
        ? "after:w-full" // linha sempre visível quando ativo
        : "after:w-0 hover:after:w-full" // animação no hover
    }`;

  return (
    <header
      className={`fixed overflow-x-hidden top-0 w-full h-56 flex items-center z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-sm" // fundo ao scroll
          : "bg-transparent" // transparente no topo
    }`}
    >
      <GridContainer className="flex items-center justify-between">
        
        {/* LOGO */}
        <div>
          <Image src={Logo} alt="Logo" width={170} className="md:w-[200px] lg:w-[250px]" />
        </div>

        {/* NAVBAR */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            
            {/* cada link usa o mesmo padrão */}
            <li>
              <a href="#inicio" className={linkClass("inicio")}>
                Início
              </a>
            </li>

            <li>
              <a href="#sobre" className={linkClass("sobre")}>
                Sobre
              </a>
            </li>

            <li>
              <a href="#servicos" className={linkClass("servicos")}>
                Serviços
              </a>
            </li>


            <li>
              <a href="#projetos" className={linkClass("projetos")}>
                Projetos
              </a>
            </li>

            <li>
              <a href="#contato" className={linkClass("contato")}>
                Contato
              </a>
            </li>

          </ul>
        </nav>

        {/* Redes Sociais */}
        <div className="flex items-center justify-center gap-8 pr-6 md:hidden lg:flex">
          <button className=" hover:scale-110 transition-all">
              <a 
              href="https://www.instagram.com/dev.henriqueh?igsh=MWFyZ3hrd3A5bXN4dQ=="
              target="_blank"
              rel="noopener noreferrer">
                <svg className=" w-15 h-15" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm8.75 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>
          </button>
          <button className=" hover:scale-110 transition-all">
              <a 
              href="www.linkedin.com/in/henriquehandlovics"
              target="_blank"
              rel="noopener noreferrer"
              >
                <svg className=" w-15 h-15" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                <path d="M6.94 6.5a1.94 1.94 0 11-.001-3.881A1.94 1.94 0 016.94 6.5zM4.5 8h4.88V20H4.5V8zm7.5 0h4.67v1.64h.07c.65-1.23 2.24-2.53 4.61-2.53C24 7.11 24 10.02 24 13.11V20h-4.88v-5.7c0-1.36-.02-3.11-1.9-3.11-1.9 0-2.2 1.48-2.2 3.01V20H12V8z"/>
                </svg>
              </a>
          </button>
          <button className=" hover:scale-110 transition-all">
              <a 
              href="https://github.com/Henrique-Handlovics"
              target="_blank"
              rel="noopener noreferrer"
              >
                <svg className=" w-15 h-15" viewBox="0 0 24 24" fill="white">
                <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                </svg>
              </a>
          </button>
        </div>

      </GridContainer>
    </header>
  );
}