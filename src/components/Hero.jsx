import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full bg-black">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center py-12 md:py-16">
        <div className="relative aspect-[16/10] md:aspect-square rounded-2xl overflow-hidden border border-zinc-800/60">
          <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
        <div className="text-zinc-300">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Your Social Home, Reimagined</h1>
          <p className="mt-3 text-zinc-400">A vibrant space where conversations flow and your community comes alive. Share thoughts, photos, and moments in a sleek, modern feed crafted for focus.</p>
          <div className="mt-6 flex items-center gap-3">
            <button className="rounded-lg bg-white text-black px-4 py-2 font-medium hover:bg-zinc-100">Create Post</button>
            <button className="rounded-lg border border-zinc-800 px-4 py-2 text-zinc-200 hover:bg-zinc-900">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}
