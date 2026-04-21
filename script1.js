/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


console.log("Productos D'KAHEL cargados 🍰");
function enviarWhatsApp(mensaje) {
    let hora = new Date().getHours();

    if (hora < 11 || hora >= 22) {
        alert("⛔ Nuestro horario es de 11:00 AM a 10:00 PM");
        return;
    }

    let url = "https://wa.me/51919495679?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}