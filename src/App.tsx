import { useState } from 'react';
import { Plane } from 'lucide-react';
import { thailandData } from './data/thaiData';
import { Accordion } from './components/Accordion';
import { InfoList } from './components/InfoList';

function App() {
  const [openSectionId, setOpenSectionId] = useState<string | null>('bangkok');

  const handleToggle = (id: string) => {
    setOpenSectionId(prev => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-sand font-main">
      <header className="py-24 text-center bg-royal relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="p-5 rounded-full bg-white/5 backdrop-blur-sm border border-gold/30 shadow-gold">
              <Plane className="w-12 h-12 text-gold animate-[bounce_2s_infinite]" />
            </div>
          </div>
          <h1 className="text-5xl md:text-8xl mb-6 text-white font-serif tracking-tight drop-shadow-sm">
            Thailand <span className="text-gold italic relative">
              2026
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70"></span>
            </span>
          </h1>
          <p className="text-gold-light text-lg md:text-2xl tracking-[0.3em] uppercase font-light">The Ultimate Journey Guide</p>
        </div>
      </header>

      <main className="container mx-auto px-4 -mt-12 relative z-20 pb-20">
        <div className="space-y-6">
          {thailandData.map((city) => (
            <Accordion
              key={city.id}
              title={city.name}
              image={city.image}
              isOpen={openSectionId === city.id}
              onToggle={() => handleToggle(city.id)}
            >
              <InfoList items={city.items} />
            </Accordion>
          ))}
        </div>
      </main>

      <footer className="bg-ocean text-slate-400 py-12 text-center border-t border-slate-800">
        <p className="font-serif italic text-lg mb-2 text-gold-light">"To travel is to live"</p>
        <p className="text-sm opacity-60">Created for your Thailand adventure</p>
      </footer>
    </div>
  );
}

export default App;
