const tabs = [
  { key: 'all', label: 'All' },
  { key: 'photos', label: 'Photos' },
  { key: 'friends', label: 'Friends' },
  { key: 'trending', label: 'Trending' },
  { key: 'bookmarks', label: 'Bookmarks' },
];

export default function Filters({ active, onChange }) {
  return (
    <div className="sticky top-[64px] z-30 bg-black/60 backdrop-blur border-b border-zinc-800/60">
      <div className="mx-auto max-w-3xl px-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => onChange(t.key)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition border ${
                active === t.key
                  ? 'bg-white text-black border-white'
                  : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
