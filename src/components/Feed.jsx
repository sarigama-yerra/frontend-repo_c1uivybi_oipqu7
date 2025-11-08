import { Image as ImageIcon, MessageCircle, Heart, Repeat, Share2, MoreHorizontal, CheckCircle2 } from 'lucide-react';
import { useMemo } from 'react';

function Avatar({ name }) {
  const initials = useMemo(() => name.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase(), [name]);
  return (
    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-500 via-fuchsia-500 to-amber-400 grid place-items-center text-black font-semibold">
      {initials}
    </div>
  );
}

function PostCard({ post }) {
  return (
    <article className="border-b border-zinc-900 px-4 py-5">
      <div className="flex gap-3">
        <Avatar name={post.author} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="text-white font-medium truncate">{post.author}</span>
            {post.verified && <CheckCircle2 size={16} className="text-sky-400" />}
            <span>·</span>
            <span>{post.time}</span>
          </div>
          <div className="mt-1 text-zinc-200 whitespace-pre-wrap">{post.content}</div>
          {post.image && (
            <div className="mt-3 overflow-hidden rounded-2xl border border-zinc-800">
              <img src={post.image} alt="post media" className="w-full h-auto object-cover" />
            </div>
          )}
          <div className="mt-3 flex items-center justify-between text-zinc-500">
            <button className="inline-flex items-center gap-2 hover:text-sky-400">
              <MessageCircle size={18} />
              <span className="text-sm">{post.replies}</span>
            </button>
            <button className="inline-flex items-center gap-2 hover:text-green-400">
              <Repeat size={18} />
              <span className="text-sm">{post.reposts}</span>
            </button>
            <button className="inline-flex items-center gap-2 hover:text-rose-400">
              <Heart size={18} />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="inline-flex items-center gap-2 hover:text-zinc-300">
              <Share2 size={18} />
            </button>
            <button className="inline-flex items-center gap-2 hover:text-zinc-300">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

const SAMPLE_POSTS = [
  {
    id: 1,
    type: 'all',
    author: 'Ava Martinez',
    verified: true,
    time: '2m',
    content: "Launching our new dark theme vibes today. Crisp, contrasty, and easy on the eyes.",
    image: null,
    replies: 14,
    reposts: 8,
    likes: 132,
  },
  {
    id: 2,
    type: 'photos',
    author: 'Leo Kim',
    verified: false,
    time: '12m',
    content: 'Sunset walk hits different in the city.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop',
    replies: 23,
    reposts: 11,
    likes: 420,
  },
  {
    id: 3,
    type: 'friends',
    author: 'You & Friends',
    verified: false,
    time: '1h',
    content: 'Group plans for the weekend? Drop ideas below! 🗓️',
    image: null,
    replies: 9,
    reposts: 2,
    likes: 67,
  },
  {
    id: 4,
    type: 'trending',
    author: 'Tech Daily',
    verified: true,
    time: '3h',
    content: 'Breaking: New camera features rolling out. Computational photography just leveled up.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1974&auto=format&fit=crop',
    replies: 102,
    reposts: 54,
    likes: 1200,
  },
];

export default function Feed({ filter }) {
  const items = useMemo(() => {
    if (filter === 'all') return SAMPLE_POSTS;
    if (filter === 'photos') return SAMPLE_POSTS.filter(p => p.image);
    if (filter === 'friends') return SAMPLE_POSTS.filter(p => p.type === 'friends' || p.author === 'You & Friends');
    if (filter === 'trending') return SAMPLE_POSTS.filter(p => p.type === 'trending');
    if (filter === 'bookmarks') return [];
    return SAMPLE_POSTS;
  }, [filter]);

  return (
    <section className="mx-auto max-w-3xl bg-black text-white">
      <div className="border-x border-zinc-900/80 rounded-none">
        <div className="px-4 py-4 border-b border-zinc-900/80 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 grid place-items-center text-zinc-500">
            <ImageIcon size={18} />
          </div>
          <input
            className="flex-1 bg-transparent text-zinc-200 placeholder-zinc-600 focus:outline-none"
            placeholder="Share something with your world..."
          />
          <button className="rounded-lg bg-white text-black px-3 py-2 text-sm font-medium hover:bg-zinc-100">Post</button>
        </div>
        {items.length === 0 ? (
          <div className="px-4 py-12 text-center text-zinc-500">No posts yet in this filter.</div>
        ) : (
          items.map((p) => <PostCard key={p.id} post={p} />)
        )}
      </div>
    </section>
  );
}
