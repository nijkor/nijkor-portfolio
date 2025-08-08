import Avatar from "./avatar";

export default function Introduce() {
    return (
        <div className="flex flex-row items-start">
            <div className="mr-4 h-full flex items-end">
                <span className="text-orange-600 text-sm [writing-mode:vertical-rl] -rotate-180">let&apos;s get to know each other</span>
            </div>

            <div className="relative flex flex-col gap-10">
                <div className="flex flex-row gap-5 items-center">
                    <Avatar />

                    <div className="flex flex-col gap-1">
                        <p>my name is <strong>nijkor</strong></p>
                        <p className="opacity-70 text-sm">i&apos;m frontend developer</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <strong>my tech stack</strong>

                    <ul className="list-disc list-inside">
                        <li>javascript</li>
                        <li>react</li>
                        <li>php (at the beginner level)</li>
                        <li>python (also)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}