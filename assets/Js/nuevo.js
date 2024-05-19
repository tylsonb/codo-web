var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

var carousel = document.querySelector("[data-carousel]");
var slides = document.getElementsByClassName("carousel-cell");
var flkty = new Flickity(carousel, options);

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    image.style.backgroundPosition = x + "px center";
  });
});

// let prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   let currentScrollPos = window.scrollY;
//   if (currentScrollPos > prevScrollpos) {
//     document.getElementById("navbar").style.position = "fixed";
//   } else {
//     document.getElementById("navbar").classList.add = ("animate__animated animate__fadeIn");
//     document.getElementById("navbar").style.position = "static";

//   }};

window.addEventListener("scroll", function () {
  const menu = document.querySelector("#navbar");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#enlace')) {
    var dropdowns = document.getElementsByClassName("submenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", (event) => {
  const enlace = document.querySelector("#enlace");
  var hrefOriginal = enlace.href;
  const adjustLink = () => {
    const width = window.innerWidth;
    console.log(width);
    if (width > 700) {
      enlace.href = hrefOriginal;
    } else {
      enlace.href = "";
    }
  };

  // Use a single event listener, instead of a function that runs on every scroll event
  window.addEventListener("resize", adjustLink);
});
