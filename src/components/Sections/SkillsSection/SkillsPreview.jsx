"use client";

import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";


export default function SkillsPreview() {
    let previewSkills = skills.slice(0, 6)

    return (
        <section className="py-12 px-2 md:px-6 bg-[#121f2b] my-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Skills</h2>
            <p className="text-lg text-center text-gray-400 mb-8">Key skills that define my professional identity.</p>

            <div className="grid gap-x-4 gap-y-4 md:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {previewSkills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>

            <Link href="/skills" className="flex justify-center items-center">
                <button
                    variant="ghost"
                    className="mt-10 gap-2 w-28 h-10 border text-sm border-slate-700 bg-[#0d1117] hover:bg-slate-700 hover:text-slate-50 flex justify-center items-center rounded-lg"
                >
                    <FaChevronDown className="w-3 h-3" />
                    <span>View All</span>
                </button>
            </Link>

        </section>
    );
}
