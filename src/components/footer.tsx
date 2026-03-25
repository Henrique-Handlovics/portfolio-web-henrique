import { GridContainer } from "./grid";
import Image from "next/image";
import Logo from '@/public/Logo-H.png';


export default function Footer(){
     return(
        <section id="contato" className="w-full bg-black text-white py-16">

            <GridContainer className="flex items-center justify-center flex-col">

                <h2 className="text-6xl font-medium font-oswald text-center mx-auto block mt-24 lg:text-8xl">Gostou do que viu? Entre em contato.</h2>

                <div className="w-full mx-auto flex flex-col items-center justify-center gap-6 py-16 lg:flex-row lg:gap-24">
                    {/* Redes Sociais */}
                    <div className="px-4">
                        <ul className="flex items-start flex-col justify-center gap-8 py-8">
                            <li className="flex items-center gap-8 hover:text-secondary-gray">
                                <svg className=" w-20 h-20" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm8.75 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                                </svg>
                                <a
                                    href="https://www.instagram.com/dev.henriqueh?igsh=MWFyZ3hrd3A5bXN4dQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-4xl font-poppins font-medium"
                                    >
                                    Instagram: dev.henriqueh
                                </a>
                            </li>
                            <li className="flex items-center gap-8 hover:text-secondary-gray">
                                <svg className=" w-20 h-20" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                                <path d="M6.94 6.5a1.94 1.94 0 11-.001-3.881A1.94 1.94 0 016.94 6.5zM4.5 8h4.88V20H4.5V8zm7.5 0h4.67v1.64h.07c.65-1.23 2.24-2.53 4.61-2.53C24 7.11 24 10.02 24 13.11V20h-4.88v-5.7c0-1.36-.02-3.11-1.9-3.11-1.9 0-2.2 1.48-2.2 3.01V20H12V8z"/>
                                </svg>
                                <a
                                    href="www.linkedin.com/in/henriquehandlovics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-4xl font-poppins font-medium"
                                    >
                                    Linkedin: Henrique-Handlovics
                                </a>
                            </li>
                            <li className="flex items-center gap-8 hover:text-secondary-gray">
                                <svg className=" w-20 h-20" viewBox="0 0 24 24" fill="white">
                                <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.3 3.87 21.8 8.44 23.4C9.04 23.5 9.26 23.15 9.26 22.85C9.26 22.6 9.25 21.85 9.24 20.9C6 21.6 5.22 19.5 5.22 19.5C4.68 18.1 3.9 17.7 3.9 17.7C2.78 16.95 3.98 16.97 3.98 16.97C5.22 17.05 5.87 18.2 5.87 18.2C6.98 20.1 8.78 19.55 9.48 19.25C9.58 18.45 9.9 17.9 10.26 17.6C7.64 17.3 4.88 16.3 4.88 11.7C4.88 10.4 5.34 9.3 6.1 8.4C5.98 8.1 5.58 6.9 6.22 5.3C6.22 5.3 7.22 5 9.25 6.4C10.2 6.15 11.2 6.02 12.2 6.02C13.2 6.02 14.2 6.15 15.15 6.4C17.18 5 18.18 5.3 18.18 5.3C18.82 6.9 18.42 8.1 18.3 8.4C19.06 9.3 19.52 10.4 19.52 11.7C19.52 16.32 16.75 17.3 14.12 17.6C14.58 18 15 18.8 15 20.05C15 21.85 14.98 22.55 14.98 22.85C14.98 23.15 15.2 23.5 15.8 23.4C20.37 21.8 23.74 17.3 23.74 12C23.74 5.65 18.59 0.5 12 0.5Z"/>
                                </svg>
                                <a
                                    href="https://github.com/Henrique-Handlovics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-4xl font-poppins font-medium"
                                    >
                                    GitHub: Henrique-Handlovics
                                </a>
                            </li>
                            <li className="flex items-center gap-8 hover:text-secondary-gray">
                                <svg className=" w-20 h-20" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                                <path d="M3 6a2 2 0 012-2h14a2 2 0 012 2v1.2l-9 5.4-9-5.4V6zm0 3.8l8.47 5.08a1 1 0 001.06 0L21 9.8V18a2 2 0 01-2 2H5a2 2 0 01-2-2V9.8z"/>
                                </svg>
                                <a href="contato.devhenriquehandlovics@gmail.com"
                                className="text-2xl font-poppins font-medium lg:text-4xl">
                                    Email: contato.devhenriquehandlovics@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Logo Image*/}
                    <div>
                        <Image
                        src={Logo}
                        alt="logo"
                        width={400}
                        />
                    </div>
                </div>

                 {/* Linha + Span + Linha */}
                <div className="flex items-center gap-4 w-full px-2">
                    <div className="flex-1 h-[2px] bg-white" />
                    <span className="text-2xl font-medium text-white whitespace-nowrap font-fira lg:text-4xl">Desenvolvido por Henrique Handlovics</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>
                    <div className="flex-1 h-[2px] bg-white" />
                </div>


            </GridContainer>

        </section>
     )
}