'use strict';

const seattle = {
  openHour: 6,
  closeHour: 20,
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  salesModel(){
    let hourlySales = [];
    for (let i = 0; i < (this.closeHour - this.openHour); i++){
      let randCust = ((Math.floor(Math.random() * (this.maxCust - this.minCust))) + this.minCust + 1);
      hourlySales.push(Math.round(randCust * this.avgSale));
    }
    console.log(hourlySales);
    let totalSales = 0;
    for (let i = 0; i < hourlySales.length; i++){
      totalSales += hourlySales[i];
    }
    console.log(`Total Sales: ${totalSales}`);
  },
};

seattle.salesModel();
