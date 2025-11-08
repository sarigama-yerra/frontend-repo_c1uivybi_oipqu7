import { Home, Bell, MessageCircle, User, Plus } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/60 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 via-fuchsia-500 to-amber-400" />
          <span className="text-white font-semibold tracking-tight">Vibe</span>
        </div>
        <div className="ml-4 hidden md:flex flex-1">
          <input
            type="text"
            placeholder="Search vibes, people, hashtags..."
            className="w-full rounded-xl bg-zinc-900 text-zinc-200 placeholder-zinc-500 border border-zinc-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 focus:border-fuchsia-500/40"
          />
        </div>
        <nav className="ml-auto flex items-center gap-3 text-zinc-300">
          <button className="p-2 rounded-lg hover:bg-zinc-900" aria-label="Home"><Home size={20} /></button>
          <button className="p-2 rounded-lg hover:bg-zinc-900" aria-label="Notifications"><Bell size={20} /></button>
          <button className="p-2 rounded-lg hover:bg-zinc-900" aria-label="Messages"><MessageCircle size={20} /></button>
          <button className="p-2 rounded-lg hover:bg-zinc-900" aria-label="Profile"><User size={20} /></button>
          <button className="ml-2 inline-flex items-center gap-2 rounded-lg bg-white text-black px-3 py-2 font-medium hover:bg-zinc-100">
            <Plus size={18} /> Post
          </button>
        </nav>
      </div>
    </header>
  );
}
