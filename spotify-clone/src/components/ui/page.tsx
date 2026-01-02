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
  ChevronLeft,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function Player() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-black border-t border-white/10 px-4 flex items-center justify-between z-50">
      {/* Current Track */}
      <div className="flex items-center gap-4 w-[30%] min-w-0">
        <div className="h-14 w-14 bg-accent rounded-md overflow-hidden shrink-0 shadow-lg group relative cursor-pointer">
          <Image
            src="/abstract-soundscape.png"
            alt="Album Cover"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <ChevronLeft className="h-4 w-4 rotate-90" />
          </div>
        </div>
        <div className="min-w-0 flex flex-col">
          <h4 className="text-sm font-medium truncate hover:underline cursor-pointer">Midnight City</h4>
          <p className="text-xs text-muted-foreground truncate hover:underline cursor-pointer">M83</p>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 max-w-[40%] w-full">
        <div className="flex items-center gap-6">
          <Shuffle className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" />
          <SkipBack className="h-5 w-5 fill-foreground cursor-pointer" />
          <Button size="icon" className="h-8 w-8 rounded-full bg-foreground text-background hover:scale-105 transition">
            <Play className="h-5 w-5 fill-current" />
          </Button>
          <SkipForward className="h-5 w-5 fill-foreground cursor-pointer" />
          <Repeat className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-[10px] text-muted-foreground">1:24</span>
          <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
          <span className="text-[10px] text-muted-foreground">3:45</span>
        </div>
      </div>

      {/* Volume & Extras */}
      <div className="flex items-center justify-end gap-3 w-[30%]">
        <Mic2 className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" />
        <ListMusic className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" />
        <MonitorSpeaker className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" />
        <div className="flex items-center gap-2 w-32">
          <Volume2 className="h-4 w-4 text-muted-foreground shrink-0" />
          <Slider defaultValue={[70]} max={100} step={1} />
        </div>
      </div>
    </div>
  )
}
