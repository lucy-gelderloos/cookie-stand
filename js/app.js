'use strict';

function Model(location,minCust,maxCust,avgSale){
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.salesModel = function() {
    let hourlySales = [];

    //model hourly sales
    for (let i = 6; i < 20; i++){
      let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
      hourlySales.push(Math.round(randCust * this.avgSale));
    }
    console.log(hourlySales);

    //calculate total sales
    let totalSales = 0;
    for (let j = 0; j < hourlySales.length; j++){
      totalSales += hourlySales[j];
    }
    console.log(`Total Sales: ${totalSales}`);

    //generate heading
    const modelDiv = document.createElement('div');
    modelDiv.id = this.storeLocation;
    modelDiv.className = ('model-div');
    const locationHeading = document.createElement('h2');
    const locationHeadingContent = document.createTextNode(this.storeLocation);
    locationHeading.appendChild(locationHeadingContent);
    modelDiv.appendChild(locationHeading);

    const locationModelList = document.createElement('ul');
    locationModelList.id = `${this.storeLocation}-list`;
    locationModelList.className = ('model-list');

    modelDiv.appendChild(locationModelList);
    const modelSection = document.getElementById('Insert').parentNode;
    document.body.insertBefore(modelDiv, modelSection);
  };
}

function openHours() {
  let hoursHeader = [];
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
  console.log(hoursHeader);
}

Model.prototype.renderSales = function(){
  const modelTable = document.getElementById('modelTable');

  const row = document.createElement('tr');
  modelTable.appendChild(row);

  for (let i = 0; i < 14; i++){
    const cell = document.createElement('td');
    cell.appendChild(document.createTextNode(this.hourlySales[i]));
    row.appendChild(cell);
  }
};

//   const headerCells = function(hoursHeader){
//     hoursHeader.forEach(element => {
//       const cell = document.createElement('th');
//       cell.appendChild(document.createTextNode(hoursHeader));
//     });
//   };
// };

// function createTable(tableData) {
//     var table = document.createElement('table');
//     var tableBody = document.createElement('tbody');
  
//     tableData.forEach(function(rowData) {
//       var row = document.createElement('tr');
  
//       rowData.forEach(function(cellData) {
//         var cell = document.createElement('td');
//         cell.appendChild(document.createTextNode(cellData));
//         row.appendChild(cell);
//       });
  
//       tableBody.appendChild(row);
//     });
  
//     table.appendChild(tableBody);
//     document.body.appendChild(table);
//   }




// Model.prototype = modelPrototype;
// Model.prototype.constructor = Model;

const seattle = new Model('Seattle',23,65,6.3);
const tokyo = new Model('Tokyo',3,24,1.2);
const dubai = new Model('Dubai',11,38,3,7);
const paris = new Model('Paris',20,38,2.3);
const lima = new Model('Lima',2,16,4.6);
