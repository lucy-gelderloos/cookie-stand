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
  // const modelTable = document.getElementById('modelTable');
  const modelLastRow = document.getElementById('salesFooter');

  const salesRow = document.createElement('tr');
  modelLastRow.parentNode.insertBefore(salesRow,modelLastRow);

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

  // const staffTable = document.getElementById('staffTable');
  const staffLastRow = document.getElementById('staffFooter');

  const staffRow = document.createElement('tr');
  staffLastRow.parentNode.insertBefore(staffRow,staffLastRow);

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
  hourlyTotalsArray.push('Total Sales');
  for(let i = 0; i < 14; i++){
    let hourTotal = (seattle.hourlySales[i] + tokyo.hourlySales[i] + dubai.hourlySales[i] + paris.hourlySales[i] + lima.hourlySales[i]);
    hourlyTotalsArray.push(hourTotal);
  }

  let grandTotal = seattle.totalDailySales + tokyo.totalDailySales + dubai.totalDailySales + paris.totalDailySales + lima.totalDailySales;
  hourlyTotalsArray.push(grandTotal);

  // console.log (hourlyTotalsArray);

  const modelTable = document.getElementById('modelTable');
  const footerRow = document.createElement('tr');
  footerRow.id = ('salesFooter');
  modelTable.appendChild(footerRow);

  for(let i = 0; i < hourlyTotalsArray.length; i++){
    const hourlyTotalCell = document.createElement('th');
    hourlyTotalCell.appendChild(document.createTextNode(hourlyTotalsArray[i]));
    footerRow.appendChild(hourlyTotalCell);
  }
}

function staffTotals(){
  let staffTotalsArray = [];
  staffTotalsArray.push('Total Staff');
  for(let i = 0; i < 14; i++){
    let staffTotal = (seattle.hourlyStaff[i] + tokyo.hourlyStaff[i] + dubai.hourlyStaff[i] + paris.hourlyStaff[i] + lima.hourlyStaff[i]);
    staffTotalsArray.push(staffTotal);
  }

  // console.log (staffTotalsArray);

  const staffTable = document.getElementById('staffTable');
  const staffFooterRow = document.createElement('tr');
  staffFooterRow.id = ('staffFooter');
  staffTable.appendChild(staffFooterRow);

  for(let i = 0; i < staffTotalsArray.length; i++){
    const staffTotalCell = document.createElement('th');
    staffTotalCell.appendChild(document.createTextNode(staffTotalsArray[i]));
    staffFooterRow.appendChild(staffTotalCell);
  }
}

//form start

//what I want to do is create a new array called 'newLocation'Array (where newLocation is the name of the new location), then put the numbers in that array. Also add the new location to the Locations array, then loop through that array to render. (But that would require reloading the page? Because if I do the render on click then I'll get a bunch of duplication.) Also want the locations array for math, I think.

//what needs to happen on click:
// - new row created with location name and est. hourly sales/staffing
// - row inserted above total row
// - hourly sales/staffing from new store added to existing totals


let formElement = document.getElementById('add-location');
// let newStore;

formElement.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the refresh on submit

  let newStoreLocation = event.target.locationName.value;
  console.log(newStoreLocation);
  let newMinCust = Number(event.target.minCust.value);
  // If these aren't converted to numbers, the math is bad
  console.log(newMinCust);
  let newMaxCust = Number(event.target.maxCust.value);
  console.log(newMaxCust);
  let newAvgSale = Number(event.target.avgSale.value);
  console.log(newAvgSale);

  // newStoreArray.push(newStoreLocation,newMinCust,newMaxCust,newAvgSale);

  // let newStoreArray = [newStoreLocation, newMinCust, newMaxCust, newAvgSale];
  locationsArray.push(newStoreLocation.toLowerCase()); //this works, in case I ever decide what to do with it
  let newStore = new Model(newStoreLocation,newMinCust,newMaxCust,newAvgSale);
  console.log(newStore.hourlySales);
  newStore.render();
});




// function addLocation(form){
//   let newLocation = form.locationName.value;
//   console.log(newLocation);
// }

// addLocation();




//form end


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

//Spread syntax (...) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

openHours();
staffHours();

hourlyTotals();
staffTotals();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
// portland.render();


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


// function addNewRow() {
//   const table = document.getElementById('modelTable');

//   let text = [storeLocation,minCust,maxCust,avgSale];
//   let row = table.insertRow(table.rows.length-1);

//   for (let i = 0; i < table.rows[0].cells.length; i++) {
//     row.insertCell(-1).textContent = text[i] || '';
//   }
// }

