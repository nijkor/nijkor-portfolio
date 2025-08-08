import Image from "next/image"

export default function Avatar() {
    return (
        <div className="relative size-15">
            <Image
                src="/logotype.jpg"
                alt="nijkor's avatar"
                fill={true}
                className="rounded-2xl border dark:border-none border-neutral-200"
            />
        </div>
    )
}