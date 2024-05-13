 // Script para cargar el encabezado y el pie de página 
    
        document.addEventListener("DOMContentLoaded", function() {
            // Cargar el encabezado común
            fetch("header.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("encabezado-comun").innerHTML = data;
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
    