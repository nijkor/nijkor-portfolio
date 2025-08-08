'use client'

import { usePathname } from "next/navigation"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { ArrowUpRight, Home } from "lucide-react"

import ThemeSwitcher from "../theme-switcher"

export default function Navigation() {
    const pathname = usePathname()

    return (
        <>
        <Separator />
        
        <div className="flex flex-row justify-center items-center gap-2">
            {pathname !== "/" && (
                <Button
                    variant="outline"
                    asChild
                >
                    <Link href="/">
                        <Home />
                        go home
                    </Link>
                </Button>
            )}
            <Button
                variant="outline"
                asChild
            >
                <Link href="https://t.me/nwqqqsl" target="_blank">
                    dm me <ArrowUpRight className="size-3" />
                </Link>
            </Button>
            <ThemeSwitcher />
        </div>
        </>
    )
}