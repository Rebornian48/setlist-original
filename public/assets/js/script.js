const oneDay = 24 * 60 * 60 * 1000;

const dateFormat = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

const formatId = (date) =>
  new Intl.DateTimeFormat("id-ID", dateFormat).format(date);

const diffDays = (date) =>
  Math.round(Math.abs((new Date() - date) / oneDay));

const daysAgo = (date) => `${diffDays(date) - 1} hari yang lalu`;

const entries = [
  { tgl: "tglsatu", diff: "satu", date: new Date(2021, 11, 18) },
  { tgl: "tgldua", diff: "dua", date: new Date(2022, 8, 8) },
  { tgl: "tgltiga", diff: "tiga", date: new Date(2024, 8, 8) },
  { tgl: "tglempat", diff: "empat", date: new Date(2025, 8, 5) },
  { tgl: "tglsongsatu", diff: "songsatu", date: new Date(2025, 4, 22) },
  { tgl: "tglsongdua", diff: "songdua", date: new Date(2025, 5, 25) },
];

for (const { tgl, diff, date } of entries) {
  document.getElementById(tgl).textContent = formatId(date);
  document.getElementById(diff).textContent = daysAgo(date);
}
