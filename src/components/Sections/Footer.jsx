"use client";

import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/data/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <div className="flex justify-center items-center gap-10 mb-8">
            <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-gray-800 transition"
            >
                <FaGithub className="w-6 h-6" />
            </a>

            <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-gray-800 transition"
            >
                <FaLinkedin className="w-6 h-6" />
            </a>

            <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-gray-800 transition"
            >
                <SiGmail className="w-6 h-6" />
            </a>
        </div>
    );
};

export default Footer;
