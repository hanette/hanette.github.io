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

// =============================
// Photo Slideshow
var myTimer;
var myTimerM;
var myTimerW;
var slideIndex = 1;
var slideIndexM = 1;
var slideIndexW = 1;
showSlides();
showSlidesM();
showSlidesW();

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    showSlidesM(slideIndexM);
    showSlidesW(slideIndexW);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
    myTimerM = setInterval(function(){plusSlidesM(1)}, 4000);
    myTimerW = setInterval(function(){plusSlidesW(1)}, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
    slideshowContainer.addEventListener('mouseenter', pauseM)
    slideshowContainer.addEventListener('mouseleave', resumeM)
    slideshowContainer.addEventListener('mouseenter', pauseW)
    slideshowContainer.addEventListener('mouseleave', resumeW)
})

// DESCENDANTS OF DRAGON slides ==================================
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1);
  }

  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slidedot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("slideactive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slideactive";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}

// Murdeer Slides ===================================
function showSlidesM(n){
  var i;
  var slides = document.getElementsByClassName("mySlidesM");
  var dots = document.getElementsByClassName("slidedotM");
  if (n > slides.length) {slideIndexM = 1}
  if (n < 1) {slideIndexM = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("slideactive", "");
  }
  slides[slideIndexM-1].style.display = "block";
  dots[slideIndexM-1].className += " slideactive";
}

function plusSlidesM(n){
  clearInterval(myTimerM);
  if (n < 0){
    showSlidesM(slideIndexM -= 1);
  } else {
   showSlidesM(slideIndexM += 1);
  }
  if (n == -1){
    myTimerM = setInterval(function(){plusSlidesM(n + 2)}, 4000);
  } else {
    myTimerM = setInterval(function(){plusSlidesM(n + 1)}, 4000);
  }
}

function currentSlide(n){
  clearInterval(myTimerM);
  myTimerM = setInterval(function(){plusSlidesM(n + 1)}, 4000);
  showSlidesM(slideIndexM = n);
}

pauseM = () => {
  clearInterval(myTimerM);
}

resumeM = () =>{
  clearInterval(myTimerM);
  myTimerM = setInterval(function(){plusSlidesM(slideIndexM)}, 4000);
}

// Where My Heart Is Slides
function showSlidesW(n){
  var i;
  var slides = document.getElementsByClassName("mySlidesW");
  var dots = document.getElementsByClassName("slidedotW");
  if (n > slides.length) {slideIndexW = 1}
  if (n < 1) {slideIndexW = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("slideactive", "");
  }
  slides[slideIndexW-1].style.display = "block";
  dots[slideIndexW-1].className += " slideactive";
}

function plusSlidesW(n){
  clearInterval(myTimerW);
  if (n < 0){
    showSlidesW(slideIndexW -= 1);
  } else {
   showSlidesW(slideIndexW += 1);
  }
  if (n == -1){
    myTimerW = setInterval(function(){plusSlidesW(n + 2)}, 4000);
  } else {
    myTimerW = setInterval(function(){plusSlidesW(n + 1)}, 4000);
  }
}

function currentSlide(n){
  clearInterval(myTimerW);
  myTimerW = setInterval(function(){plusSlidesW(n + 1)}, 4000);
  showSlidesW(slideIndexW = n);
}

pauseW = () => {
  clearInterval(myTimerW);
}

resumeW = () =>{
  clearInterval(myTimerM);
  myTimerM = setInterval(function(){plusSlidesM(slideIndexM)}, 4000);
}
