"use strict";

// var myImage = document.getElementById("coffee_image");
let myImage = $('#coffee_image');

// var myRevenueMessage = document.getElementById("revenue");
let myRevenueMessage = $('#revenue');

//myImage.setAttribute("src", "static/coffee_beans.jpg");
myImage.attr('src', 'static/coffee_beans.jpg');

// myImage.addEventListener("click", makeCoffee);
myImage.on('click', makeCoffee)

function makeCoffee() {
     myImage.src = "static/coffee_machine.jpg";

     setTimeout(function() {
         myImage.setAttribute("src", "static/coffee_mug.jpg");
     }, 1500);

     setTimeout(function() {
         myImage.setAttribute("src", "static/coffee_beans.jpg");
     }, 4000);
}