import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
    return (
        <aside className='hidden w-72 bg-zinc-950 p-6 lg:block'>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full' />
                <div className='w-3 h-3 bg-yellow-500 rounded-full' />
                <div className='w-3 h-3 bg-green-500 rounded-full' />
            </div>
            <nav className="space-y-5 mt-8">
                <a href="#" className="hover:scale-105 transition-transform flex items-center gap-3 text-zinc-200 text-sm font-semibold">
                    <HomeIcon />
                    Home
                </a>
                <a href="#" className="hover:scale-105 transition-transform flex items-center gap-3 text-zinc-200 text-sm font-semibold">
                    <Search />
                    Search
                </a>
                <a href="#" className="hover:scale-105 transition-transform flex items-center gap-3 text-zinc-200 text-sm font-semibold">
                    <Library />
                    Your Library
                </a>
            </nav>
            <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3' >
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Músicas de aniversário</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Músicas para viajar</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Clássicos do Rock</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Galinha Pintadinha</a>
            </nav>
        </aside>
    )
}