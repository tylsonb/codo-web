 // Script para cargar el encabezado y el pie de página 
    function toggleMenu() {
    const menuList = document.querySelector('.menu-list'); // Selecciona la lista de menú
    const menuBtn = document.querySelector('.hamburguesa'); // Selecciona el botón de hamburguesa

    menuList.classList.toggle('active'); // Alterna la clase 'active' para mostrar u ocultar el menú
    menuBtn.classList.toggle('menu-active'); // Alterna la clase 'menu-active' para cambiar el icono de hamburguesa a X
}
        
        document.addEventListener("DOMContentLoaded", function() {
            // Cargar el encabezado común
            fetch("header.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("encabezado-comun").innerHTML = data;
                    initializeMenu();
                })
                .catch(error => {
                    console.error("Error al cargar el encabezado:", error);
                });

            // Cargar el pie de página común
            fetch("footer.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("pie-de-pagina-comun").innerHTML = data;
                })
                .catch(error => {
                    console.error("Error al cargar el pie de página:", error);
                });
        });


        function initializeMenu() {
            // Código del menú responsivo
            var menuItems = document.querySelectorAll('.menu_item');
        
            menuItems.forEach(function(item) {
                item.addEventListener('click', function() {
                    var isActive = this.classList.contains('active');
        
                    menuItems.forEach(function(menuItem) {
                        menuItem.classList.remove('active');
                    });
        
                    if (!isActive) {
                        this.classList.add('active');
                    }
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
        
            // Código para el menú de hamburguesa
            const hamburguesa = document.querySelector('.hamburguesa');
            const menuList = document.querySelector('.menu-list');
        
            if (hamburguesa) {
                hamburguesa.addEventListener('click', function() {
                    hamburguesa.classList.toggle('menu-active');
                    menuList.classList.toggle('show');
                });
            }
        }

        
    