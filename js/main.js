// =============================
// Scrolling navigation bar

// When the user scrolls the page, execute myFunctionSticky
window.onscroll = function() {myFunctionSticky()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunctionSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Responsive Navbar
function SmallNavbar() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// =============================
// Modal and Close span
var modal = document.getElementById("homeModal");
var span = document.getElementsByClassName("close")[0];
function modalClose(){
   modal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
