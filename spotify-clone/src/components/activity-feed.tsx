import { Users, X, Music2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ActivityFeed() {
  return (
    <div className="w-72 bg-black border-l border-white/5 flex flex-col hidden xl:flex">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-zinc-400 font-bold text-sm tracking-tight flex items-center gap-2">
          <Users className="h-4 w-4" />
          Friend Activity
        </h2>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-white transition-colors">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {[
          { name: "Alex Rivera", song: "Midnight City", artist: "M83", time: "2m", active: true },
          { name: "Jordan Smith", song: "Ethereal Dreams", artist: "Ethereal", time: "15m", active: false },
          { name: "Sam Wilson", song: "Neon Nights", artist: "Synthwave", time: "1h", active: false },
          { name: "Chris Evans", song: "Lost in Sound", artist: "Producer", time: "3h", active: false },
        ].map((friend, i) => (
          <div key={i} className="flex gap-3 group cursor-pointer">
            <div className="relative shrink-0">
              <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-xs ring-1 ring-white/10 group-hover:ring-primary/50 transition-all">
                {friend.name[0]}
              </div>
              {friend.active && (
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-primary rounded-full border-2 border-black" />
              )}
            </div>
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-zinc-200 group-hover:text-primary transition-colors truncate">
                  {friend.name}
                </span>
                <span className="text-[10px] text-zinc-500 font-bold">{friend.time}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-bold truncate group-hover:text-zinc-200 transition-colors">
                  <Music2 className="h-3 w-3 shrink-0" />
                  <span className="truncate">{friend.song}</span>
                </div>
                <div className="text-[10px] text-zinc-500 font-bold ml-4.5 truncate">{friend.artist}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-white/5 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">Find Friends</h3>
          <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">
            Connect with friends to see what they're listening to in real-time.
          </p>
        </div>
        <Button className="w-full rounded-full bg-white text-black font-black text-xs h-10 hover:scale-105 transition-transform uppercase tracking-tighter">
          Connect Facebook
        </Button>
      </div>
    </div>
  )
}
