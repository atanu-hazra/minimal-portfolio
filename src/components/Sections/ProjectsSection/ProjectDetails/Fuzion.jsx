import { projects } from "@/data/projects"
import Link from "next/link"
import { FaChevronLeft, FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

export default function Fuzion() {
    const {
        projectName,
        fullDescription,
        techStacks,
        githubRepo,
        liveDemo,
        thumbnail
    } = projects[0]

    return (
        <>

            <div className="py-2 mx-2 sm:mx-8 md:mx-52">

                <Link href="/projects">
                    <button
                        variant="ghost"
                        className="mt-10 gap-2 w-32 h-10 border-2 text-sm border-slate-800  hover:bg-slate-800 text-slate-300 hover:text-slate-50 flex justify-center items-center rounded-lg"
                    >
                        <FaChevronLeft className="w-3 h-3" />
                        <span>All Projects</span>
                    </button>
                </Link>

                <div className="mt-6 mb-6 flex justify-between items-center">
                    <h1 className="text-5xl font-bold text-left">{projectName}</h1>

                    <div className="flex gap-2 sm:gap-4">
                        <button
                            size="icon"
                            className="hover:bg-gray-800/70 p-2 rounded-full"
                        >
                            <a href={githubRepo} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-gray-300 h-6 w-6" />
                            </a>
                        </button>

                        <button
                            size="icon"
                            className="hover:bg-gray-800/70 p-2 rounded-full"
                        >
                            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink className="text-gray-300 h-6 w-6" />
                            </a>
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src={thumbnail}
                        alt={projectName}
                        className="w-full h-auto md:h-94 object-cover rounded-lg"
                    />
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-left mt-8">Tech Stack</h3>

                    <div className="flex flex-wrap gap-2 my-5">
                        {techStacks.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-sm text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-left mt-8">Description</h3>

                    <p className="whitespace-pre-line leading-relaxed text-left text-slate-300">{fullDescription}</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-left mt-8 mb-4">Page Info</h3>
                    <img
                        src="https://res.cloudinary.com/dmfvcclh3/image/upload/v1755527329/Screenshot_2025-08-18_192339_f6yter.png"
                        alt="fuzion-app"
                        className="w-full h-auto object-cover my-6 rounded-md border-2 border-slate-500"
                    />

                    <img
                        src="https://res.cloudinary.com/dmfvcclh3/image/upload/v1755527327/Screenshot_2025-08-18_191933_gubv2b.png"
                        alt="fuzion-app"
                        className="w-full h-auto object-cover my-6 rounded-md"
                    />

                    <img
                        src="https://res.cloudinary.com/dmfvcclh3/image/upload/v1755527324/Screenshot_2025-08-18_192506_gbbdm7.png"
                        alt="fuzion-app"
                        className="w-full h-auto object-cover my-6 border-2 border-slate-500 rounded-md"
                    />
                    <img
                        src="https://res.cloudinary.com/dmfvcclh3/image/upload/v1755527324/Screenshot_2025-08-18_192151_scfd1w.png"
                        alt="fuzion-app"
                        className="w-full h-auto object-cover my-6 rounded-md"
                    />
                    <img
                        src="https://res.cloudinary.com/dmfvcclh3/image/upload/v1755527324/Screenshot_2025-08-18_192852_e4sxsi.png"
                        alt="fuzion-app"
                        className="w-full h-auto object-cover my-6 border-2 border-slate-500 rounded-md"
                    />
                </div>

                <Link href="/projects" className="flex justify-center">
                    <button
                        variant="ghost"
                        className="mt-4 mb-10 gap-2 w-32 h-10 border-2 text-sm border-slate-800  hover:bg-slate-800 text-slate-300 hover:text-slate-50 flex justify-center items-center rounded-lg"
                    >
                        <FaChevronLeft className="w-3 h-3" />
                        <span>All Projects</span>
                    </button>
                </Link>
            </div>
        </>
    )
}