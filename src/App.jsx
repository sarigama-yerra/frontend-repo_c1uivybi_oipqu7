import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filters from './components/Filters';
import Feed from './components/Feed';

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />

        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-start-2 lg:col-span-1">
            <Filters active={filter} onChange={setFilter} />
            <div className="mt-2" />
            <Feed filter={filter} />
          </div>
          <div className="hidden lg:block lg:col-start-3" aria-hidden>
            {/* Right sidebar intentionally omitted to keep the layout focused */}
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-zinc-900/80 py-8 text-center text-zinc-500">
        Built for vibes • Dark theme • Filters: All, Photos, Friends, Trending
      </footer>
    </div>
  );
}

export default App;
