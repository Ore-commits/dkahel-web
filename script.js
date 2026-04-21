/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Mensaje de bienvenida sin tocar diseño
window.onload = function() {
    console.log("🍰 D'KAHEL cargado correctamente");

    // mensaje opcional
    alert("Bienvenido a D'KAHEL 🍰 Postres hechos con amor");
};
function enviarWhatsApp() {
    let hora = new Date().getHours();

    if (hora >= 22 || hora < 11) {
        alert("⛔ No estamos atendiendo ahora. Horario: 11:00 AM - 10:00 PM");
        return;
    }

    window.open("https://wa.me/51999016622", "_blank");
}

function actualizarEstado() {
    let hora = new Date().getHours();
    let estado = document.getElementById("estado-tienda");

    if (hora >= 11 && hora < 22) {
        estado.textContent = "🟢 ABIERTO";
        estado.classList.add("abierto");
        estado.classList.remove("cerrado");
    } else {
        estado.textContent = "🔴 CERRADO";
        estado.classList.add("cerrado");
        estado.classList.remove("abierto");
    }
}

actualizarEstado();