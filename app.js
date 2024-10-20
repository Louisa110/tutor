function addToCart(musicianName, price) {
    const timeOption = document.getElementById('time-option').value;
    const quantity = document.getElementById('quantity').value;

    console.log('Time option:', timeOption);
    console.log('Quantity:', quantity);

    const totalCost = price * timeOption * quantity;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ musicianName, price, timeOption, quantity, totalCost });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${musicianName} has been added to the cart!`);
}