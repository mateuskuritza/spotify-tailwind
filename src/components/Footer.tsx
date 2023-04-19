import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className='bg-zinc-800 border-zinc-700 px-6 py-4 flex items-center justify-between flex-col gap-y-4 md:flex-row'>
            <div className="flex items-center gap-2">
                <Image className="rounded" alt="Galinha pintadinha" width={48} height={48} src="/galinha_pintadinha.webp" />
                <div className="flex flex-col">
                    <span>A galinha ficou doente</span>
                    <span className="text-xs text-zinc-400">E o galo nem ligou</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                    <Shuffle size={20} className="text-zinc-400" />
                    <SkipBack size={20} className="text-zinc-400" />
                    <button className="pl-1 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
                        <Play />
                    </button>
                    <SkipForward size={20} className="text-zinc-400" />
                    <Repeat size={20} className="text-zinc-400" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">00:21</span>
                    <div className="h-1 rounded-full w-64 bg-zinc-600">
                        <div className="h-1 rounded-full w-16 bg-zinc-200"></div>
                    </div>
                    <span className="text-xs text-zinc-400">01:26</span>
                </div>

            </div>
            <div className="flex items-center gap-3">
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className="flex items-center gap-2">
                    <Volume size={20} />
                    <div className="h-1 rounded-full w-20 bg-zinc-600">
                        <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer>
    )
}