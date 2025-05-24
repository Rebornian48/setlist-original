const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2021, 11, 18);
const secondDate = new Date(2022, 8, 8);
const thirdDate = new Date(2024, 8, 8);
const song1Date = new Date(2025, 4, 22);
const nowDate = new Date();

var id1Date = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}).format(firstDate);

var id2Date = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}).format(secondDate);

var id3Date = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}).format(thirdDate);

var ids1Date = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}).format(song1Date);

const diffDays1 = Math.round(Math.abs((nowDate - firstDate) / oneDay));
const diffDays2 = Math.round(Math.abs((nowDate - secondDate) / oneDay));
const diffDays3 = Math.round(Math.abs((nowDate - thirdDate) / oneDay));
const diffDaysS1 = Math.round(Math.abs((nowDate - song1Date) / oneDay));


document.getElementById('tglsatu').textContent = id1Date;
document.getElementById('tgldua').textContent = id2Date;
document.getElementById('tgltiga').textContent = id3Date;
document.getElementById('tglsongsatu').textContent = ids1Date;
document.getElementById('satu').textContent = diffDays1-1 + ' hari yang lalu';
document.getElementById('dua').textContent = diffDays2-1 + ' hari yang lalu';
document.getElementById('tiga').textContent = diffDays3-1 + ' hari yang lalu';
document.getElementById('songsatu').textContent = diffDaysS1-1 + ' hari yang lalu';
