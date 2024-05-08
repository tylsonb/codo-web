

function toggleMenu() {
  const menuList = document.querySelector('.menu-list'); // Selecciona la lista de menú
  const menuBtn = document.querySelector('.hamburguesa'); // Selecciona el botón de hamburguesa

  menuList.classList.toggle('active'); // Alterna la clase 'active' para mostrar u ocultar el menú
  menuBtn.classList.toggle('menu-active'); // Alterna la clase 'menu-active' para cambiar el icono de hamburguesa a X
}


document.addEventListener("DOMContentLoaded", function() {
const carousel = document.querySelector('.carousel');
const inner = document.querySelector('.carousel-inner');
const nav = document.querySelector('.carousel-nav');
const images = document.querySelectorAll('.carousel-inner img');

const imageCount = images.length;
const imageWidth = images[0].clientWidth;
let currentIndex = 0;

// Ocultar todas las imágenes excepto la primera al inicio
for (let i = 1; i < imageCount; i++) {
    images[i].classList.remove('active');
}

// Agregar botones de navegación
for (let i = 0; i < imageCount; i++) {
    const button = document.createElement('button');
    button.classList.add('nav-btn');
    if (i === 0) button.classList.add('active');
    nav.appendChild(button);
    button.addEventListener('click', () => showImage(i));
}

// Función para mostrar la siguiente imagen
function showNextImage() {
    const nextIndex = (currentIndex + 1) % imageCount;
    showImage(nextIndex);
}

// Función para mostrar una imagen
function showImage(index) {
    const offset = -index * imageWidth;
    inner.style.transform = `translateX(${offset}px)`;
    // Actualizar clase activa para los botones de navegación
    const buttons = document.querySelectorAll('.carousel-nav button');
    buttons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    currentIndex = index;
}

// Mostrar la siguiente imagen automáticamente cada 5 segundos
setInterval(showNextImage, 10000);
});

/* sub-menu responsive */

document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll('.menu_item');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var isActive = this.classList.contains('active');
      
      // Remover la clase 'active' de todos los elementos del menú
      menuItems.forEach(function(menuItem) {
        menuItem.classList.remove('active');
      });

      // Agregar o quitar la clase 'active' al elemento clicado
      if (!isActive) {
        this.classList.add('active');
      }
    });
  });
});
 


document.querySelectorAll('.seleccionado_item').forEach(item => {
  item.addEventListener('click', function() {
      const submenu = this.parentElement.querySelector('.submenu');
      // Alternar la clase 'show' para mostrar u ocultar el submenú
      submenu.classList.toggle('show');
  });

  // Cerrar el submenú cuando se pierde el foco
  item.addEventListener('blur', function() {
      const submenu = this.parentElement.querySelector('.submenu');
      submenu.classList.remove('show');
  });

  // Cerrar el submenú después de hacer clic en una opción
  const submenuItems = item.parentElement.querySelector('.submenu-lista').querySelectorAll('li');
  submenuItems.forEach(submenuItem => {
      submenuItem.addEventListener('click', function() {
          const submenu = this.closest('.submenu');
          submenu.classList.remove('show');
      });
  });
});

/*  menu flotante*/

document.addEventListener("DOMContentLoaded", function() {
var menuFlotante = document.querySelector(".menu-flotante");

// Mostrar el menú flotante al cargar la página
menuFlotante.style.right = "0";
menuFlotante.classList.add("visible");

// Al pasar el mouse, mostrar los nombres de las opciones
menuFlotante.addEventListener("mouseenter", function() {
    menuFlotante.classList.add("expandir");
});

// Al alejar el mouse, ocultar los nombres de las opciones
menuFlotante.addEventListener("mouseleave", function() {
    menuFlotante.classList.remove("expandir");
});
});









function redireccionar(url) {
  // Redireccionar a otra página
  window.location.href = url;
}





