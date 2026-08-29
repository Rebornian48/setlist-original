import { useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL

const dateFormat = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
const formatId = (d) => new Intl.DateTimeFormat('id-ID', dateFormat).format(d)
const daysAgo = (d) => {
  const ms = 24 * 60 * 60 * 1000
  return `${Math.round(Math.abs((new Date() - d) / ms)) - 1} hari yang lalu`
}

const timeline = [
  {
    n: 1,
    title: 'JKT48 10th Anniversary Kick Off Conference',
    subtitle: 'Pengumuman Pertama',
    embed: 'https://www.youtube.com/embed/l7lV9kaM2JU?si=pkf9EoLuaOR4L4Kv',
    date: new Date(2021, 11, 18),
  },
  {
    n: 2,
    title: 'JKT48 Theater 10th Anniversary Show: Memory and Party',
    subtitle: 'Pengumuman Kedua',
    embed: 'https://www.youtube.com/embed/wMWVBa_Ujsc?si=eU7oQZRu0kiyGdKM',
    date: new Date(2022, 8, 8),
  },
  {
    n: 3,
    title: 'JKT48 Theater 12th Anniversary Event: ONE NIGHT OF J.K.T',
    subtitle: 'Pengumuman Ketiga',
    embed: 'https://www.youtube.com/embed/4xPHRkydZOM?si=PF20QSI8XczJrgV',
    date: new Date(2024, 8, 8),
  },
  {
    n: 4,
    title: 'Website Resmi JKT48',
    subtitle: 'Pengumuman Keempat',
    image: `${BASE}assets/img/sc-web-202509.png`,
    link: 'https://jkt48.com/news/detail/id/1950?lang=id',
    linkLabel: 'jkt48.com/news/detail/id/1950',
    date: new Date(2025, 8, 5),
  },
]

const songs = [
  { n: '01', title: 'Go and Fight!', embed: 'https://www.youtube.com/embed/V5t-MdoYhJM', date: new Date(2025, 4, 22) },
  { n: '02', title: 'Raja Hati', embed: 'https://www.youtube.com/embed/-yAnHwpAIMs', date: new Date(2025, 5, 25) },
  { n: '03', title: 'Percik Kecil', embed: 'https://www.youtube.com/embed/0aQbmoViyP0?si=oUga69tpuC5nM_-G', note: 'bersama Bernadya' },
  { n: '04', title: 'Ada Aku!', embed: 'https://www.youtube.com/embed/teB1pqeuHpE?si=6Gs4HUCnReYv0z8e' },
  { n: '05', title: 'Dahulu', embed: 'https://www.youtube.com/embed/RMmguIkBxi0?si=E6ibga1pLLmXnb0e', note: 'bersama Andi Rianto' },
  { n: '06', title: 'Dream', embed: 'https://www.youtube.com/embed/Qhvc4tLGE0A?si=UgDLN8xIUUgPb0lg', note: 'bersama Isyana Sarasvati' },
]

const fanmade = [
  { title: 'Kasihan Pohon Pepaya', by: '@sawadeeecat', images: ['kpp-1.jpeg', 'kpp-2.jpeg'] },
  { title: 'Langit Merah Jambu', by: '@callme__f, Reuploader: @peyeeeek', images: ['lmj-1.jpeg', 'lmj-2.jpeg'] },
  { title: 'Cinta Sepanjang Durasi', by: '@Versi_Jelek dan @KakMugi', images: ['csd-1.jpeg', 'csd-2.jpeg'] },
  { title: 'One More Chance!', by: '@garisdiagonal', images: ['omc-1.jpeg', 'omc-2.jpeg'] },
  { title: 'Spotlight Berwarna Merah', by: '@fahrozyfrz', images: ['sbm-1.jpeg', 'sbm-2.jpeg'] },
  { title: 'Ini Saatnya Menjadi Girlband', by: '@kazidyth', images: ['ismg-1.jpeg', 'ismg-2.jpeg'] },
  { title: 'Misteri Setlist Original JKT48', by: '@ClippingBale_ & @Sawadeecat', images: ['mso.jpeg'] },
  { title: 'Di Atas Udara Flowe12ful', by: '@KakMugi', images: ['dauf-1.jpeg'] },
]

function Carousel({ images }) {
  const [i, setI] = useState(0)
  const next = () => setI((p) => (p + 1) % images.length)
  const prev = () => setI((p) => (p - 1 + images.length) % images.length)
  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <img src={`${BASE}assets/img/${images[i]}`} alt="" className="w-full" />
      {images.length > 1 && (
        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
          <button onClick={prev} className="btn-nav">❮</button>
          <button onClick={next} className="btn-nav">❯</button>
        </div>
      )}
    </div>
  )
}

function VideoCard({ src, title }) {
  return (
    <div className="iframe-wrap">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default function App() {
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://platform.twitter.com/widgets.js'
    s.async = true
    document.body.appendChild(s)
    return () => { document.body.removeChild(s) }
  }, [])

  return (
    <div className="antialiased">
      <style>{`.btn-nav{background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.2);color:#fff;width:2rem;height:2rem;border-radius:9999px;display:grid;place-items:center;transition:background .2s}.btn-nav:hover{background:#e11d48}`}</style>

      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink-950/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="dot" />
            <span className="font-display font-bold text-white tracking-tight">Pertaruhan Cinta</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="nav-link" href="#timeline">Timeline</a>
            <a className="nav-link" href="#lagu">Lagu</a>
            <a className="nav-link" href="#teaser">Teaser</a>
            <a className="nav-link" href="#fanmade">Fanmade</a>
            <a className="nav-link" href="#kredit">Kredit</a>
          </nav>
          <a href="#timeline" className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-600/20 border border-brand-500/40 text-brand-200 hover:bg-brand-600/30 transition">
            <i className="fa-solid fa-play" /> Mulai
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-brand-600/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="flex justify-center mb-8 animate-float">
            <img className="w-24 sm:w-32 drop-shadow-[0_0_25px_rgba(244,63,94,.35)]" src={`${BASE}assets/img/white-newera.png`} alt="JKT48 New Era" />
          </div>
          <div className="flex justify-center mb-5">
            <span className="chip"><span className="dot" /> Setlist Original JKT48</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-white">Pertaruhan </span>
            <span className="gradient-text">Cinta</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
            Arsip perjalanan setlist original pertama JKT48 - timeline pengumuman, lagu, teaser, hingga karya para fans.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a href="#timeline" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-ink-950 font-semibold text-sm hover:bg-brand-100 transition">
              <i className="fa-solid fa-arrow-down" /> Jelajahi Timeline
            </a>
            <a href="#lagu" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition">
              <i className="fa-solid fa-music" /> Dengar Lagu
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="timeline" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="chip mb-4"><i className="fa-regular fa-newspaper" /> Timeline</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Perjalanan Pengumuman</h2>
            <p className="mt-3 text-gray-400">Empat momen penting menuju Setlist Original JKT48 "Pertaruhan Cinta".</p>
          </div>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {timeline.map((t) => (
              <article key={t.n} className="card-glass rounded-2xl p-5 transition hover:-translate-y-1">
                {t.embed ? (
                  <VideoCard src={t.embed} title={t.subtitle} />
                ) : (
                  <div className="overflow-hidden rounded-xl border border-white/5">
                    <img src={t.image} alt={t.title} className="w-full h-auto object-cover" />
                  </div>
                )}
                <div className="mt-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-300">
                    <span className="w-6 h-6 rounded-full bg-brand-600/20 border border-brand-500/40 grid place-items-center">{t.n}</span>
                    {t.subtitle}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{t.title}</h3>
                  {t.link && (
                    <a href={t.link} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-brand-200 break-all">
                      {t.linkLabel} <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                    </a>
                  )}
                  <p className="mt-2 text-sm text-gray-400">{formatId(t.date)}</p>
                  <p className="mt-1 text-xs text-brand-400 font-medium">{daysAgo(t.date)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="chip mb-4"><i className="fa-brands fa-x-twitter" /> Referensi</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Lagu Terkait Setlist Original</h2>
          <p className="mt-3 text-gray-400">Cuplikan diskusi awal seputar setlist original JKT48.</p>
          <div className="mt-10 flex justify-center">
            <blockquote className="twitter-tweet" data-theme="dark" data-media-max-width="560">
              <p lang="in" dir="ltr">
                Upload ulang dikarenakan yg sebelumnya terbungkam. Sungguh sangat KEBETULAN.{' '}
                <a href="https://t.co/9itEBPQRup">pic.twitter.com/9itEBPQRup</a>
              </p>
              &mdash; Leonarie (@Leonarieobc){' '}
              <a href="https://twitter.com/Leonarieobc/status/1794163301846569052?ref_src=twsrc%5Etfw">May 25, 2024</a>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="teaser" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="chip mb-4"><i className="fa-solid fa-clapperboard" /> Teaser</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Teaser Setlist Original JKT48</h2>
          <p className="mt-3 text-gray-400">Cuplikan resmi dari JKT48.</p>
          <div className="mt-10 card-glass rounded-2xl p-4 sm:p-6">
            <VideoCard src="https://www.youtube.com/embed/haPAVXVRXLk" title="Teaser" />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="lagu" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="chip mb-4"><i className="fa-solid fa-music" /> Tracklist</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Lagu Setlist Original JKT48</h2>
            <p className="mt-3 text-gray-400">Enam lagu yang menjadi bagian dari Pertaruhan Cinta.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((s) => (
              <article key={s.n} className="card-glass rounded-2xl p-4 transition hover:-translate-y-1">
                <VideoCard src={s.embed} title={s.title} />
                <div className="mt-4">
                  <div className="text-xs font-semibold text-brand-300">Track {s.n}</div>
                  <h3 className="mt-1 text-lg font-semibold text-white">{s.title}</h3>
                  {s.note && <p className="mt-2 text-sm text-gray-400">{s.note}</p>}
                  {s.date && <p className="mt-2 text-sm text-gray-400">{formatId(s.date)}</p>}
                  {s.date && <p className="mt-1 text-xs text-brand-400 font-medium">{daysAgo(s.date)}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="fanmade" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="chip mb-4"><i className="fa-solid fa-palette" /> Karya Fans</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Setlist Original Buatan Fans</h2>
            <p className="mt-3 text-gray-400">Beberapa karya kreatif fans terkait setlist original JKT48.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {fanmade.map((f) => (
              <article key={f.title} className="card-glass rounded-2xl p-5 transition hover:-translate-y-1">
                <Carousel images={f.images} />
                <div className="mt-4">
                  <h3 className="font-display text-xl font-bold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">Karya: <span className="text-brand-300">{f.by}</span></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="kredit" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            <div>
              <span className="chip mb-4"><i className="fa-solid fa-users" /> Tim</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Dikembangkan oleh</h2>
              <p className="mt-3 text-gray-400 max-w-md">Terima kasih kepada semua pihak yang telah mendukung arsip ini.</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-6 xl:col-span-2">
              <li className="card-glass rounded-2xl p-5 flex items-center gap-4">
                <img className="h-16 w-16 rounded-full ring-2 ring-brand-500/40" src="https://avatars.githubusercontent.com/u/80138640" alt="Rebornian48" />
                <div>
                  <h3 className="text-base font-semibold text-white">Rebornian48</h3>
                  <p className="text-sm text-brand-300">Perancang Situs</p>
                </div>
              </li>
              <li className="card-glass rounded-2xl p-5 flex items-center gap-4">
                <div className="h-16 w-16 rounded-full grid place-items-center bg-brand-600/20 border border-brand-500/40 text-brand-300 text-xl">
                  <i className="fa-solid fa-heart" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">@A_FionyJKT48, @peyeeeek dan kawan-kawan</h3>
                  <p className="text-sm text-brand-300">Para Pejuang Setlist Original JKT48</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Rebornian48 - Arsip Setlist Original JKT48.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://github.com/Rebornian48" target="_blank" rel="noopener" className="hover:text-white transition">
              <i className="fa-brands fa-github text-lg" />
            </a>
            <a href="https://jkt48.com" target="_blank" rel="noopener" className="hover:text-white transition text-sm font-semibold">jkt48.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
