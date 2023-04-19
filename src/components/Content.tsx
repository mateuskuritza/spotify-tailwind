import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Content() {
    return (
        <section className='flex-1 p-6'>
            <div className="flex items-center gap-4">
                <button className="p-1 rounded-full bg-black/40">
                    <ChevronLeft />
                </button>
                <button className="p-1 rounded-full bg-black/40">
                    <ChevronRight />
                </button>
            </div>
            <h2 className="font-bold text-2xl mt-9">Good Afternoon</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <a href="#" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image alt="Galinha pintadinha" width={104} height={104} src="/galinha_pintadinha.webp" />
                    <strong>Galinha Pintadinha</strong>
                    <button className="group-hover:visible invisible text-black/80 w-12 h-12 flex items-center justify-center p-2 pl-3 rounded-full bg-green-400 ml-auto mr-8">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image alt="Galinha pintadinha" width={104} height={104} src="/galinha_pintadinha.webp" />
                    <strong>Galinha Pintadinha</strong>
                    <button className="group-hover:visible invisible text-black/80 w-12 h-12 flex items-center justify-center p-2 pl-3 rounded-full bg-green-400 text-black ml-auto mr-8">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image alt="Galinha pintadinha" width={104} height={104} src="/galinha_pintadinha.webp" />
                    <strong>Galinha Pintadinha</strong>
                    <button className="group-hover:visible invisible text-black/80 w-12 h-12 flex items-center justify-center p-2 pl-3 rounded-full bg-green-400 text-black ml-auto mr-8">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image alt="Galinha pintadinha" width={104} height={104} src="/galinha_pintadinha.webp" />
                    <strong>Galinha Pintadinha</strong>
                    <button className="group-hover:visible invisible text-black/80 w-12 h-12 flex items-center justify-center p-2 pl-3 rounded-full bg-green-400 text-black ml-auto mr-8">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image alt="Galinha pintadinha" width={104} height={104} src="/galinha_pintadinha.webp" />
                    <strong>Galinha Pintadinha</strong>
                    <button className="group-hover:visible invisible text-black/80 w-12 h-12 flex items-center justify-center p-2 pl-3 rounded-full bg-green-400 text-black ml-auto mr-8">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image alt="Galinha pintadinha" width={104} height={104} src="/galinha_pintadinha.webp" />
                    <strong>Galinha Pintadinha</strong>
                    <button className="group-hover:visible invisible text-black/80 w-12 h-12 flex items-center justify-center p-2 pl-3 rounded-full bg-green-400 text-black ml-auto mr-8">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image alt="Galinha pintadinha" width={104} height={104} src="/galinha_pintadinha.webp" />
                    <strong>Galinha Pintadinha</strong>
                    <button className="group-hover:visible invisible text-black/80 w-12 h-12 flex items-center justify-center p-2 pl-3 rounded-full bg-green-400 text-black ml-auto mr-8">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image alt="Galinha pintadinha" width={104} height={104} src="/galinha_pintadinha.webp" />
                    <strong>Galinha Pintadinha</strong>
                    <button className="group-hover:visible invisible text-black/80 w-12 h-12 flex items-center justify-center p-2 pl-3 rounded-full bg-green-400 text-black ml-auto mr-8">
                        <Play />
                    </button>
                </a>
            </div>

            <h2 className="font-bold text-2xl mt-9">Made for You</h2>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4">
                <a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded hover:bg-white/10">
                    <Image alt="Galinha pintadinha" className='w-full' width={120} height={120} src="/galinha_pintadinha.webp" />
                    <strong className="font-semibold">Galinha Pintadinha</strong>
                    <span className="text-sm text-zinc-400">Participação da galinha, do galo e do galinho</span>
                </a>
                <a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded hover:bg-white/10">
                    <Image alt="Galinha pintadinha" className='w-full' width={120} height={120} src="/galinha_pintadinha.webp" />
                    <strong className="font-semibold">Galinha Pintadinha</strong>
                    <span className="text-sm text-zinc-400">Participação da galinha, do galo e do galinho</span>
                </a>
                <a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded hover:bg-white/10">
                    <Image alt="Galinha pintadinha" className='w-full' width={120} height={120} src="/galinha_pintadinha.webp" />
                    <strong className="font-semibold">Galinha Pintadinha</strong>
                    <span className="text-sm text-zinc-400">Participação da galinha, do galo e do galinho</span>
                </a>
                <a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded hover:bg-white/10">
                    <Image alt="Galinha pintadinha" className='w-full' width={120} height={120} src="/galinha_pintadinha.webp" />
                    <strong className="font-semibold">Galinha Pintadinha</strong>
                    <span className="text-sm text-zinc-400">Participação da galinha, do galo e do galinho</span>
                </a>
                <a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded hover:bg-white/10">
                    <Image alt="Galinha pintadinha" className='w-full' width={120} height={120} src="/galinha_pintadinha.webp" />
                    <strong className="font-semibold">Galinha Pintadinha</strong>
                    <span className="text-sm text-zinc-400">Participação da galinha, do galo e do galinho</span>
                </a>
                <a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded hover:bg-white/10">
                    <Image alt="Galinha pintadinha" className='w-full' width={120} height={120} src="/galinha_pintadinha.webp" />
                    <strong className="font-semibold">Galinha Pintadinha</strong>
                    <span className="text-sm text-zinc-400">Participação da galinha, do galo e do galinho</span>
                </a>
                <a href="#" className="flex flex-col gap-2 bg-white/5 p-3 rounded hover:bg-white/10">
                    <Image alt="Galinha pintadinha" className='w-full' width={120} height={120} src="/galinha_pintadinha.webp" />
                    <strong className="font-semibold">Galinha Pintadinha</strong>
                    <span className="text-sm text-zinc-400">Participação da galinha, do galo e do galinho</span>
                </a>
            </div>
        </section>
    )
}