"use client";

import Image from "next/image";
import { CONTACT_EMAIL, AVATAR_URL, GITHUB_URL } from "@/data/constants";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { jetbrains } from "@/app/layout";
import { FaChevronDown } from "react-icons/fa6";


export default function HeroSection() {
    return (
        <section className="relative flex flex-col justify-center items-center text-center py-auto px-4 overflow-hidden bg-transparent h-[100vh]">

            {/* Spotlight */}
            <Spotlight className="-top-10 left-20 sm:-top-30 sm:left-30 md:-top-40 md:left-60" fill="white" />

            <div className="relative flex flex-col items-center text-center z-10 mt-12">
                <div className="w-60 h-60 md:w-68 md:h-68 rounded-full overflow-hidden border-8 border-white shadow-lg mb-6">
                    <Image src={AVATAR_URL} alt="Profile" width={270} height={270} className="object-cover" />
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-white">Atanu Hazra</h1>

                <div className={jetbrains.className}>
                <h2 className="text-lg sm:text-xl font-bold text-gray-300 mb-6">{"< "}Full Stack Developer{" />"}</h2>
                <p className="max-w-xl text-gray-400 mb-6">
                    Passionate about building scalable web applications, clean UI, and impactful digital experiences.
                </p>
                </div>

                <div className="flex gap-4 mb-2 justify-center">
                    <Button asChild variant="secondary" className="gap-2 w-32 h-10">
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={16} /> GitHub
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="ghost"
                        className="gap-2 w-32 h-10 border border-gray-700 bg-transparent hover:bg-gray-700 hover:text-slate-50"
                    >
                        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer">
                            <MdEmail size={16} /> Contact
                        </a>
                    </Button>
                </div>

                <FaChevronDown className="mt-10"/>
            </div>

        </section>
    );
}
