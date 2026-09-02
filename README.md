# Setlist Original JKT48

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/cfb26a8376814f8fa87502edab4a8934)](https://app.codacy.com/gh/Rebornian48/setlist-original/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![CodeFactor](https://www.codefactor.io/repository/github/rebornian48/setlist-original/badge)](https://www.codefactor.io/repository/github/rebornian48/setlist-original)

Arsip **Setlist Original JKT48 - Pertaruhan Cinta**.
Salah satu janji dari JOT (JKT48 Operational Team) yang belum
terealisasi, dibuat menjadi halaman situs web. Berisi timeline
pengumuman, daftar lagu, teaser, dan karya fans.

## Fitur

- **Hero** - judul utama + animasi gradient
  (`gradient-x`, radial glow, grid background).
- **Timeline** - 4 momen kunci pengumuman/peristiwa.
  Tanggal dan hitungan "hari yang lalu" dihitung otomatis di runtime.
- **Lagu** - 6 lagu setlist:
  Go and Fight!, Raja Hati, Percik Kecil, Ada Aku!, Dahulu, Dream.
  Dua lagu (Go and Fight!, Raja Hati) menampilkan
  tanggal rilis + selisih hari.
- **Teaser** - section teaser resmi.
- **Fanmade** - carousel setlist buatan fans:
  Kasihan Pohon Pepaya, Langit Merah Jambu, Cinta Sepanjang Durasi,
  One More Chance!, Spotlight Berwarna Merah,
  Ini Saatnya Menjadi Girlband, Misteri Setlist Original JKT48,
  Di Atas Udara Flowe12ful.
- **Kredit** - Rebornian48 + kontributor fans
  (@A_FionyJKT48, @peyeeeek, dkk).
- Efek visual `glitch` (animasi keyframe CSS) untuk elemen bertema.

## Struktur

```text
.
├── index.html              # entry point Vite
├── src/
│   ├── main.jsx            # bootstrap React
│   ├── App.jsx             # seluruh UI + data timeline/lagu/fanmade
│   └── index.css           # Tailwind directives + kelas .glitch
├── public/
│   ├── .htaccess           # SPA rewrite + cache untuk Hostinger
│   └── assets/img/         # aset gambar (logo, cover fanmade)
├── .github/workflows/
│   └── deploy.yml          # build Vite + FTP deploy ke Hostinger
├── vite.config.js          # base path /setlist-ori/
├── tailwind.config.js      # tema ink/brand + animasi kustom
└── postcss.config.js
```

## Teknologi

- **Vite 5** + **React 18** (single-page app).
- **TailwindCSS 3** (build lokal via PostCSS + Autoprefixer),
  konfigurasi warna `ink`, `brand`, animasi `gradient-x`, `float`,
  `pulse-slow`.
- **Font Awesome** 6.6.0 (CDN) untuk ikon.
- **Google Fonts** - Inter + Space Grotesk.
- **Google Analytics** (gtag, `G-QF6QHSQGFP`).
- CSS kustom - kelas `.glitch` dengan pseudo-element + keyframe
  (di `src/index.css`).
- Tanggal & hitungan hari dihitung langsung di `App.jsx`
  memakai `Intl.DateTimeFormat("id-ID")` dan selisih milidetik
  (tanpa dependensi tambahan seperti Luxon).

## Menjalankan Lokal

Butuh Node.js 22+.

```bash
npm install
npm run dev
```

Dev server Vite jalan di `http://localhost:5173/setlist-ori/`
(sesuai `base` pada `vite.config.js`).

Untuk memeriksa hasil produksi:

```bash
npm run build
npm run preview
```

Build menghasilkan `dist/` yang siap di-deploy.

## Deploy

Push ke `main` memicu GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):

1. `npm ci` + `npm run build` di runner (Node 22).
2. Isi `dist/` di-upload lewat FTP ke Hostinger, ke
   `/domains/doc.rebornian48.my.id/public_html/setlist-ori/`.

Rewrite SPA dan cache aset diatur `public/.htaccess` yang
ikut ter-deploy. Kredensial FTP disimpan sebagai GitHub Secrets
(`FTP_HOST`, `FTP_USER`, `FTP_PASS`).

## Kredit

- **Rebornian48** - pembuat & pemelihara arsip.
- **@A_FionyJKT48**, **@peyeeeek** dan kawan-kawan
  - karya setlist fanmade.
