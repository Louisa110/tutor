<<<<<<< HEAD
// Array to hold booked musicians and their prices
let bookedMusicians = [];
let bookingSubtotal = 0;

// Function to add a musician to the cart
function addToCart(musicianName, price) {
    // Add musician to the booked array if not already booked
    if (!bookedMusicians.includes(musicianName)) {
        bookedMusicians.push(musicianName); // Add musician name to the array
        bookingSubtotal += price; // Update subtotal
        displayBookedMusicians(bookedMusicians); // Update the display
        updateTotals(); // Update the totals displayed
    } else {
        alert(musicianName + " is already in the cart.");
    }
}

// Function to display booked musicians in the table
function displayBookedMusicians(musicians) {
    const musicianListCell = document.getElementById('musician-list');
    musicianListCell.innerHTML = ''; // Clear the cell before adding new names

    if (musicians.length === 0) {
        musicianListCell.innerHTML = 'No musicians booked'; // Optional message when no musicians are booked
    } else {
        musicians.forEach(musician => {
            musicianListCell.innerHTML += musician + '<br>'; // Append each musician name with a line break
        });
    }
}

// Function to update the totals displayed
function updateTotals() {
    document.getElementById('booking-subtotal').innerText = 'Rp. ' + bookingSubtotal.toLocaleString();
    document.getElementById('total').innerText = 'Rp. ' + bookingSubtotal.toLocaleString(); // Total is the same as subtotal for now
}

// Function to clear the cart
function clearCart() {
    bookedMusicians = [];
    bookingSubtotal = 0;
    displayBookedMusicians(bookedMusicians); // Update the display
    updateTotals(); // Reset the totals displayed
=======
// Array to hold booked musicians and their prices
let bookedMusicians = [];
let bookingSubtotal = 0;

// Function to add a musician to the cart
function addToCart(musicianName, price) {
    // Add musician to the booked array if not already booked
    if (!bookedMusicians.includes(musicianName)) {
        bookedMusicians.push(musicianName); // Add musician name to the array
        bookingSubtotal += price; // Update subtotal
        displayBookedMusicians(bookedMusicians); // Update the display
        updateTotals(); // Update the totals displayed
    } else {
        alert(musicianName + " is already in the cart.");
    }
}

// Function to display booked musicians in the table
function displayBookedMusicians(musicians) {
    const musicianListCell = document.getElementById('musician-list');
    musicianListCell.innerHTML = ''; // Clear the cell before adding new names

    if (musicians.length === 0) {
        musicianListCell.innerHTML = 'No musicians booked'; // Optional message when no musicians are booked
    } else {
        musicians.forEach(musician => {
            musicianListCell.innerHTML += musician + '<br>'; // Append each musician name with a line break
        });
    }
}

// Function to update the totals displayed
function updateTotals() {
    document.getElementById('booking-subtotal').innerText = 'Rp. ' + bookingSubtotal.toLocaleString();
    document.getElementById('total').innerText = 'Rp. ' + bookingSubtotal.toLocaleString(); // Total is the same as subtotal for now
}

// Function to clear the cart
function clearCart() {
    bookedMusicians = [];
    bookingSubtotal = 0;
    displayBookedMusicians(bookedMusicians); // Update the display
    updateTotals(); // Reset the totals displayed
>>>>>>> 80f7195ffba54693bdca7adc608548219c7754e8
}