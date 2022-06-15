'use strict';

// const modelPrototype = {
//   openHour:6,
//   closeHour:20,
// };

function Model(location,minCust,maxCust,avgSale){
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.salesModel = function() {
    let hourlySales = [];
    //model hourly sales
    for (let i = this.openHour; i < this.closeHour; i++){
      //generate random sales
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
    // salesByHour.forEach((item)=>{
    //   let li = document.createElement('li');
    //   li.innerText = item;
    //   locationModelList.appendChild(li);
    // }
    // );
    modelDiv.appendChild(locationModelList);
    const modelSection = document.getElementById('Insert').parentNode;
    document.body.insertBefore(modelDiv, modelSection);
  };
}

// Model.prototype.openHour = 6;
// Model.prototype.closeHour = 20;

function openHours() {
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
    hours.push(hours);
  }
  console.log(hours);
}

// Model.prototype = modelPrototype;
// Model.prototype.constructor = Model;

// const portland = new Model('Portland',18,45,4);
// console.log (portland);
const seattle = new Model('Seattle',23,65,6.3);
const tokyo = new Model('Tokyo',3,24,1.2);
const dubai = new Model('Dubai');
const paris = new Model('Paris');
const lima = new Model('Lima');
