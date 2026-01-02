import Image from "next/image"
import { Sidebar } from "../components/sidebar"
import { Player } from "../components/player"
import { ArtistView } from "@/components/artist-view"
import { ActivityFeed } from "@/components/activity-feed"
import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight, User, Play, Users } from "lucide-react"

export default function Home() {
  const isArtistView = false // This would be controlled by routing or state

  return (
    <div className="h-screen flex flex-col bg-black text-foreground overflow-hidden font-sans">
      <div className="flex flex-1 min-h-0">
        <Sidebar />

        {isArtistView ? (
          <ArtistView />
        ) : (
          <main className="flex-1 relative overflow-y-auto bg-linear-to-b from-zinc-900 to-black scroll-smooth">
            <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full bg-black/60 hover:bg-black/80 h-8 w-8">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full bg-black/60 hover:bg-black/80 h-8 w-8">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="font-bold text-sm text-zinc-400 hover:text-white transition-colors">
                  Premium
                </Button>
                <Button variant="ghost" className="font-bold text-sm text-zinc-400 hover:text-white transition-colors">
                  Support
                </Button>
                <div className="h-8 w-[1px] bg-white/10 mx-2" />
                <Button
                  size="icon"
                  className="rounded-full bg-white text-black hover:scale-105 transition-transform h-8 w-8"
                >
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </header>

            <div className="px-8 py-6 space-y-12 pb-32">
              <section className="relative h-[400px] w-full rounded-3xl overflow-hidden group">
                <Image
                  src="/abstract-soundscape.png"
                  alt="Featured Artist"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 space-y-4 max-w-2xl">
                  <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest">
                    <div className="h-1 w-8 bg-primary rounded-full" />
                    Featured Artist
                  </div>
                  <h1 className="text-7xl font-black tracking-tighter leading-none italic uppercase italic text-balance">
                    The Sound of <span className="text-primary italic">Tomorrow</span>
                  </h1>
                  <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
                    Experience the latest global hits and curated collections from the world's most innovative
                    producers.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <Button className="rounded-full px-8 py-6 bg-primary text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(30,215,96,0.3)]">
                      Listen Now
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full px-8 py-6 border-white/20 hover:bg-white/10 text-white font-bold text-lg transition-colors bg-transparent"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black tracking-tight mb-6">Your Daily Mixes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: "Liked Songs", img: "/music-playlist.png", color: "from-purple-600/40" },
                    { name: "Daily Mix 1", img: "/abstract-album-cover.png", color: "from-blue-600/40" },
                    { name: "Discover Weekly", img: "/abstract-soundscape.png", color: "from-teal-600/40" },
                    { name: "Release Radar", img: "/music-playlist.png", color: "from-rose-600/40" },
                    { name: "Rock Classics", img: "/abstract-album-cover.png", color: "from-orange-600/40" },
                    { name: "Chill Vibes", img: "/abstract-soundscape.png", color: "from-indigo-600/40" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 transition-all rounded-xl group cursor-pointer overflow-hidden shadow-lg relative"
                    >
                      <div className="h-24 w-24 relative shrink-0">
                        <Image src={item.img || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div
                        className={`absolute inset-0 bg-linear-to-r ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                      <span className="font-black text-lg relative z-10">{item.name}</span>
                      <Button
                        size="icon"
                        className="ml-auto mr-6 rounded-full bg-primary h-14 w-14 shadow-2xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10"
                      >
                        <Play className="h-7 w-7 fill-current text-black" />
                      </Button>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between mb-8">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-black tracking-tighter italic uppercase">Trending Now</h2>
                    <p className="text-zinc-500 font-medium">What the world is listening to right now.</p>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-full border-zinc-800 hover:bg-zinc-800 transition-colors text-sm font-bold bg-transparent"
                  >
                    View All Trends
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="group cursor-pointer space-y-4">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src={`/abstract-${i % 2 === 0 ? "album-cover" : "soundscape"}.png`}
                          alt="Trending"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button
                            size="icon"
                            className="rounded-full bg-primary h-16 w-16 shadow-2xl scale-75 group-hover:scale-100 transition-transform"
                          >
                            <Play className="h-8 w-8 fill-current text-black" />
                          </Button>
                        </div>
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10">
                          {120 + i * 45}K Plays
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-black text-xl leading-tight group-hover:text-primary transition-colors">
                          Ethereal Dreams
                        </h3>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                          <Users className="h-3 w-3" />
                          <span>Various Artists</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
        )}

        <ActivityFeed />
      </div>

      <Player />
    </div>
  )
}
