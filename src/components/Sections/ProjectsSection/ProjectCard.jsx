"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FiArrowRight, FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProjectCard({ project }) {
    const { projectName, shortDescription, techStacks, thumbnail, liveDemo, githubRepo, routeName } = project;

    return (
        <Card
            className={cn(
                "bg-[#0d1117] border border-[#1f2a33] text-[#e5eef6]",
                "hover:bg-[#041625] hover:border-[#2a3640] hover:shadow-md hover:scale-[1.01]",
                "transition-all duration-300 rounded-lg overflow-hidden flex flex-col p-0 mx-2 sm:mx-1",
                "gap-2 w-[90%] sm:w-[46%] md:w-[30%] "
            )}
        >
            <div className="w-full h-48 bg-gray-900">
                <img
                    src={thumbnail}
                    alt={projectName}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-2 text-left">{projectName}</h2>
                <p className="text-base text-[#7d8894] mb-4 text-left">{shortDescription}</p>

                <div className="flex flex-wrap gap-2 mt-2 mb-5">
                    {techStacks.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-sm text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-auto">

                    <Link href={`/projects/${routeName}`}>
                        <Button variant="secondary" className="text-sm">
                            Read more <FiArrowRight size={16} />
                        </Button>
                    </Link>

                    <div className="flex gap-2">
                        {(githubRepo.trim().length > 0)
                            ? (<Button
                                size="icon"
                                variant="ghost"
                                className="bg-gray-800 hover:bg-gray-700 rounded-full"
                                asChild
                            >
                                <a href={githubRepo} target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={18} className="text-gray-300" />
                                </a>
                            </Button>)
                            : <></>
                        }

                        {(liveDemo.trim().length > 0)
                            ? (<Button
                                size="icon"
                                variant="ghost"
                                className="bg-gray-800 hover:bg-gray-700 rounded-full"
                                asChild
                            >
                                <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                                    <FiGlobe size={18} className="text-gray-300" />
                                </a>
                            </Button>)
                            : <></>
                        }


                    </div>
                </div>
            </div>
        </Card>
    );
}
