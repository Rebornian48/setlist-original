const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2021, 11, 18);
const secondDate = new Date(2022, 8, 8);
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

const diffDays1 = Math.round(Math.abs((nowDate - firstDate) / oneDay));
const diffDays2 = Math.round(Math.abs((nowDate - secondDate) / oneDay));

document.getElementById('tglsatu').textContent = id1Date;
document.getElementById('tgldua').textContent = id2Date;
document.getElementById('satu').textContent = diffDays1 + ' hari';
document.getElementById('dua').textContent = diffDays2 + ' hari';