"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";


export default function SkillCard({ icon: Icon, skillName, description, mastery }) {
    return (
        <Card
            className={cn(
                "bg-[#0d1117] border border-[#1f2a33] text-[#e5eef6]",
                "hover:bg-[#041625] hover:border-[#2a3640] hover:shadow-md hover:scale-[1.01]",
                "transition-all duration-300 rounded-lg p-8 mx-2 sm:mx-1",
                "gap-2"
            )}
        >
            <Icon className="w-12 h-12 text-white mb-4" />

            <div className="text-left">
                <h3 className="text-xl font-semibold mb-3">{skillName}</h3>
                <p className="text-sm text-[#7d8894] mb-1">{description}</p>
            </div>

            <div className="flex gap-1 text-lg mt-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                    key={i}
                        className={cn(
                            "w-4 h-4",
                            i < mastery ? "text-[#FFD700]" : "text-[#3a4652]"
                        )}
                    />
                ))}
            </div>
        </Card>

    );
}
