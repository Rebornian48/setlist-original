# Setlist Original JKT48

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/cfb26a8376814f8fa87502edab4a8934)](https://app.codacy.com/gh/Rebornian48/setlist-original/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![CodeFactor](https://www.codefactor.io/repository/github/rebornian48/setlist-original/badge)](https://www.codefactor.io/repository/github/rebornian48/setlist-original)

Arsip **Setlist Original JKT48 - Pertaruhan Cinta**.
Salah satu janji dari JOT (JKT48 Operational Team) yang belum
terealisasi, dibuat menjadi halaman situs web. Berisi timeline
pengumuman, daftar lagu, teaser, dan karya fans.

## Fitur

- **Hero** - judul utama + animasi gradient
  (`gradient-text`, `bg-radial-glow`, `bg-grid`).
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
├── index.html          # halaman utama, satu file
├── assets/
│   ├── css/style.css   # animasi glitch + utility .img-center
│   ├── js/script.js    # perhitungan tanggal + injeksi ke DOM
│   └── img/            # aset gambar (logo, cover fanmade)
└── README.md
```

## Teknologi

- **HTML** statis single-page (`index.html`).
- **TailwindCSS** via CDN dengan config inline
  (warna `ink`, `brand`, animasi `gradient-x`, `float`, `pulse-slow`).
- **DaisyUI** 4.10.2 untuk komponen carousel.
- **Font Awesome** 6.6.0 untuk ikon.
- **Google Fonts** - Inter + Space Grotesk.
- **Luxon** (`luxon.js`) untuk utilitas tanggal.
- **Google Analytics** (gtag, `G-QF6QHSQGFP`).
- CSS kustom - kelas `.glitch` dengan pseudo-element + keyframe.
- JS kustom - `Intl.DateTimeFormat("id-ID")` untuk format tanggal
  Indonesia, hitung selisih hari, lalu inject ke elemen
  `#tglsatu`..`#tglempat`, `#tglsongsatu`, `#tglsongdua`
  dan counter `#satu`..`#empat`, `#songsatu`, `#songdua`.

## Menjalankan Lokal

Karena murni statis, cukup buka `index.html` di browser.
Untuk menghindari isu path relatif, jalankan server lokal:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Deploy

Site di-host via GitHub Pages dari branch `main`.

## Kredit

- **Rebornian48** - pembuat & pemelihara arsip.
- **@A_FionyJKT48**, **@peyeeeek** dan kawan-kawan
  - karya setlist fanmade.
