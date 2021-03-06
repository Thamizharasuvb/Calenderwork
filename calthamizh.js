const date = new Date();

const monthDays = document.querySelector('.days');

const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();

const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();


const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

const nextDays = 7- lastDayIndex - 4;


date.setDate(1);
console.log(date.getDay());


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector(".date h3").innerHTML
= months[date.getMonth()];

document.querySelector(".date p").innerHTML
= date.toDateString();

let days = "";

for(let x = firstDayIndex; x>0; x--){
    days +=`<div class="prev-date">${prevLastDay - x +1}</div>`;
}


for(let i=1; i<=lastDay; i++){
    days+= `<div>${i}</div>`;
    monthDays.innerHTML = days;
}

for(let j=1; j<= nextDays; j++){
    days += `<div class = "next-date">${j}</div>`;
    monthDays.innerHTML = days;
}
