document.getElementById('validateButton').addEventListener('click', function() {
    const couponCode = document.getElementById('couponCode').value.trim();
    const messageElement = document.getElementById('message');

    // Lista de cupones válidos
    const validCoupons = ['DESCUENTO10', 'AHORRA20', 'OFERTA30'];

    if (validCoupons.includes(couponCode)) {
        messageElement.textContent = '¡Cupón válido! ¡Disfruta tu descuento!';
        messageElement.className = 'green';
    } else {
        messageElement.textContent = 'Cupón no válido. Intenta de nuevo.';
        messageElement.className = 'red';
    }
});


// const slider = document.getElementById("slider");
//     let indiceActual = 0;

//     function cambiarImagen() {
//       indiceActual = (indiceActual + 1) % 3; // Avanza y reinicia el ciclo si es necesario
//       const desplazamiento = indiceActual * 400; // Ancho de cada imagen
//       slider.style.transform = `translateX(-${desplazamiento}px)`;
//     }

//     // Cambia la imagen cada 3 segundos
//     setInterval(cambiarImagen, 3000);
const slider = document.getElementById("slider");
let indiceActual = 0;

function cambiarBanner() {
  indiceActual = (indiceActual + 1) % 3; // Avanzar y reiniciar si llega al final
  const desplazamiento = indiceActual * 39; // Desplazamiento en porcentaje
  slider.style.transform = `translateX(-${desplazamiento}%)`;
}

// Cambia el banner cada 3 segundos
setInterval(cambiarBanner, 3000);