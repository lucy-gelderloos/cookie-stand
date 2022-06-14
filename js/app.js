'use strict';

const seattle = {
  openHour: 6,
  closeHour: 20,
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  randCust: function(){
    (Math.floor(Math.random() * (this.maxCust - this.minCust))) + 1;
  },
  hourlySales: function(){
    let salesPerHour = [];
    for (let i = 0; i < (this.openHour - this.closeHour); i++);
    salesPerHour.push(this.randCust * this.avgSale);
    console.log salesPerHour;
  },
};
