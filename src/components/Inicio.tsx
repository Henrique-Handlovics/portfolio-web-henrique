'use client'

import { useEffect, useRef } from "react";
import { GridContainer } from "./grid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Inicio(){

    const titleInicioRef = useRef(null);
    const textInicioRef = useRef(null);
    const buttonsInicioRef = useRef(null);

    useEffect(() => {
        const titleInicio = titleInicioRef.current
        const textInicio = textInicioRef.current
        const buttonsInicio = buttonsInicioRef.current

        gsap.fromTo(titleInicio, {
            opacity: 0,
            y: -30
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
            trigger: titleInicio,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },
            

        })

        gsap.fromTo(textInicio, {
            opacity: 0,
            y: 30
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
            trigger: textInicio,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },
        })

        gsap.fromTo(buttonsInicio, {
            opacity: 0,
            y: 30
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
            trigger: buttonsInicio,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },
        })


    }, [])




    return(
        <section id="inicio" className="bg-inicio-black bg-cover bg-no-repeat bg-bottom-center w-full h-[800px] flex justify-center items-center lg:h-[1000px] overflow-x-hidden">

            <GridContainer>
                <div className="w-full flex flex-col items-center justify-center py-20 gap-8">
                    {/* Title */}
                    <div className="pb-10 opacity-0" ref={titleInicioRef}>
                        {/* Linha + Span + Linha */}
                        <div className="flex items-center gap-4 w-full">
                            <div className="flex-1 h-[2px] bg-white" />
                            <span className="text-3xl md:text-5xl lg:text-7xl font-medium text-white whitespace-nowrap font-fira">Freelancer</span>
                            <div className="flex-1 h-[2px] bg-white" />
                        </div>
                        <h2 className="text-4xl font-semibold font-fira text-white w-full pt-4 sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-[100px] "> &lt;Desenvolvedor Front-End&gt;</h2>
                    </div>

                    {/* Frase de impacto  */}
                    <div ref={textInicioRef}>
                        <h3 className="text-xl font-poppins font-bold rounded-4xl text-black text-center w-full bg-white py-4 px-6 sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl">Transformando visitantes em <span className="text-amber-700">clientes</span> com sites de alta conversão.</h3>
                    </div>

                    {/* Area Buttons */}
                    <div className="flex items-center justify-evenly gap-14 my-14" ref={buttonsInicioRef}>
                        <a href="#projetos" className="text-white font-bold font-poppins text-2xl md:text-4xl 2xl:text-5xl bg-transparent outline-2 rounded-full py-8 px-10 hover:bg-white hover:text-black transition-all duration-300">
                            Ver Projetos
                        </a>
                        <a href={`https://wa.me/5513991248239?text=Olá vim pelo site e gostaria de mais Informações!`} target="_blank" className="text-white font-bold font-poppins text-2xl md:text-4xl 2xl:text-5xl bg-transparent outline-2 rounded-full py-8 px-10 hover:bg-white hover:text-black transition-all duration-300">
                            Contato
                        </a>
                    </div>

                </div>
            </GridContainer>

        </section>
        
    )
}