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
  this.hourlyStaff = this.hourlyStaffing();
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

  const row = document.createElement('tr');
  modelTable.appendChild(row);

  const rowHead = document.createElement('td');
  rowHead.className = ('left');
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

Model.prototype.staffRender = function(){
  const modelTable = document.getElementById('staffTable');

  const row = document.createElement('tr');
  modelTable.appendChild(row);

  const rowHead = document.createElement('td');
  rowHead.className = ('left');
  rowHead.appendChild(document.createTextNode(this.storeLocation));
  row.appendChild(rowHead);

  for (let i = 0; i < 14; i++){
    const cell = document.createElement('td');
    cell.appendChild(document.createTextNode(this.hourlyStaff[i]));
    row.appendChild(cell);
  }

};



const seattle = new Model('Seattle',23,65,6.3);
const tokyo = new Model('Tokyo',3,24,1.2);
const dubai = new Model('Dubai',11,38,3,7);
const paris = new Model('Paris',20,38,2.3);
const lima = new Model('Lima',2,16,4.6);

function hourlyTotals(){

  let hourlyTotalsArray = [];
  hourlyTotalsArray.push('');
  for(let i = 0; i < 14; i++){
    let hourTotal = (seattle.hourlySales[i] + tokyo.hourlySales[i] + dubai.hourlySales[i] + paris.hourlySales[i] + lima.hourlySales[i]);
    hourlyTotalsArray.push(hourTotal);
  }

  let grandTotal = seattle.totalDailySales + tokyo.totalDailySales + dubai.totalDailySales + paris.totalDailySales + lima.totalDailySales;
  hourlyTotalsArray.push(grandTotal);

  console.log (hourlyTotalsArray);

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

  console.log (staffTotalsArray);

  const staffTable = document.getElementById('staffTable');
  const StaffFooterRow = document.createElement('tr');
  staffTable.appendChild(StaffFooterRow);

  for(let i = 0; i < staffTotalsArray.length; i++){
    const staffTotalCell = document.createElement('th');
    staffTotalCell.appendChild(document.createTextNode(staffTotalsArray[i]));
    StaffFooterRow.appendChild(staffTotalCell);
  }
}


