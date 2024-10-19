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
