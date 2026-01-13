// selecting side_navbar
var sidenavbar = document.querySelector(".side_navbar");

function shownavbar() {
    sidenavbar.style.left = "0";
}

function closenavbar() {
    sidenavbar.style.left = "-50%";
}

// selecting search box
var searchbox = document.querySelector(".navbar-search");
var header = document.querySelector(".header");
var headercontainer = document.querySelector(".header-container");

searchbox.addEventListener("keyup", function () {
    var searchvalue = event.target.value.toUpperCase();

    for(count<0;count<headercontainer.leangth;count++){
        var productname = 
});
