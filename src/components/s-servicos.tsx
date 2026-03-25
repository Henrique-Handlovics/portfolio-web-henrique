'use client'

import Image from "next/image";
import { GridContainer } from "./grid";
import DevImg from "@/public/developer.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


export default function SectionServicos(){

    const servicosRef = useRef(null);
    const funcionalidadesRef = useRef(null);
    const devImageRef = useRef(null); 
    const buttonRef = useRef(null);
    const listRef = useRef<HTMLUListElement>(null);


    useEffect(() => {
        const servicos = servicosRef.current
        const funcionalidades = funcionalidadesRef.current
        const devImage = devImageRef.current
        const button = buttonRef.current
        const list = listRef.current;
        if (!list) return;

        const itens = list.querySelectorAll<HTMLLIElement>("li");

        
        gsap.fromTo(itens,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.5,
                scrollTrigger: {
                trigger: servicos,
                start: "top 80%",
                once: true,
                },   
            }
        );
       

        gsap.fromTo(servicos, {
            opacity: 0,
            y: 30
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
            trigger: servicos,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },  
        })

        gsap.fromTo(funcionalidades, {
            opacity: 0,
            scale:.8
        },{
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
            trigger: funcionalidades,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },  
        })

        gsap.fromTo(devImage, {
            opacity: 0,
            scale: 0.5
        },{
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
            trigger: devImage,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },  
        })

        gsap.fromTo(button, {
            opacity: 0,
            y: 60
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
            trigger: button,
            start: "top 80%",
            once: true, // 👈 anima só uma vez
            },  
        })

         

        

    }, [])

    return(
         <section id="servicos" className="mb-24 h-[1300px] lg:h-[900px] overflow-x-clip">
                    
                    <GridContainer>
                        
                        <div className="w-full mb-26 px-2" ref={servicosRef}>
                            <span className="text-2xl uppercase">Sites e Pages</span>
                            <h2 className="text-8xl font-bold font-oswald pb-9 border-b-2 lg:text-9xl">Serviços</h2>
                        </div>

                        <div className="flex flex-col items-center justify-evenly pb-24 lg:flex-row">
                            {/* Text Content */}
                            <div className="flex flex-col justify-center items-start">
                                <div className="w-full max-w-[800px] px-4" ref={funcionalidadesRef}>
                                    <h2 className="text-6xl font-semibold font-oswald pb-8 lg:text-7xl">Funcionalidades para Sites e Landing Pages</h2>
                                    <p className="text-3xl font-poppins">Crio sites modernos e estratégicos, com recursos que ajudam a atrair, engajar e converter visitantes em clientes:</p>
                                </div>
                                <ul className="flex flex-col gap-4 pt-8 px-4" ref={listRef}>
                                    <li className="flex flex-col justify-center items-start">
                                        <strong className="text-3xl font-fira">🎯 Landing pages focadas em conversão</strong>
                                        <span className="text-2xl font-poppins">Estruturadas para gerar mais leads e vendas</span>
                                    </li>
                                    <li className="flex flex-col justify-center items-start" >
                                        <strong className="text-3xl font-fira">📩 Formulários de contato inteligentes</strong>
                                        <span className="text-2xl font-poppins">Receba mensagens direto no seu e-mail ou sistema</span>
                                    </li>
                                    <li className="flex flex-col justify-center items-start">
                                        <strong className="text-3xl font-fira">🔍 Otimização para SEO</strong>
                                        <span className="text-2xl font-poppins">Seu site mais fácil de ser encontrado no Google</span>
                                    </li>
                                    <li className="flex flex-col justify-center items-start" >
                                        <strong className="text-3xl font-fira">🎬 Animações suaves ao rolar a página</strong>
                                        <span className="text-2xl font-poppins">Elementos aparecem de forma elegante conforme o usuário navega</span>
                                    </li>
                                    <li className="flex flex-col justify-center items-start" >
                                        <strong className="text-3xl font-fira">🖱️ Efeitos interativos ao passar o mouse</strong>
                                        <span className="text-2xl font-poppins">Botões e seções com feedback visual moderno</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Developer Image */}
                            <div className="relative mt-8 w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px]" ref={devImageRef}>
                                <Image
                                src={DevImg}
                                alt="Developer Image"
                                fill
                                className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Button Contato */}
                        <div className="flex justify-center mb-20" ref={buttonRef}>
                            <a 
                            href={`https://wa.me/5513991248239?text=Gostaria de mais informações sobre a contratação de serviços!`} target="_blank"
                            className="text-white font-bold text-4xl bg-primary-gray p-8 mx-auto inline-block rounded-2xl cursor-pointer hover:text-black hover:bg-white hover:border-2 hover:shadow-2xl hover:scale-105 transition-all"
                            >Trabalhe Comigo</a>
                        </div>
                        
                     

                     
                    </GridContainer>   
                </section>
    )
}