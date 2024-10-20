window.onload = function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const bookingSubtotal = document.getElementById('booking-subtotal');
    const total = document.getElementById('total');
    let cartHtml = '';

    let subtotal = 0;

    // Loop through the cart items and generate HTML
    cart.forEach(item => {
        subtotal += item.totalCost;

        cartHtml += `
            <tr>
                <td>${item.musicianName} (x${item.quantity} for ${item.timeOption} hours)</td>
                <td>Rp. ${item.totalCost.toLocaleString()}</td>
            </tr>
        `;
    });

    // Update cart table
    bookingSubtotal.innerHTML = `Rp. ${subtotal.toLocaleString()}`;
    total.innerHTML = `Rp. ${subtotal.toLocaleString()}`;
    
    // Clear cart function
    const clearCart = document.getElementById('clear-cart'); // Assuming you have a button with id 'clear-cart'
    clearCart.onclick = function() {
        localStorage.removeItem('cart'); // Clear local storage
        cart = []; // Reset cart array
        subtotal = 0; // Reset subtotal

        // Update HTML to reflect empty cart
        bookingSubtotal.innerHTML = 'Rp. 0';
        total.innerHTML = 'Rp. 0';
        
        // Clear cart table (if needed)
        cartHtml = '';
        // Append cartHtml to the cart table body if needed
    };
};