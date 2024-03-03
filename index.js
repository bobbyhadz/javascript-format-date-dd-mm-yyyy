// EXAMPLE 1 - One-liner - on how to Format a Date as DD/MM/YYYY in JavaScript

const date = new Date();

// ✅ DD/MM/YYYY
const result1 = new Date().toLocaleDateString('en-GB');
console.log(result1);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Including the time

// const date = new Date();

// const result2 = new Date().toLocaleString('en-GB', {
//   hour12: false,
// });
// console.log(result2);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Format a Date as DD/MM/YYYY in JavaScript

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//   return [
//     padTo2Digits(date.getDate()),
//     padTo2Digits(date.getMonth() + 1),
//     date.getFullYear(),
//   ].join('/');
// }

// // 👇️ 24/07/2023 (DD/MM/YYYY)
// console.log(formatDate(new Date()));

// //  👇️️ 24/07/2027 (DD/MM/YYYY)
// console.log(formatDate(new Date(2027, 6, 24)));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Format a Date as DD/MM/YYYY using date-fns

// import {format} from 'date-fns';

// const date = new Date();

// const result = format(date, 'dd/MM/yyyy');
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Format a Date as DD/MM/YYYY using moment.js

// import moment from 'moment';

// const result = moment().format('DD/MM/YYYY');

// console.log(result);
