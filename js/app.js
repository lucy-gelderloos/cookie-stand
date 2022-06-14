'use strict';

const modelPrototype = {
  openHour:6,
  closeHour:20,
};



function Model(location,minCust,maxCust,avgSale){
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.salesModel = function() {
    let hourlySales = [];
    let hour = [];
    let salesByHour = [];
    //model hourly sales
    for (let i = this.openHour; i < this.closeHour; i++){
      //generate random sales
      let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
      if(i < 12){
        hour = (`${i}:00 am`);
      }
      else if(i === 12){
        hour = (`${i}:00 pm`);
      }
      else{
        hour = (`${(i-12)}:00 pm`);
      }
      hourlySales.push(Math.round(randCust * this.avgSale));
      salesByHour.push(`${hour}: ${Math.round(randCust * this.avgSale)} cookies`);

    }
    console.log(hourlySales);
    console.log(hour);
    //calculate total sales
    let totalSales = 0;
    for (let j = 0; j < hourlySales.length; j++){
      totalSales += hourlySales[j];
    }
    console.log(`Total Sales: ${totalSales}`);
    salesByHour.push(`Total Daily Sales: ${totalSales}`);
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
    salesByHour.forEach((item)=>{
      let li = document.createElement('li');
      li.innerText = item;
      locationModelList.appendChild(li);
    }
    );
    modelDiv.appendChild(locationModelList);
    const modelSection = document.getElementById('Insert').parentNode;
    document.body.insertBefore(modelDiv, modelSection);


  };
}

Model.prototype = modelPrototype;
Model.prototype.constructor = Model;


const portland = new Model('Portland',18,45,4);
console.log (portland);


const seattle = {
  storeLocation: 'Seattle',
  openHour: 6,
  closeHour: 20,
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  salesModel(){
    let hourlySales = [];
    let hour = [];
    let salesByHour = [];
    //model hourly sales
    for (let i = this.openHour; i < this.closeHour; i++){
      //generate random sales
      let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
      if(i < 12){
        hour = (`${i}:00 am`);
      }
      else if(i === 12){
        hour = (`${i}:00 pm`);
      }
      else{
        hour = (`${(i-12)}:00 pm`);
      }
      hourlySales.push(Math.round(randCust * this.avgSale));
      salesByHour.push(`${hour}: ${Math.round(randCust * this.avgSale)} cookies`);

    }
    console.log(hourlySales);
    console.log(hour);
    //calculate total sales
    let totalSales = 0;
    for (let j = 0; j < hourlySales.length; j++){
      totalSales += hourlySales[j];
    }
    console.log(`Total Sales: ${totalSales}`);
    salesByHour.push(`Total Daily Sales: ${totalSales}`);
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
    salesByHour.forEach((item)=>{
      let li = document.createElement('li');
      li.innerText = item;
      locationModelList.appendChild(li);
    }
    );
    modelDiv.appendChild(locationModelList);
    const modelSection = document.getElementById('Insert').parentNode;
    document.body.insertBefore(modelDiv, modelSection);


  },
};

const tokyo = {
  storeLocation: 'Tokyo',
  openHour: 6,
  closeHour: 20,
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  salesModel(){
    let hourlySales = [];
    let hour = [];
    let salesByHour = [];
    //model hourly sales
    for (let i = this.openHour; i < this.closeHour; i++){
      //generate random sales
      let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
      if(i < 12){
        hour = (`${i}:00 am`);
      }
      else if(i === 12){
        hour = (`${i}:00 pm`);
      }
      else{
        hour = (`${(i-12)}:00 pm`);
      }
      hourlySales.push(Math.round(randCust * this.avgSale));
      salesByHour.push(`${hour}: ${Math.round(randCust * this.avgSale)} cookies`);

    }
    console.log(hourlySales);
    console.log(hour);
    //calculate total sales
    let totalSales = 0;
    for (let j = 0; j < hourlySales.length; j++){
      totalSales += hourlySales[j];
    }
    console.log(`Total Sales: ${totalSales}`);
    salesByHour.push(`Total Daily Sales: ${totalSales}`);
    //generate heading
    const modelDiv = document.createElement('div');
    modelDiv.id = this.storeLocation;
    const locationHeading = document.createElement('h2');
    const locationHeadingContent = document.createTextNode(this.storeLocation);
    locationHeading.appendChild(locationHeadingContent);
    modelDiv.appendChild(locationHeading);

    const locationModelList = document.createElement('ul');
    locationModelList.id = `${this.storeLocation}-list`;
    salesByHour.forEach((item)=>{
      let li = document.createElement('li');
      li.innerText = item;
      locationModelList.appendChild(li);
    }
    );
    modelDiv.appendChild(locationModelList);
    const modelSection = document.getElementById('Insert').parentNode;
    document.body.insertBefore(modelDiv, modelSection);


  },
};

const dubai = {
  storeLocation: 'Dubai',
  openHour: 6,
  closeHour: 20,
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  salesModel(){
    let hourlySales = [];
    let hour = [];
    let salesByHour = [];
    //model hourly sales
    for (let i = this.openHour; i < this.closeHour; i++){
      //generate random sales
      let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
      if(i < 12){
        hour = (`${i}:00 am`);
      }
      else if(i === 12){
        hour = (`${i}:00 pm`);
      }
      else{
        hour = (`${(i-12)}:00 pm`);
      }
      hourlySales.push(Math.round(randCust * this.avgSale));
      salesByHour.push(`${hour}: ${Math.round(randCust * this.avgSale)} cookies`);

    }
    console.log(hourlySales);
    console.log(hour);
    //calculate total sales
    let totalSales = 0;
    for (let j = 0; j < hourlySales.length; j++){
      totalSales += hourlySales[j];
    }
    console.log(`Total Sales: ${totalSales}`);
    salesByHour.push(`Total Daily Sales: ${totalSales}`);
    //generate heading
    const modelDiv = document.createElement('div');
    modelDiv.id = this.storeLocation;
    const locationHeading = document.createElement('h2');
    const locationHeadingContent = document.createTextNode(this.storeLocation);
    locationHeading.appendChild(locationHeadingContent);
    modelDiv.appendChild(locationHeading);

    const locationModelList = document.createElement('ul');
    locationModelList.id = `${this.storeLocation}-list`;
    salesByHour.forEach((item)=>{
      let li = document.createElement('li');
      li.innerText = item;
      locationModelList.appendChild(li);
    }
    );
    modelDiv.appendChild(locationModelList);
    const modelSection = document.getElementById('Insert').parentNode;
    document.body.insertBefore(modelDiv, modelSection);


  },
};

const paris = {
  storeLocation: 'Paris',
  openHour: 6,
  closeHour: 20,
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  salesModel(){
    let hourlySales = [];
    let hour = [];
    let salesByHour = [];
    //model hourly sales
    for (let i = this.openHour; i < this.closeHour; i++){
      //generate random sales
      let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
      if(i < 12){
        hour = (`${i}:00 am`);
      }
      else if(i === 12){
        hour = (`${i}:00 pm`);
      }
      else{
        hour = (`${(i-12)}:00 pm`);
      }
      hourlySales.push(Math.round(randCust * this.avgSale));
      salesByHour.push(`${hour}: ${Math.round(randCust * this.avgSale)} cookies`);

    }
    console.log(hourlySales);
    console.log(hour);
    //calculate total sales
    let totalSales = 0;
    for (let j = 0; j < hourlySales.length; j++){
      totalSales += hourlySales[j];
    }
    console.log(`Total Sales: ${totalSales}`);
    salesByHour.push(`Total Daily Sales: ${totalSales}`);
    //generate heading
    const modelDiv = document.createElement('div');
    modelDiv.id = this.storeLocation;
    const locationHeading = document.createElement('h2');
    const locationHeadingContent = document.createTextNode(this.storeLocation);
    locationHeading.appendChild(locationHeadingContent);
    modelDiv.appendChild(locationHeading);

    const locationModelList = document.createElement('ul');
    locationModelList.id = `${this.storeLocation}-list`;
    salesByHour.forEach((item)=>{
      let li = document.createElement('li');
      li.innerText = item;
      locationModelList.appendChild(li);
    }
    );
    modelDiv.appendChild(locationModelList);
    const modelSection = document.getElementById('Insert').parentNode;
    document.body.insertBefore(modelDiv, modelSection);


  },
};

const lima = {
  storeLocation: 'Lima',
  openHour: 6,
  closeHour: 20,
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  salesModel(){
    let hourlySales = [];
    let hour = [];
    let salesByHour = [];
    //model hourly sales
    for (let i = this.openHour; i < this.closeHour; i++){
      //generate random sales
      let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
      if(i < 12){
        hour = (`${i}:00 am`);
      }
      else if(i === 12){
        hour = (`${i}:00 pm`);
      }
      else{
        hour = (`${(i-12)}:00 pm`);
      }
      hourlySales.push(Math.round(randCust * this.avgSale));
      salesByHour.push(`${hour}: ${Math.round(randCust * this.avgSale)} cookies`);

    }
    console.log(hourlySales);
    console.log(hour);
    //calculate total sales
    let totalSales = 0;
    for (let j = 0; j < hourlySales.length; j++){
      totalSales += hourlySales[j];
    }
    console.log(`Total Sales: ${totalSales}`);
    salesByHour.push(`Total Daily Sales: ${totalSales}`);
    //generate heading
    const modelDiv = document.createElement('div');
    modelDiv.id = this.storeLocation;
    const locationHeading = document.createElement('h2');
    const locationHeadingContent = document.createTextNode(this.storeLocation);
    locationHeading.appendChild(locationHeadingContent);
    modelDiv.appendChild(locationHeading);

    const locationModelList = document.createElement('ul');
    locationModelList.id = `${this.storeLocation}-list`;
    salesByHour.forEach((item)=>{
      let li = document.createElement('li');
      li.innerText = item;
      locationModelList.appendChild(li);
    }
    );
    modelDiv.appendChild(locationModelList);
    const modelSection = document.getElementById('Insert').parentNode;
    document.body.insertBefore(modelDiv, modelSection);


  },
};
