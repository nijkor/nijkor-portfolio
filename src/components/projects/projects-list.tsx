import * as React from "react"

import { projects } from "@/data/projects";

import Image from "next/image";
import { Separator } from "../ui/separator";

export default function ProjectsList() {
    return (
        <div className="flex flex-row items-start sm:min-w-sm md:min-w-md">
            <div className="mr-4 h-full flex items-end">
                <span className="text-orange-600 text-sm [writing-mode:vertical-rl] -rotate-180">projects i&apos;ve done</span>
            </div>

            <div className="pr-2 flex-1 flex flex-col gap-4 max-h-[500px] sm:max-h-[800px] overflow-y-auto">
                {projects.map((item, key) => (
                    <React.Fragment key={key}>
                        {key > 0 && <Separator />}

                        <div key={key} className="w-full flex flex-col gap-2">
                            <div className="relative aspect-3/2">
                                <Image
                                    src={item.pathToPhoto || "/placeholder.png"}
                                    alt={item.name}
                                    className="object-cover"
                                    fill
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-lg"><strong>{item.name}</strong></p>
                                <p className="opacity-80 max-w-sm">{item.description}</p>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}