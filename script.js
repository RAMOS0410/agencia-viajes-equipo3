// Esperamos a que todo el documento HTML esté cargado en el navegador
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Obtenemos las referencias del formulario y del contenedor del mensaje
    const formulario = document.getElementById("tourForm");
    const mensajeExito = document.getElementById("mensajeExito");

    // 2. Escuchamos el evento de envío (submit) del formulario
    formulario.addEventListener("submit", (evento) => {
        // Evitamos que la página se recargue automáticamente
        evento.preventDefault(); 

        // 3. Capturamos los valores ingresados por el usuario
        const nombreUsuario = document.getElementById("nombre").value.trim();
        const telefonoUsuario = document.getElementById("telefono").value.trim();
        const destinoSeleccionado = document.getElementById("destino").value;

        // 4. Validación rápida por seguridad
        if (nombreUsuario === "" || telefonoUsuario === "") {
            mensajeExito.style.color = "red";
            mensajeExito.style.fontWeight = "bold";
            mensajeExito.innerHTML = "Por favor, rellena todos los campos obligatorios.";
            return;
        }

        // 5. Aplicamos estilos al mensaje de éxito e insertamos el texto dinámico
        mensajeExito.style.color = "#198754"; // Color verde de éxito
        mensajeExito.style.fontWeight = "bold";
        mensajeExito.style.marginTop = "15px";
        mensajeExito.style.padding = "10px";
        mensajeExito.style.backgroundColor = "#e8f5e9";
        mensajeExito.style.borderRadius = "5px";
        mensajeExito.style.display = "block";
        
        mensajeExito.innerHTML = `¡Excelente, ${nombreUsuario}! Tu reservación para tu destino <strong>${destinoSeleccionado}</strong> ha sido completado con exito.
         Pronto nos comunicaremos contigo vía WhatsApp.`;

        // 6. Reseteamos el formulario para que quede limpio para otra reserva
        formulario.reset();
    });
});