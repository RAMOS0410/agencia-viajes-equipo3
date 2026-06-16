// Esperamos a que todo el documento HTML de Cerro Verde esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Buscamos el botón de volver usando su ID
    const botonVolver = document.getElementById("btnVolver");

    // 2. Si el botón existe en la página, le asignamos la función de regresar
    if (botonVolver) {
        botonVolver.addEventListener("click", () => {
            // Redirige al navegador de vuelta a la página principal (menú de inicio)
            window.location.href = "index.html";
        });
    }
});