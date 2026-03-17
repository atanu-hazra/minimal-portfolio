"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ExperienceCard({ role, company, logo, jobDescription, from, to, techStacks }) {
    return (
        <Card
            className={cn(
                "bg-[#0d1117] border border-[#1f2a33] text-[#e5eef6]",
                "hover:bg-[#041625] hover:border-[#2a3640] hover:shadow-md hover:scale-[1.01]",
                "transition-all duration-300 rounded-lg p-6 sm:p-8 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-6"
            )}
        >
            {/* Company Logo */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
                <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover bg-gray-900 border border-gray-800 p-1"
                />
            </div>

            {/* Experience Details */}
            <div className="flex flex-col flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                    <div>
                        <h3 className="text-2xl font-bold text-left">{role}</h3>
                        <p className="text-lg text-gray-400 font-medium text-left">{company}</p>
                    </div>
                    {/* Duration Badge */}
                    <div className="text-sm font-medium px-4 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full w-fit">
                        {from} - {to}
                    </div>
                </div>

                {/* Job Description (handles newlines and bullets perfectly) */}
                <p className="whitespace-pre-line leading-relaxed text-left text-[#7d8894] mt-4 mb-6">
                    {jobDescription}
                </p>

                {/* Tech Stacks */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {techStacks.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-sm text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
}