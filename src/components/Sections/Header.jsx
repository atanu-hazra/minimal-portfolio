"use client";

import { Button } from "../ui/button";
import { cookie } from "@/lib/fonts";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CONTACT_EMAIL, RESUME_LINK } from "@/data/constants";


const Header = () => {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    return (
        <div className="fixed top-0 w-full z-40">
            <div
                className={`px-[1%] md:px-[3%] lg:px-[10%] py-2 flex flex-row justify-between items-center border-b-2 border-gray-800 ${showDropdownMenu ? "bg-[#0f1419]/90" : "bg-[#0f1419]/85"
                    } md:bg-[#0f1419]/80 backdrop-blur-lg`}
            >
                <Link
                    href="/"
                    className={`flex justify-center items-center bg-transparent hover:bg-transparent text-2xl md:text-3xl ml-2 px-2 tracking-wider font-bold ${cookie.className}`}
                    onClick={() => setShowDropdownMenu(false)}
                >
                    Atanu Hazra
                </Link>

                {/* Desktop Nav */}
                <div className="flex">
                    <Link href="/skills" onClick={() => setShowDropdownMenu(false)}>
                        <Button
                            variant="ghost"
                            className={`hidden md:flex justify-center items-center text-base font-normal text-slate-300 hover:text-white hover:bg-gray-600/25`}
                        >
                            Skills
                        </Button>
                    </Link>

                    <Link href="/projects" onClick={() => setShowDropdownMenu(false)}>
                        <Button
                            variant="ghost"
                            className="hidden md:flex justify-center items-center text-base font-normal text-slate-300 hover:text-white hover:bg-gray-600/25"
                        >
                            Projects
                        </Button>
                    </Link>

                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex"
                        onClick={() => setShowDropdownMenu(false)}
                    >
                        <Button
                            variant="ghost"
                            className="justify-center items-center text-base font-normal text-slate-300 hover:text-white hover:bg-gray-600/25"
                        >
                            Contact
                        </Button>
                    </a>

                    <a
                        href={RESUME_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex"
                        onClick={() => setShowDropdownMenu(false)}
                    >
                        <Button
                            variant="ghost"
                            className="justify-center items-center text-base font-normal text-slate-300  hover:text-white hover:bg-gray-600/25"
                        >
                            Resume
                        </Button>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="p-4 rounded-md mr-2 flex md:hidden justify-center items-center text-base font-normal hover:text-white hover:bg-gray-600/25 relative"
                        onClick={() => setShowDropdownMenu((prev) => !prev)}
                    >
                        <CgClose
                            className={`w-5 h-5 absolute transition-all duration-300 ${showDropdownMenu
                                ? "opacity-100 scale-100 rotate-0"
                                : "opacity-0 scale-75 rotate-90"
                                }`}
                        />
                        <LuMenu
                            className={`w-5 h-5 absolute transition-all duration-300 ${showDropdownMenu
                                ? "opacity-0 scale-75 -rotate-90"
                                : "opacity-100 scale-100 rotate-0"
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {showDropdownMenu && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="md:hidden flex flex-col justify-center items-center gap-3 border-b-2 border-gray-800 bg-[#0f1419]/90 backdrop-blur-lg py-3 overflow-hidden"
                    >
                        <Link href="/skills" onClick={() => setShowDropdownMenu(false)}>
                            <Button
                                variant="ghost"
                                className="justify-center items-center text-base font-normal hover:text-white hover:bg-gray-600/25 rounded-none"
                            >
                                Skills
                            </Button>
                        </Link>

                        <Link href="/projects" onClick={() => setShowDropdownMenu(false)}>
                            <Button
                                variant="ghost"
                                className="justify-center items-center text-base font-normal hover:text-white hover:bg-gray-600/25 rounded-none"
                            >
                                Projects
                            </Button>
                        </Link>

                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setShowDropdownMenu(false)}
                        >
                            <Button
                                variant="ghost"
                                className="justify-center items-center text-base font-normal hover:text-white hover:bg-gray-600/25 rounded-none"
                            >
                                Contact
                            </Button>
                        </a>

                        <a
                            href={RESUME_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setShowDropdownMenu(false)}
                        >
                            <Button
                                variant="ghost"
                                className="justify-center items-center text-base font-normal hover:text-white hover:bg-gray-600/25 rounded-none"
                            >
                                Resume
                            </Button>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
