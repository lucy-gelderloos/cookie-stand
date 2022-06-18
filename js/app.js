'use strict';

const salesCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
const hoursOpenArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let hoursHeaderArray = [];
let totalHourlySalesArray = [];


// I want to do this to calculate the hours each store is going to be open, but given that it's always the same, maybe do it the easy way for now and come back to this later
// function hoursOpen(){
//   const openingHour = 6;
//   const closingHour = 20;
//   let hoursOpenArray = [];
//   for (let i = openingHour; i < closingHour; i++){
//     hoursOpenArray.push(i);
//   }
// }

function hoursFormatted(array) {
  let hoursHeaderArray = ['Location'];
  let hours = [];
  for (let i = array[0]; i <= array[array.length - 1]; i++){
    if(i < 12){
      hours = (`${i}:00 am`);
    }
    else if(i === 12){
      hours = (`${i}:00 pm`);
    }
    else{
      hours = (`${(i-12)}:00 pm`);
    }
    hoursHeaderArray.push(hours);
  }
  hoursHeaderArray.push('Daily Total Sales');
  return(hoursHeaderArray);
}

function salesHeaderRender() {
  let hoursHeaderArray = ['Location'];
  let hours = [];
  for (let i = hoursOpenArray[0]; i <= hoursOpenArray[hoursOpenArray.length - 1]; i++){
    if(i < 12){
      hours = (`${i}:00 am`);
    }
    else if(i === 12){
      hours = (`${i}:00 pm`);
    }
    else{
      hours = (`${(i-12)}:00 pm`);
    }
    hoursHeaderArray.push(hours);
  }
  hoursHeaderArray.push('Daily Total Sales');
  const salesTable = document.getElementById('salesTable');
  const headerRow = document.createElement('tr');
  headerRow.classList.add = ('headerRow');
  salesTable.appendChild(headerRow);
  for(let i = 0; i < hoursHeaderArray.length; i++){
    let headerCell = document.createElement('th');
    headerCell.appendChild(document.createTextNode(hoursHeaderArray[i]));
    headerRow.appendChild(headerCell);
  }
}

function staffHeaderRender() {
  let hoursHeaderArray = ['Location'];
  let hours = [];
  for (let i = hoursOpenArray[0]; i <= hoursOpenArray[hoursOpenArray.length - 1]; i++){
    if(i < 12){
      hours = (`${i}:00 am`);
    }
    else if(i === 12){
      hours = (`${i}:00 pm`);
    }
    else{
      hours = (`${(i-12)}:00 pm`);
    }
    hoursHeaderArray.push(hours);
  }
  const staffTable = document.getElementById('staffTable');
  const headerRow = document.createElement('tr');
  headerRow.classList.add = ('headerRow');
  staffTable.appendChild(headerRow);
  for(let i = 0; i < hoursHeaderArray.length; i++){
    let headerCell = document.createElement('th');
    headerCell.appendChild(document.createTextNode(hoursHeaderArray[i]));
    headerRow.appendChild(headerCell);
  }
}

function footerRowRender(array) {
  //this will put each element of an array into a row of <th> cells with class 'footerRow'
  const footerRow = document.createElement('tr');
  footerRow.classList.add = ('footerRow');
  array.forEach((array) => {
    let headerCell = document.createElement('th');
    headerCell.appendChild(document.createTextNode(array));
    footerRow.appendChild(headerCell);
  });
}

function tdRender(array) {
  //this will put each element of an array into a row of <td> cells
  const tableRow = document.createElement('tr');
  array.forEach((array) => {
    let tableCell = document.createElement('td');
    tableCell.appendChild(document.createTextNode(array));
    tableRow.appendChild(tableCell);
  });
}

Model.prototype.hourlySalesEstimate = function() {
  for(let i = 0; i < salesCurve.length; i++) {
    let randCust = ((Math.round(Math.random() * (this.maxCust - this.minCust))) + this.minCust);
    let randSale = (Math.round((randCust * this.avgSale) * (salesCurve[i])));
    this.hourlySalesArray.push(randSale);
    this.totalSales += randSale;
  }
};

Model.prototype.hourlyStaffEstimate = function() {
  for(let i = 0; i < this.hourlySalesArray; i++){
    let hourlyStaff = Math.ceil(this.hourlySalesArray[i] / 20);
    if (hourlyStaff < 2) {
      this.hourlyStaffArray.push(2);
    }
    else (this.hourlyStaffArray.push(hourlyStaff));
  }
};

Model.prototype.addRows = function() {


};


Model.prototype.addressRender = function() {
// this will format the address - I'm thinking an array where it creates a <p>, then inserts a <br /> between each address line
};




function Model(location,minCust,maxCust,avgSale){
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.totalSales = 0;
  this.estHourlySales = [];
  this.estHourlyStaff = [];
}


/*

Each store has:
 - city/location (add address, contact details)
 - minimum estimated customers/hour
 - maxiumum estimated customers/hour
 - average cookies/sale
 - opening time (same for all stores)
 - closing time (same for all stores)
 x sales curve (same for all stores)

Each store needs:
 - how many hours is it open? (same for all stores)
 - how many cookies is it estimated to sell per hour?
 - how many cookies is it estimated to sell per day?
 - how many staff does it need per hour? (assuming each staff member can sell 20 cookies/hour and each store needs a minimum of two staff per hour)
 - contact info on the

Each TABLE needs:
 - header row of hours (ideally with the flexibility to accommodate different hours, but not required)
 - footer row of total sales/staff (including grand total for sales table) that updates when more stores are added
 - a row with the data from each store, including stores added by the form

*/

salesHeaderRender();
staffHeaderRender();

const seattleArray = ['Seattle',23,65,6.3];
const tokyoArray = ['Tokyo',3,24,1.2];
const dubaiArray = ['Dubai',11,38,3,7];
const parisArray = ['Paris',20,38,2.3];
const limaArray = ['Lima',2,16,4.6];

const locationsArray = ['seattle','tokyo','dubai','paris','lima'];

const seattle = new Model(...seattleArray);
const tokyo = new Model(...tokyoArray);
const dubai = new Model(...dubaiArray);
const paris = new Model(...parisArray);
const lima = new Model(...limaArray);

//Sticky nav - https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.onscroll = function() {stickyNav();};
const nav = document.getElementById('sticky-nav');
const sticky = nav.offsetTop;
const content = document.getElementById('content');
function stickyNav() {
  if (window.pageYOffset > sticky) {
    nav.classList.add('sticky');
    content.classList.add('sticky-padding');
  } else {
    nav.classList.remove('sticky');
    content.classList.remove('sticky-padding');
  }
}

//Slideshow - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
