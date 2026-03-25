'use client'

import Image from "next/image";
import { GridContainer } from "./grid";
import ProjectSpider from '@/public/project-spider.jpg';
import ProjectGod from '@/public/project-god.jpg';
import ProjectBk from '@/public/project-bk.jpg';
import ProjectTodo from '@/public/project-todo.jpg';
import ProjectFig from '@/public/project-fig.jpg';
import ProjectTesla from '@/public/project-tesla.jpg';
import ProjectStar from '@/public/project-starbucks.jpg';
import ProjectInsta from '@/public/project-instasany.jpg';
import ProjectPet from '@/public/project-pet.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


export default function SectionProject(){
    const projetosRef = useRef(null);

    useEffect(() => {
        const projetos = projetosRef.current

        gsap.fromTo(projetos, {
            opacity: 0,
            y: 30
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
            trigger: projetos,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },  
        })


    }, [])




    return(
        <>  
            <section id="projetos" className="pb-24 overflow-x-hidden">

                <GridContainer>

                    <div className="w-full mb-26 px-2" ref={projetosRef}>
                        <span className="text-2xl uppercase">Interfaces web</span>
                        <h2 className="text-8xl font-bold font-oswald lg:text-9xl pb-6 border-b-2">Projetos</h2>
                    </div>
                    
                    <div className="w-full grid grid-cols-1 gap-16 px-4 items-center justify-items-center lg:grid-cols-2 2xl:grid-cols-3 2xl:gap-20">
                        
                        {/* CARD 01 */}
                        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[550px] h-auto flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-all border-2">
                            {/* IMAGEM */}
                            <Image
                            src={ProjectSpider}
                            alt="Landing Page - Spider Man 2"
                            className="object-cover shadow-xl"
                             />

                            {/* TEXT CONTENT */}
                            <div className="w-full flex flex-col gap-8 px-8 pt-8 flex-1">
                                <div>
                                {/* Linha + Span + Linha */}
                                <div className="flex items-center gap-4 w-full pb-8">
                                    <div className="flex-1 h-[2px] bg-black" />
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center font-oswald font-semibold">Spider-Man 2</h3>
                                    <div className="flex-1 h-[2px] bg-black" />
                                </div>
                                <p className="text-lg sm:text-xl lg:text-3xl text-start font-poppins">Um layout moderno inspirado no universo do Spider-Man, com foco em design responsivo, animações e organização visual. Explore o projeto e veja na prática a construção de uma interface dinâmica e bem estruturada.</p>
                                </div>
                            </div>

                            {/* LINGUAGENS CONTENT */}                                               
                            <div className="w-full flex items-center justify-center px-8 pt-10">
                                <ul className="w-full flex items-center justify-start flex-wrap gap-2 lg:gap-4">
                                    <li  className="text-sm sm:text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-blue-600 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        html
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-amber-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        css
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-fuchsia-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        scss
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-yellow-400 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        javascript
                                    </li>
                                </ul>

                                <span className="text-2xl lg:text-3xl font-poppins font-semibold whitespace-nowrap uppercase">Landing Page</span>
                            </div>
                           
                           {/* BUTTONS DEPLOY */}
                            <div className="w-full flex items-center justify-evenly flex-1 flex-wrap gap-4 py-8">
                                <a 
                                href="https://github.com/Henrique-Handlovics/layout-spider-man" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">  
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins">Ver código</span>
                                </a>
                                <a 
                                href="https://henrique-handlovics.github.io/layout-spider-man/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">   
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver projeto</span>
                                </a>
                            </div>

                        </div>

                        {/* CARD 02 */}
                        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[550px] h-auto flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-all border-2">
                            {/* IMAGEM */}
                            <Image
                            src={ProjectGod}
                            alt="Landing Page - God of War Ragnarök"
                            className="object-cover shadow-xl"
                             />

                            {/* TEXT CONTENT */}
                            <div className="w-full flex flex-col gap-8 px-8 pt-8 flex-1">
                                <div>
                                {/* Linha + Span + Linha */}
                                <div className="flex items-center gap-4 w-full pb-8">
                                    <div className="flex-1 h-[2px] bg-black" />
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center font-oswald font-semibold">God of War Ragnarök</h3>
                                    <div className="flex-1 h-[2px] bg-black" />
                                </div>
                                <p className="text-lg sm:text-xl lg:text-3xl text-start font-poppins">Um layout inspirado no universo de God of War, com foco em design moderno, responsividade e experiência visual imersiva. Explore o projeto e veja como a interface foi construída para transmitir a força e a identidade do jogo.</p>
                                </div>
                            </div>

                            {/* LINGUAGENS CONTENT */}                                               
                            <div className="w-full flex items-center justify-center px-8 pt-10">
                                <ul className="w-full flex items-center justify-start flex-wrap gap-2 lg:gap-4">
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-blue-600 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        html
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-amber-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        css
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-fuchsia-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        scss
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-yellow-400 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        javascript
                                    </li>
                                </ul>

                                <span className="text-2xl lg:text-3xl font-poppins font-semibold whitespace-nowrap uppercase">Landing Page</span>
                            </div>
                           
                           {/* BUTTONS DEPLOY */}
                            <div className="w-full flex items-center justify-evenly flex-1 flex-wrap gap-4 py-8">
                                <a 
                                href="https://github.com/Henrique-Handlovics/layout-god-of-war" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">  
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300"  d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins">Ver código</span>
                                </a>
                                <a 
                                href="https://henrique-handlovics.github.io/layout-god-of-war/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">   
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver projeto</span>
                                </a>
                            </div>

                        </div>
                        {/* CARD 03 */}
                        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[550px] h-auto flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-all border-2">
                            {/* IMAGEM */}
                            <Image
                            src={ProjectFig}
                            alt="Landing Page - FigPro"
                            className="object-cover shadow-xl"
                             />

                            {/* TEXT CONTENT */}
                            <div className="w-full flex flex-col gap-8 px-8 pt-8 flex-1">
                                <div>
                                {/* Linha + Span + Linha */}
                                <div className="flex items-center gap-4 w-full pb-8">
                                    <div className="flex-1 h-[2px] bg-black" />
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center font-oswald font-semibold">FigPro</h3>
                                    <div className="flex-1 h-[2px] bg-black" />
                                </div>
                                <p className="text-lg sm:text-xl lg:text-3xl text-start font-poppins">Uma landing page moderna desenvolvida a partir de um design, com foco em responsividade, organização visual e experiência do usuário.
Explore o projeto e veja como o layout foi transformado em uma interface funcional.</p>
                                </div>
                            </div>

                            {/* LINGUAGENS CONTENT */}                                               
                            <div className="w-full flex items-center justify-center px-8 pt-10">
                                <ul className="w-full flex items-center justify-start flex-wrap gap-2 lg:gap-4">
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-blue-600 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        html
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-amber-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        css
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-fuchsia-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        scss
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-yellow-400 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        javascript
                                    </li>
                                </ul>

                                <span className="text-2xl lg:text-3xl font-poppins font-semibold whitespace-nowrap uppercase">Landing Page</span>
                            </div>
                           
                           {/* BUTTONS DEPLOY */}
                            <div className="w-full flex items-center justify-evenly flex-1 flex-wrap gap-4 py-8">
                                <a 
                                href="https://github.com/Henrique-Handlovics/Landing-page-figpro" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">  
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver código</span>
                                </a>
                                <a 
                                href="https://henrique-handlovics.github.io/Landing-page-figpro/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">   
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver projeto</span>
                                </a>
                            </div>

                        </div>

                        {/* CARD 04 */}
                        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[550px] h-auto flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-all border-2">
                            {/* IMAGEM */}
                            <Image
                            src={ProjectPet}
                            alt="Landing Page - PetShop"
                            className="object-cover shadow-xl"
                             />

                            {/* TEXT CONTENT */}
                            <div className="w-full flex flex-col gap-8 px-8 pt-8 flex-1">
                                <div>
                                {/* Linha + Span + Linha */}
                                <div className="flex items-center gap-4 w-full pb-8">
                                    <div className="flex-1 h-[2px] bg-black" />
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center font-oswald font-semibold">PetShop</h3>
                                    <div className="flex-1 h-[2px] bg-black" />
                                </div>
                                <p className="text-lg sm:text-xl lg:text-3xl text-start font-poppins">Uma landing page moderna desenvolvida para apresentar serviços e produtos de petshop de forma clara, responsiva e visualmente atrativa.
Explore o projeto e veja como a interface foi construída.</p>
                                </div>
                            </div>

                            {/* LINGUAGENS CONTENT */}                                               
                            <div className="w-full flex items-center justify-center px-8 pt-10">
                                <ul className="w-full flex items-center justify-start flex-wrap gap-2 lg:gap-4">
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-black rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        nextjs
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-blue-600 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        typescrip
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-amber-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        tailwindcss
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-indigo-900 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        vite
                                    </li>
                                </ul>

                                <span className="text-2xl lg:text-3xl font-poppins font-semibold whitespace-nowrap uppercase">Landing Page</span>
                            </div>
                           
                           {/* BUTTONS DEPLOY */}
                            <div className="w-full flex items-center justify-evenly flex-1 flex-wrap gap-4 py-8">
                                <a 
                                href="https://github.com/Henrique-Handlovics/landing-page-petshop" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">  
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver código</span>
                                </a>
                                <a 
                                href="https://landing-page-petshop-pi.vercel.app/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">   
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300 ">Ver projeto</span>
                                </a>
                            </div>

                        </div>

                        {/* CARD 05 */}
                        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[550px] h-auto flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-all border-2">
                            {/* IMAGEM */}
                            <Image
                            src={ProjectTesla}
                            alt="Página Animada - Tesla Bot"
                            className="object-cover shadow-xl"
                             />

                            {/* TEXT CONTENT */}
                            <div className="w-full flex flex-col gap-8 px-8 pt-2 flex-1">
                                <div>
                                {/* Linha + Span + Linha */}
                                <div className="flex items-center gap-4 w-full pb-8">
                                    <div className="flex-1 h-[2px] bg-black" />
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center font-oswald font-semibold">Tesla Bot</h3>
                                    <div className="flex-1 h-[2px] bg-black" />
                                </div>
                                <p className="text-lg sm:text-xl lg:text-3xl text-start font-poppins">Uma interface futurista inspirada no Tesla Bot, desenvolvida para transformar tecnologia em experiência visual interativa. O projeto destaca animações com GSAP usando método fromTo.</p>
                                </div>
                            </div>

                            {/* LINGUAGENS CONTENT */}                                               
                            <div className="w-full flex items-center justify-center px-8 pt-10">
                                <ul className="w-full flex items-center justify-start flex-wrap gap-2 lg:gap-4">
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-blue-600 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        html
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-emerald-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        gsap
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-fuchsia-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        scss
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-yellow-400 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        javascript
                                    </li>
                                </ul>

                                <span className="text-2xl lg:text-3xl font-poppins font-semibold whitespace-nowrap uppercase pl-6">Página Animada</span>
                            </div>
                           
                           {/* BUTTONS DEPLOY */}
                            <div className="w-full flex items-center justify-evenly flex-1 flex-wrap gap-4 py-8">
                                <a 
                                href="https://github.com/Henrique-Handlovics/page-tesla-bot" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">  
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300   ">Ver código</span>
                                </a>
                                <a
                                href="https://henrique-handlovics.github.io/page-tesla-bot/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">   
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300   ">Ver projeto</span>
                                </a>
                            </div>

                        </div>

                        {/* CARD 06 */}
                        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[550px] h-auto flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-all border-2">
                            {/* IMAGEM */}
                            <Image
                            src={ProjectInsta}
                            alt="Landing Page - Instasany"
                            className="object-cover shadow-xl"
                             />

                            {/* TEXT CONTENT */}
                            <div className="w-full flex flex-col gap-8 px-8 pt-8 flex-1">
                                <div>
                                {/* Linha + Span + Linha */}
                                <div className="flex items-center gap-4 w-full pb-8">
                                    <div className="flex-1 h-[2px] bg-black" />
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center font-oswald font-semibold">Instasany</h3>
                                    <div className="flex-1 h-[2px] bg-black" />
                                </div>
                                <p className="text-lg sm:text-xl lg:text-3xl text-start font-poppins">Uma interface moderna criada para transformar design em experiência digital, com foco em responsividade, animações e organização visual. O projeto demonstra na prática a construção de uma landing page profissional e interativa.</p>
                                </div>
                            </div>

                            {/* LINGUAGENS CONTENT */}                                               
                            <div className="w-full flex items-center justify-center px-8 pt-10">
                                <ul className="w-full flex items-center justify-start flex-wrap gap-2 lg:gap-4">
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-black rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        nextjs
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-blue-600 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        typescrip
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-emerald-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        gsap
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-yellow-400 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        javascript
                                    </li>
                                </ul>

                                <span className="text-2xl lg:text-3xl font-poppins font-semibold whitespace-nowrap uppercase">Landing Page</span>
                            </div>
                           
                           {/* BUTTONS DEPLOY */}
                            <div className="w-full flex items-center justify-evenly flex-1 flex-wrap gap-4 py-8">
                                <a
                                href="https://github.com/Henrique-Handlovics/landing-page-instasany" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">  
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver código</span>
                                </a>
                                <a
                                href="https://landing-page-instasany.vercel.app/" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">   
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver projeto</span>
                                </a>
                            </div>

                        </div>

                        {/* CARD 07 */}
                        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[550px] h-auto flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-all border-2">
                            {/* IMAGEM */}
                            <Image
                            src={ProjectTodo}
                            alt="Mini App - To Do List"
                            className="object-cover shadow-xl"
                             />

                            {/* TEXT CONTENT */}
                            <div className="w-full flex flex-col gap-8 px-8 pt-8 flex-1">
                                <div>
                                {/* Linha + Span + Linha */}
                                <div className="flex items-center gap-4 w-full pb-8">
                                    <div className="flex-1 h-[2px] bg-black" />
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center font-oswald font-semibold">To Do List</h3>
                                    <div className="flex-1 h-[2px] bg-black" />
                                </div>
                                <p className="text-lg sm:text-xl lg:text-3xl text-start font-poppins">Um mini app de lista de tarefas desenvolvido para praticar organização de componentes, manipulação de eventos e gerenciamento de estado em uma interface funcional.
Explore o projeto e veja como a aplicação foi construída.</p>
                                </div>
                            </div>

                            {/* LINGUAGENS CONTENT */}                                               
                            <div className="w-full flex items-center justify-center px-8 pt-10">
                                <ul className="w-full flex items-center justify-start flex-wrap gap-2 lg:gap-4">
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-blue-600  rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        react
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-indigo-900 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        vite
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-amber-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        css
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-yellow-400 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        javascript
                                    </li>
                                </ul>

                                <span className="text-2xl lg:text-3xl font-poppins font-semibold whitespace-nowrap uppercase">Mini App</span>
                            </div>
                           
                           {/* BUTTONS DEPLOY */}
                            <div className="w-full flex items-center justify-evenly flex-1 flex-wrap gap-4 py-8">
                                <a
                                href="https://github.com/Henrique-Handlovics/to-do-list" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">  
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins">Ver código</span>
                                </a>
                                <a
                                href="https://to-do-list-lovat-omega-26.vercel.app/" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">   
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver projeto</span>
                                </a>
                            </div>

                        </div>

                        {/* CARD 08 */}
                        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[550px] h-auto flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-all border-2">
                            {/* IMAGEM */}
                            <Image
                            src={ProjectBk}
                            alt="Landing Page - Promocional Bk"
                            className="object-cover shadow-xl"
                             />

                            {/* TEXT CONTENT */}
                            <div className="w-full flex flex-col gap-8 px-8 pt-8 flex-1">
                                <div>
                                {/* Linha + Span + Linha */}
                                <div className="flex items-center gap-4 w-full pb-8">
                                    <div className="flex-1 h-[2px] bg-black" />
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center font-oswald font-semibold">Promocional Bk</h3>
                                    <div className="flex-1 h-[2px] bg-black" />
                                </div>
                                <p className="text-lg sm:text-xl lg:text-3xl text-start font-poppins">Uma landing page moderna inspirada no universo de fast food, com foco em design atrativo, responsividade e organização visual da interface.
Explore o projeto e veja como o layout foi desenvolvido.</p>
                                </div>
                            </div>

                            {/* LINGUAGENS CONTENT */}                                               
                            <div className="w-full flex items-center justify-center px-8 pt-10">
                                <ul className="w-full flex items-center justify-start flex-wrap gap-2 lg:gap-4">
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-blue-600 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        html
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-amber-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        css
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-fuchsia-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        scss
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-yellow-400 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        javascript
                                    </li>
                                </ul>

                                <span className="text-2xl lg:text-3xl font-poppins font-semibold whitespace-nowrap uppercase">Landing Page</span>
                            </div>
                           
                           {/* BUTTONS DEPLOY */}
                            <div className="w-full flex items-center justify-evenly flex-1 flex-wrap gap-4 py-8">
                                <a
                                href="https://github.com/Henrique-Handlovics/landing-page-bk" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">  
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver código</span>
                                </a>
                                <a
                                href="https://henrique-handlovics.github.io/landing-page-bk/" 
                                target="_blank"
                                rel="noopener noreferrer"  
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">   
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver projeto</span>
                                </a>
                            </div>

                        </div>

                        {/* CARD 09 */}
                        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[550px] h-auto flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-all border-2">
                            {/* IMAGEM */}
                            <Image
                            src={ProjectStar}
                            alt="Landing Page - Starbucks"
                            className="object-cover shadow-xl"
                             />

                            {/* TEXT CONTENT */}
                            <div className="w-full flex flex-col gap-8 px-8 pt-8 flex-1">
                                <div>
                                {/* Linha + Span + Linha */}
                                <div className="flex items-center gap-4 w-full pb-8">
                                    <div className="flex-1 h-[2px] bg-black" />
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center font-oswald font-semibold">Starbucks</h3>
                                    <div className="flex-1 h-[2px] bg-black" />
                                </div>
                                <p className="text-lg sm:text-xl lg:text-3xl text-start font-poppins">Uma interface moderna inspirada no universo Starbucks, criada para transformar design e identidade visual em uma experiência web envolvente. O projeto destaca responsividade e organização de layout.</p>
                                </div>
                            </div>

                            {/* LINGUAGENS CONTENT */}                                               
                            <div className="w-full flex items-center justify-center px-8 pt-10">
                                <ul className="w-full flex items-center justify-start flex-wrap gap-2 lg:gap-4">
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-blue-600 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        html
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-amber-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        css
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-fuchsia-700 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        scss
                                    </li>
                                    <li  className="text-base lg:text-2xl p-2 font-oswald lg:p-3 bg-yellow-400 rounded-xl lg:rounded-2xl text-white font-semibold  text-center uppercase hover:scale-105 transition-all">
                                        javascript
                                    </li>
                                </ul>

                                <span className="text-2xl lg:text-3xl font-poppins font-semibold whitespace-nowrap uppercase">Landing Page</span>
                            </div>
                           
                           {/* BUTTONS DEPLOY */}
                            <div className="w-full flex items-center justify-evenly flex-1 flex-wrap gap-4 py-8">
                                <a
                                href="https://github.com/Henrique-Handlovics/landing-page-starbucks" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">  
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver código</span>
                                </a>
                                <a
                                href="https://henrique-handlovics.github.io/landing-page-starbucks/" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex items-center gap-4 bg-black rounded-3xl py-4 px-6 border-2 border-transparent hover:bg-transparent hover:border-black hover:shadow-xl [&:hover_span]:text-black [&:hover_svg_path]:fill-black transition-all duration-300 cursor-pointer group">   
                                    <svg className="transition-colors duration-300" width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path className="fill-white group-hover:fill-black transition-colors duration-300" d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"/>
                                    </svg>
                                    <span className="text-2xl lg:text-4xl font-medium text-white font-poppins group-hover:text-black transition-colors duration-300">Ver projeto</span>
                                </a>
                            </div>

                        </div>

                    </div>

                </GridContainer>

            </section> 

        </>
    )
}