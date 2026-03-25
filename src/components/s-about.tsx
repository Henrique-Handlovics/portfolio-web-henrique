'use client'

import { useEffect, useRef } from "react";
import Card from "./card";
import { GridContainer } from "./grid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function SectionAbout(){
    const sobreRef = useRef(null);
    const linguagensRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const sobre = sobreRef.current
        const linguagens = linguagensRef.current
        const card = cardRef.current

        gsap.fromTo(sobre, {
            opacity: 0,
            y: 30
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
            trigger: sobre,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },  
        })

        gsap.fromTo(linguagens, {
            opacity: 0,
            y: 30
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
            trigger: linguagens,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },
        })

        gsap.fromTo(card, {
            opacity: 0,
            scale: .8
        },{
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },
        })

    }, [])

    return(
        <section id="sobre" className="flex items-center justify-between h-[1100px] mb-24 lg:h-[1000px] overflow-x-clip">
            
            <GridContainer className="flex flex-col items-center justify-around gap-8 lg:flex-row">

                <div className="w-full max-w-5xl flex items-center justify-center flex-col gap-10">
                    {/* Sobre Content */}
                    <div className="flex items-center flex-col gap-8 lg:items-start" ref={sobreRef}>
                        <h2 className="font-bold font-fira text-7xl lg:text-8xl">Sobre mim</h2>
                        <p className="font-poppins text-center text-3xl py-4 px-6 text-justify lg:text-4xl md:px-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repellat, quisquam aspernatur culpa ipsa libero ab ipsum recusandae aperiam magnam fugiat laborum natus isto incidunt a. Ipsam, eius quia. Asperiores.</p>
                    </div>

                    {/* Linguagens Icons */}
                    <div className="flex items-center flex-col gap-8 lg:items-start" ref={linguagensRef}>
                        <h3 className="font-bold font-fira text-7xl lg:text-8xl">Linguagens</h3>
                        <div className="flex items-center gap-5 py-10 md:gap-8">
                            <img className="w-15 h-15 lg:w-30 lg:h-30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                            
                            <img className="w-15 h-15 lg:w-30 lg:h-30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
          
                            <img className="w-15 h-15 lg:w-30 lg:h-30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          
                            <img className="w-15 h-15 lg:w-30 lg:h-30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
          
                            <img className="w-15 h-15 lg:w-30 lg:h-30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          
                            <img className="w-15 h-15 lg:w-30 lg:h-30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg" />
          
                            <img className="w-15 h-15 lg:w-30 lg:h-30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                        </div>
          
                    </div>
                </div>

                {/* Perfil Card */}
                <div ref={cardRef}>
                    <Card />
                </div>
                
            
            </GridContainer>   
        </section>
    )
}