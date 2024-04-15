const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const day_arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month_arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const curr_date = new Date();
console.log(curr_date);
date.innerText = curr_date.getDate();
year.innerText = curr_date.getFullYear();

day.innerText = day_arr[curr_date.getDay()];
month.innerText = month_arr[curr_date.getMonth()];
