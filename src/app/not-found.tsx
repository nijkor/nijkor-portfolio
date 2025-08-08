import { CircleSlash2 } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-row items-start">
            <div className="mr-4 h-full flex items-end">
                <span className="text-orange-600 text-sm [writing-mode:vertical-rl] -rotate-180">nothing found</span>
            </div>

            <div className="relative flex flex-col gap-10">
                <div className="flex flex-row gap-5 items-center">
                    <div className="flex flex-col gap-1">
                        <p><strong>whoops!...</strong></p>
                        <p className="opacity-70 text-sm">feels like is nothing here</p>
                    </div>
                </div>

                <CircleSlash2 size={20} className="opacity-70" />
            </div>
        </div>
    )
}