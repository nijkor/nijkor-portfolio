import type { Metadata } from "next"

import ProjectsList from "@/components/projects/projects-list"

export const metadata: Metadata = {
    title: "projects i've done"
}

export default function WorksPage() {
    return (
        <ProjectsList />
    )
}