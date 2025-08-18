"use client";

import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";

export default function SkillsSection() {
    return (
        <section className="py-12 px-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Skills</h2>
            <p className="text-lg text-center text-gray-400 mb-8">Key skills that define my professional identity.</p>
            
            <div className="grid gap-x-4 gap-y-4 md:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    );
}
