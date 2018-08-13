/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
*/

alert("hi");

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("topnav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}