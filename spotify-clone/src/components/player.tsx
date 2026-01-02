import Image from "next/image"
import {
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  Mic2,
  ListMusic,
  MonitorSpeaker,
  Heart,
  ChevronUp,
  Maximize2,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function Player() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[100px] bg-black/95 backdrop-blur-2xl border-t border-white/10 px-6 flex items-center justify-between z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      {/* Current Track */}
      <div className="flex items-center gap-5 w-[30%] min-w-0">
        <div className="h-16 w-16 bg-zinc-800 rounded-lg overflow-hidden shrink-0 shadow-2xl group relative cursor-pointer ring-1 ring-white/10">
          <Image src="/abstract-soundscape.png" alt="Album Cover" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <ChevronUp className="h-5 w-5" />
          </div>
        </div>
        <div className="min-w-0 flex flex-col gap-0.5">
          <h4 className="text-sm font-black tracking-tight truncate hover:underline cursor-pointer">Midnight City</h4>
          <p className="text-xs text-zinc-400 font-bold truncate hover:underline hover:text-white cursor-pointer transition-colors">
            M83 • Hurry Up, We're Dreaming
          </p>
        </div>
        <div className="flex items-center gap-2 ml-2">
          <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-primary transition-colors h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white transition-colors h-8 w-8">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-3 max-w-[40%] w-full">
        <div className="flex items-center gap-8">
          <Shuffle className="h-4 w-4 text-zinc-500 hover:text-primary cursor-pointer transition-colors" />
          <SkipBack className="h-6 w-6 text-zinc-200 hover:text-white cursor-pointer transition-colors" />
          <Button
            size="icon"
            className="h-10 w-10 rounded-full bg-white text-black hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <Play className="h-6 w-6 fill-current" />
          </Button>
          <SkipForward className="h-6 w-6 text-zinc-200 hover:text-white cursor-pointer transition-colors" />
          <Repeat className="h-4 w-4 text-zinc-500 hover:text-primary cursor-pointer transition-colors" />
        </div>
        <div className="flex items-center gap-3 w-full max-w-lg group">
          <span className="text-[11px] font-bold text-zinc-500 w-10 text-right">1:24</span>
          <div className="relative flex-1 flex items-center h-4">
            <Slider defaultValue={[40]} max={100} step={1} className="w-full cursor-pointer" />
          </div>
          <span className="text-[11px] font-bold text-zinc-500 w-10">3:45</span>
        </div>
      </div>

      {/* Volume & Extras */}
      <div className="flex items-center justify-end gap-4 w-[30%]">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-400 hover:text-white transition-colors">
            <Mic2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-400 hover:text-white transition-colors">
            <ListMusic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-400 hover:text-white transition-colors">
            <MonitorSpeaker className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-3 w-36 group">
          <Volume2 className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors shrink-0" />
          <Slider defaultValue={[70]} max={100} step={1} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Player
