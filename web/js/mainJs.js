
document.addEventListener("DOMContentLoaded", function () {

// SCROLL

console.log("Script executed!");
let navElement = document.querySelector("nav");
console.log("Nav element:", navElement);

let prevScrollpos = window.pageYOffset;
let prevScrollpos2 = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  let maxScrollPos = document.documentElement.scrollHeight - window.innerHeight;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0px";
  } else {
    document.querySelector("nav").style.top = "-115px";
  }
  prevScrollpos = currentScrollPos;

  

  prevScrollpos2 = currentScrollPos;
  if (currentScrollPos > window.innerHeight && currentScrollPos < maxScrollPos - window.innerHeight) {
    document.getElementById("scrollToTop").style.display = "block";
  } else {
    document.getElementById("scrollToTop").style.display = "none";
  }
}


//BURGUER

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.links-hamburguer').classList.toggle('show');
  });
  
  window.addEventListener('scroll', function() {
    var hamburgerMenuLines = document.querySelectorAll('.hamburger-menu div');
    if (window.scrollY > window.innerHeight) {
        hamburgerMenuLines.forEach(function(line) {
            line.classList.add('pink');
        });
    } else {
        hamburgerMenuLines.forEach(function(line) {
            line.classList.remove('pink');
        });
    }
  });
  
  var scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
      // Calculate scroll position
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;

      var hideThresholdStart = 100; // Disappear in the first 100vh
      var hideThresholdEnd = document.body.clientHeight - window.innerHeight - 750; // Reappear until the last 750vh
  
      // Toggle button visibility
      if (scrollPosition < hideThresholdStart || scrollPosition > hideThresholdEnd) {
          scrollToTopButton.style.display = "none";
      } else {
          scrollToTopButton.style.display = "block";
      }
  });

});


//REVEAL

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint && !reveals[i].classList.contains('revealed')) {
      reveals[i].classList.add('active', 'revealed');
    }
  }
}
