import { Hash, Users, Globe2 } from 'lucide-react';

const trends = [
  { title: 'DarkModeDesign', count: '32.4K' },
  { title: 'CitySunsets', count: '18.2K' },
  { title: 'AIArt', count: '12.9K' },
  { title: 'MobilePhotography', count: '9.1K' },
];

const people = [
  { name: 'Sasha Nguyen', handle: '@sasha', mutual: 8 },
  { name: 'Marco Ruiz', handle: '@marco', mutual: 3 },
  { name: 'Priya Patel', handle: '@priya', mutual: 12 },
];

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block w-[340px] text-zinc-200">
      <div className="sticky top-20 space-y-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 backdrop-blur p-4">
          <div className="flex items-center gap-2 text-zinc-400 mb-3"><Globe2 size={18} /> Trending</div>
          <div className="space-y-3">
            {trends.map((t) => (
              <div key={t.title} className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-300"><Hash size={16} /> {t.title}</div>
                <span className="text-zinc-500 text-sm">{t.count}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 backdrop-blur p-4">
          <div className="flex items-center gap-2 text-zinc-400 mb-3"><Users size={18} /> Who to follow</div>
          <div className="space-y-3">
            {people.map((p) => (
              <div key={p.handle} className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{p.name}</div>
                  <div className="text-zinc-500 text-sm">{p.handle} · {p.mutual} mutual</div>
                </div>
                <button className="rounded-full border border-zinc-700 px-3 py-1 text-sm hover:bg-zinc-900">Follow</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
