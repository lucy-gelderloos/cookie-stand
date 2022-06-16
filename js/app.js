'use strict';


function openHours() {
  let hoursHeader = ['Location'];
  let hours = [];
  for (let i = 6; i < 20; i++){
    if(i < 12){
      hours = (`${i}:00 am`);
    }
    else if(i === 12){
      hours = (`${i}:00 pm`);
    }
    else{
      hours = (`${(i-12)}:00 pm`);
    }
    hoursHeader.push(hours);
  }
  hoursHeader.push('Daily Total Sales');
  console.log(hoursHeader);

  const modelTable = document.getElementById('modelTable');
  const headRow = document.createElement('tr');
  // headRow.id = ('headerRow');
  modelTable.appendChild(headRow);

  for(let i = 0; i < hoursHeader.length; i++){
    const colHead = document.createElement('th');
    colHead.appendChild(document.createTextNode(hoursHeader[i]));
    headRow.appendChild(colHead);
  }
}

Model.prototype.salesModel = function(){
  let hourlySales = [];
  let scaleSales = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
  //model hourly sales
  for (let i = 6; i < 20; i++){
    let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
    hourlySales.push(Math.round(randCust * (this.avgSale * scaleSales[i-6])));
  }
  return(hourlySales);
};

Model.prototype.totalDailySales = function(){
  let totalSales = 0;
  for (let i = 0; i < this.hourlySales.length; i++){
    totalSales += this.hourlySales[i];
  }
  return(totalSales);
};

Model.prototype.render = function(){
  const modelTable = document.getElementById('modelTable');

  const salesRow = document.createElement('tr');
  modelTable.appendChild(salesRow);

  const salesRowHead = document.createElement('td');
  salesRowHead.className = ('left');
  salesRowHead.appendChild(document.createTextNode(this.storeLocation));
  salesRow.appendChild(salesRowHead);

  for (let i = 0; i < 14; i++){
    const cell = document.createElement('td');
    cell.appendChild(document.createTextNode(this.hourlySales[i]));
    salesRow.appendChild(cell);
  }
  const totalCell = document.createElement('td');
  totalCell.appendChild(document.createTextNode(this.totalDailySales));
  salesRow.appendChild(totalCell);

  const staffTable = document.getElementById('staffTable');

  const staffRow = document.createElement('tr');
  staffTable.appendChild(staffRow);

  const staffRowHead = document.createElement('td');
  staffRowHead.className = ('left');
  staffRowHead.appendChild(document.createTextNode(this.storeLocation));
  staffRow.appendChild(staffRowHead);

  for (let i = 0; i < 14; i++){
    const cell = document.createElement('td');
    cell.appendChild(document.createTextNode(this.hourlyStaff[i]));
    staffRow.appendChild(cell);
  }

};

Model.prototype.hourlyStaffing = function(){
  let hourlyStaff = [];
  const minStaff = 2;
  const cookiesPerStaff = 20;
  for (let i = 0; i < this.hourlySales.length; i++){
    let staffNeeded = Math.ceil(this.hourlySales[i]/cookiesPerStaff);
    if(staffNeeded < minStaff){
      hourlyStaff.push(minStaff);
    }
    else{
      hourlyStaff.push(staffNeeded);
    }
  }
  return(hourlyStaff);
};

function staffHours() {
  let staffHoursHeader = ['Location'];
  let staffHours = [];
  for (let i = 6; i < 20; i++){
    if(i < 12){
      staffHours = (`${i}:00 am`);
    }
    else if(i === 12){
      staffHours = (`${i}:00 pm`);
    }
    else{
      staffHours = (`${(i-12)}:00 pm`);
    }
    staffHoursHeader.push(staffHours);
  }

  console.log(staffHoursHeader);

  const staffTable = document.getElementById('staffTable');
  const staffHeadRow = document.createElement('tr');
  staffTable.appendChild(staffHeadRow);

  for(let i = 0; i < staffHoursHeader.length; i++){
    const staffColHead = document.createElement('th');
    staffColHead.appendChild(document.createTextNode(staffHoursHeader[i]));
    staffHeadRow.appendChild(staffColHead);
  }
}

function hourlyTotals(){

  let hourlyTotalsArray = [];
  hourlyTotalsArray.push('');
  for(let i = 0; i < 14; i++){
    let hourTotal = (seattle.hourlySales[i] + tokyo.hourlySales[i] + dubai.hourlySales[i] + paris.hourlySales[i] + lima.hourlySales[i]);
    hourlyTotalsArray.push(hourTotal);
  }

  let grandTotal = seattle.totalDailySales + tokyo.totalDailySales + dubai.totalDailySales + paris.totalDailySales + lima.totalDailySales;
  hourlyTotalsArray.push(grandTotal);

  // console.log (hourlyTotalsArray);

  const modelTable = document.getElementById('modelTable');
  const footerRow = document.createElement('tr');
  modelTable.appendChild(footerRow);

  for(let i = 0; i < hourlyTotalsArray.length; i++){
    const hourlyTotalCell = document.createElement('th');
    hourlyTotalCell.appendChild(document.createTextNode(hourlyTotalsArray[i]));
    footerRow.appendChild(hourlyTotalCell);
  }
}

function staffTotals(){
  let staffTotalsArray = [];
  staffTotalsArray.push('');
  for(let i = 0; i < 14; i++){
    let staffTotal = (seattle.hourlyStaff[i] + tokyo.hourlyStaff[i] + dubai.hourlyStaff[i] + paris.hourlyStaff[i] + lima.hourlyStaff[i]);
    staffTotalsArray.push(staffTotal);
  }

  // console.log (staffTotalsArray);

  const staffTable = document.getElementById('staffTable');
  const StaffFooterRow = document.createElement('tr');
  staffTable.appendChild(StaffFooterRow);

  for(let i = 0; i < staffTotalsArray.length; i++){
    const staffTotalCell = document.createElement('th');
    staffTotalCell.appendChild(document.createTextNode(staffTotalsArray[i]));
    StaffFooterRow.appendChild(staffTotalCell);
  }
}

const seattle = new Model('Seattle',23,65,6.3);
const tokyo = new Model('Tokyo',3,24,1.2);
const dubai = new Model('Dubai',11,38,3,7);
const paris = new Model('Paris',20,38,2.3);
const lima = new Model('Lima',2,16,4.6);

openHours();
staffHours();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

hourlyTotals();
staffTotals();


function Model(location,minCust,maxCust,avgSale){
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.hourlySales = this.salesModel();
  this.totalDailySales = this.totalDailySales();
  this.hourlyStaff = this.hourlyStaffing();
}

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
