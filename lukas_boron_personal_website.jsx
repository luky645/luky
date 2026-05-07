export default function LukasBoronWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Lukáš Boron
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl">
          16-ročný futbalista a študent športovej strednej školy v Košiciach.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            O mne
          </button>
          <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
            Kontakt
          </button>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop"
            alt="Football"
            className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Kto som?</h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-4">
            Volám sa Lukáš Boron, mám 16 rokov a mojou najväčšou vášňou je futbal.
            Každý deň na sebe pracujem, aby som sa zlepšoval ako hráč aj ako človek.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Navštevujem športovú strednú školu v Košiciach, kde spájam školu so športom.
            Mojím cieľom je pokračovať vo futbalovej kariére a dosiahnuť veľké úspechy.
          </p>
        </div>
      </section>

      {/* Skills / Interests */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Moje záujmy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition">
              <div className="text-5xl mb-4">⚽</div>
              <h3 className="text-2xl font-semibold mb-3">Futbal</h3>
              <p className="text-zinc-300">
                Tréningy, zápasy a neustále zlepšovanie mojich schopností.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition">
              <div className="text-5xl mb-4">🏫</div>
              <h3 className="text-2xl font-semibold mb-3">Škola</h3>
              <p className="text-zinc-300">
                Študujem na športovej strednej škole v Košiciach.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-semibold mb-3">Motivácia</h3>
              <p className="text-zinc-300">
                Chcem dosiahnuť úspech a nikdy sa nevzdávať.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Kontakt</h2>
        <p className="text-zinc-300 text-lg mb-8">
          Ak ma chceš kontaktovať alebo sledovať moju cestu, ozvi sa mi.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Instagram
          </button>

          <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
            TikTok
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-700 py-6 text-center text-zinc-400 text-sm">
        © 2026 Lukáš Boron — Personal Website
      </footer>
    </div>
  );
}
