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
  headRow.id = ('headerRow');
  modelTable.appendChild(headRow);

  for(let i = 0; i < hoursHeader.length; i++){
    const colHead = document.createElement('th');
    colHead.appendChild(document.createTextNode(hoursHeader[i]));
    headRow.appendChild(colHead);
  }
}

function Model(location,minCust,maxCust,avgSale){
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.hourlySales = this.salesModel();
  this.totalDailySales = this.totalDailySales();
}

Model.prototype.salesModel = function(){
  let hourlySales = [];
  //model hourly sales
  for (let i = 6; i < 20; i++){
    let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
    hourlySales.push(Math.round(randCust * this.avgSale));
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

  const row = document.createElement('tr');
  modelTable.appendChild(row);

  const rowHead = document.createElement('td');
  rowHead.appendChild(document.createTextNode(this.storeLocation));
  row.appendChild(rowHead);

  for (let i = 0; i < 14; i++){
    const cell = document.createElement('td');
    cell.appendChild(document.createTextNode(this.hourlySales[i]));
    row.appendChild(cell);
  }
  const totalCell = document.createElement('td');
  totalCell.appendChild(document.createTextNode(this.totalDailySales));
  row.appendChild(totalCell);
};

function hourlyTotals(){
  const headerRow = document.getElementById('headerRow');

  const footerRow = document.createElement('tr');
  headerRow.append(footerRow);

  let hourlyTotalsArray = [''];
  for(let i = 0; i < 14; i++){
    let hourTotal = (seattle.hourlySales[i] + tokyo.hourlySales[i] + dubai.hourlySales[i] + paris.hourlySales[i] + lima.hourlySales[i]);
    hourlyTotalsArray.push(hourTotal);
  }

  let grandTotal = 0;
  for (let i = 0; i < (hourlyTotalsArray.length - 1); i++){
    grandTotal += hourlyTotalsArray[i];
  }
  hourlyTotalsArray.push(grandTotal);

  for(let i = 0; hourlyTotalsArray.length; i++){
    const hourlyTotalCell = document.createElement('th');
    hourlyTotalCell.appendChild(document.createTextNode(hourlyTotalsArray[i]));
    footerRow.appendChild(hourlyTotalCell);
  }
}

const seattle = new Model('Seattle',23,65,6.3);
const tokyo = new Model('Tokyo',3,24,1.2);
const dubai = new Model('Dubai',11,38,3,7);
const paris = new Model('Paris',20,38,2.3);
const lima = new Model('Lima',2,16,4.6);
