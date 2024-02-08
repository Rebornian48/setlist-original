const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2021, 12, 18);
const secondDate = new Date(2022, 9, 8);
const nowDate = new Date();

const diffDays1 = Math.round(Math.abs((nowDate - firstDate) / oneDay));
const diffDays2 = Math.round(Math.abs((nowDate - secondDate) / oneDay));

document.getElementById('satu').textContent = diffDays1 + ' hari';
document.getElementById('dua').textContent = diffDays2 + ' hari';