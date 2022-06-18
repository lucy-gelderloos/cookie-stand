'use strict';

const salesCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
const hoursOpenArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

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

Model.prototype.hourlyEstimate = function() {

  this.hourlySalesArray.push(this.storeLocation);
  this.hourlyStaffArray.push(this.storeLocation);

  for(let i = 0; i < salesCurve.length; i++) {
    let randCust = ((Math.round(Math.random() * (this.maxCust - this.minCust))) + this.minCust);
    let randSale = (Math.round((randCust * this.avgSale) * (salesCurve[i])));

    this.hourlySalesArray.push(randSale);
    this.totalSales += randSale;

    let hourlyStaff = Math.ceil(randSale/20);
    if (hourlyStaff < 2) {
      this.hourlyStaffArray.push(2);
    }
    else {
      this.hourlyStaffArray.push(hourlyStaff);
    }
  }
  this.hourlySalesArray.push(this.totalSales);
};

Model.prototype.addRows = function() {
  const salesTable = document.getElementById('salesTable');
  let salesRow = document.createElement('tr');
  salesRow.classList.add('salesRow');
  salesTable.appendChild(salesRow);

  for(let i = 0; i < this.hourlySalesArray.length; i++){
    let salesCell = document.createElement('td');
    salesCell.appendChild(document.createTextNode(this.hourlySalesArray[i]));
    salesRow.appendChild(salesCell);
  }

  const staffTable = document.getElementById('staffTable');
  let staffRow = document.createElement('tr');
  staffRow.classList.add('staffRow');
  staffTable.appendChild(staffRow);

  for(let i = 0; i < this.hourlyStaffArray.length; i++){
    let staffCell = document.createElement('td');
    staffCell.appendChild(document.createTextNode(this.hourlyStaffArray[i]));
    staffRow.appendChild(staffCell);
  }
};

function Model(location,minCust,maxCust,avgSale){
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.totalSales = 0;
  this.hourlySalesArray = [];
  this.hourlyStaffArray = [];
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

const seattle = new Model('Seattle',23,65,6.3);
const tokyo = new Model('Tokyo',3,24,1.2);
const dubai = new Model('Dubai',11,38,3,7);
const paris = new Model('Paris',20,38,2.3);
const lima = new Model('Lima',2,16,4.6);

seattle.hourlyEstimate();
tokyo.hourlyEstimate();
dubai.hourlyEstimate();
paris.hourlyEstimate();
lima.hourlyEstimate();

seattle.addRows();
tokyo.addRows();
dubai.addRows();
paris.addRows();
lima.addRows();


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
