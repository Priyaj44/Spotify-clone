import Image from "next/image"
import { Play, Heart, MoreHorizontal, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ArtistView() {
  return (
    <div className="flex-1 overflow-y-auto bg-zinc-950">
      <div className="relative h-[45vh] w-full">
        <Image src="/abstract-soundscape.png" alt="Artist Header" fill className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute bottom-10 left-10 space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-500 fill-current" />
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Verified Artist</span>
          </div>
          <h1 className="text-8xl font-black tracking-tighter italic uppercase text-white">Ethereal</h1>
          <p className="text-zinc-400 font-bold text-lg">24,532,109 monthly listeners</p>
        </div>
      </div>

      <div className="p-10 space-y-12 pb-32">
        <div className="flex items-center gap-8">
          <Button className="h-16 w-16 rounded-full bg-primary text-black hover:scale-105 transition-transform shadow-2xl">
            <Play className="h-8 w-8 fill-current" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 border-zinc-700 hover:border-white transition-colors bg-transparent font-bold"
          >
            Following
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white transition-colors">
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </div>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-6">Popular</h2>
          <div className="space-y-1">
            {[
              { title: "Midnight Memories", plays: "42,102,394", duration: "3:45" },
              { title: "Ethereal Dreams", plays: "38,502,112", duration: "4:12" },
              { title: "Neon Nights", plays: "31,009,842", duration: "3:28" },
              { title: "Lost in Sound", plays: "28,492,001", duration: "4:01" },
              { title: "Digital Silence", plays: "22,102,394", duration: "3:56" },
            ].map((track, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 px-4 py-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              >
                <span className="w-4 text-zinc-500 font-medium text-center group-hover:hidden">{i + 1}</span>
                <Play className="h-4 w-4 text-white fill-current hidden group-hover:block" />
                <div className="h-10 w-10 relative shrink-0">
                  <Image src="/abstract-album-cover.png" alt="Track Art" fill className="rounded object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white group-hover:underline">{track.title}</h4>
                </div>
                <span className="text-zinc-500 text-sm font-medium hidden md:block">{track.plays}</span>
                <div className="flex items-center gap-4">
                  <Heart className="h-4 w-4 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary" />
                  <span className="text-zinc-500 text-sm font-medium w-10 text-right">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black tracking-tight">Discography</h2>
            <Button variant="link" className="text-zinc-400 hover:text-white font-bold">
              Show all
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-zinc-900/40 hover:bg-zinc-900 transition-all p-4 rounded-xl group cursor-pointer border border-white/5"
              >
                <div className="relative aspect-square mb-4 shadow-2xl overflow-hidden rounded-lg">
                  <Image
                    src="/abstract-album-cover.png"
                    alt="Album Cover"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      size="icon"
                      className="rounded-full bg-primary h-12 w-12 shadow-2xl scale-75 group-hover:scale-100 transition-transform"
                    >
                      <Play className="h-6 w-6 fill-current text-black" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-bold truncate text-white">Album Title {i + 1}</h3>
                <p className="text-sm text-zinc-500 font-bold mt-1">202{4 - i} • Album</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
