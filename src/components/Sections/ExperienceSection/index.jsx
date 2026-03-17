"use client";

import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
    return (
        <section className="py-12 px-2 md:px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Experience</h2>
            <p className="text-lg text-center text-gray-400 mb-8">My professional journey and work experience.</p>
            
            <div className="flex flex-col gap-6 md:gap-8 justify-center items-center">
                {experience.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </section>
    );
}