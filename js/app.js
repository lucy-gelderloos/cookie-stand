'use strict';

const salesCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];

function hoursFormatted() {
  // this will create an array of the hours each store is open, including colon, am/pm
  // remember to use mod for calculating am/pm
  // it's not a prototype because the formatted hours are the same data as the hours it's open (and also because I'll probably just write this as if all the hours are the same)
}


Model.prototype.addressRender = function() {

};




function Model(location,minCust,maxCust,avgSale){
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
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
