document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario
    var form = document.getElementById("contactForm");

    // Escuchar el evento de envío del formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Limpiar todos los campos del formulario
        form.reset();

        // Mostrar mensaje de confirmación
        alert("Formulario enviado. Le respondemos en aproximadamente 24 horas.");
    });
});
