
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
 var elemento = document.getElementById("enlace").innerHTML;
 var cambio = elemento.replace("&#8593;","&#8595;");
 document.getElementById("enlace").innerHTML = cambio;
}
function dropdown2() {
  const miCheckbox = document.getElementById('menu-toggle');
  miCheckbox.checked = false;
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
$(function () {
  $('#vidBox').VideoPopUp({ 
   	backgroundColor: "#17212a",
   	opener: "video1",
    maxweight: "640",
    idvideo: "v1"
  });
 });