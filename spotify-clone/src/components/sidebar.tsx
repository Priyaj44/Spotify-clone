import { Home, Search, Library, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const playlists = [
  "Discover Weekly",
  "Liked Songs",
  "Daily Mix 1",
  "Release Radar",
  "Top 50 - Global",
  "Chill Hits",
  "Throwback Party",
  "Late Night Jazz",
]

export function Sidebar() {
  return (
    <div className="flex flex-col h-full bg-black w-60 p-2 gap-2">
      <div className="bg-card rounded-lg p-4 space-y-4">
        <nav className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-4 text-muted-foreground hover:text-foreground">
            <Home className="h-6 w-6" />
            <span className="font-bold">Home</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-4 text-muted-foreground hover:text-foreground">
            <Search className="h-6 w-6" />
            <span className="font-bold">Search</span>
          </Button>
        </nav>
      </div>

      <div className="flex-1 bg-card rounded-lg flex flex-col min-h-0">
        <div className="p-4 flex items-center justify-between text-muted-foreground">
          <Button variant="ghost" className="gap-2 p-0 hover:bg-transparent hover:text-foreground">
            <Library className="h-6 w-6" />
            <span className="font-bold">Your Library</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-foreground">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex px-4 py-2 gap-2">
          <Button variant="secondary" size="sm" className="rounded-full text-xs h-7">
            Playlists
          </Button>
          <Button variant="secondary" size="sm" className="rounded-full text-xs h-7">
            Artists
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-2">
          {playlists.map((playlist) => (
            <Button
              key={playlist}
              variant="ghost"
              className="w-full justify-start text-sm font-normal text-muted-foreground hover:text-foreground hover:bg-accent/50 py-2 h-auto"
            >
              {playlist}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
