"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects"; // Adjust path

const ProjectsSection = () => {
    return (
        <section className="py-12 px-2">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Projects</h2>
                <p className="text-lg text-center text-gray-400 mb-8">Showcasing impactful projects and technical achievements.</p>

                <div 
                // className="grid gap-x-4 gap-y-4 md:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                className="flex flex-wrap flex-row justify-center gap-4 md:gap-6"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
