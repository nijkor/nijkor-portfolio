import Navigation from "./navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        
        <main className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-[85rem] px-4">
                <div className="m-auto flex flex-col gap-5">
                    {children}
                    <Navigation />
                </div>
            </div>
        </main>
    )
}