import type { Metadata } from "next"

import { Geist_Mono } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/context/theme-context"
import Layout from "@/components/layout/layout"

const geistMono = Geist_Mono({
    subsets: ["latin", "cyrillic"],
})

export const metadata: Metadata = {
    title: "hi, i am nijkor"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistMono.className} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    enableSystem
                    defaultTheme="system"
                >
                    <Layout>
                        {children}
                    </Layout>
                </ThemeProvider>
            </body>
        </html>
    )
}
