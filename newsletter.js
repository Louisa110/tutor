<<<<<<< HEAD
document.getElementById('signupButton').addEventListener('click', function (e) {
    e.preventDefault();  // Mencegah reload halaman
    let emailInput = document.getElementById('emailInput');
    let email = emailInput.value;

    if (validateEmail(email)) {
        // Kirim email ke server PHP
        fetch('subscribe.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'email=' + encodeURIComponent(email)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            alert(data);  // Menampilkan pesan dari server
            emailInput.value = '';  // Mengosongkan input setelah berhasil
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem with the request.');  // Tampilkan pesan error
        });
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
=======
document.getElementById('signupButton').addEventListener('click', function (e) {
    e.preventDefault();  // Mencegah reload halaman
    let emailInput = document.getElementById('emailInput');
    let email = emailInput.value;

    if (validateEmail(email)) {
        // Kirim email ke server PHP
        fetch('subscribe.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'email=' + encodeURIComponent(email)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            alert(data);  // Menampilkan pesan dari server
            emailInput.value = '';  // Mengosongkan input setelah berhasil
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem with the request.');  // Tampilkan pesan error
        });
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
>>>>>>> 80f7195ffba54693bdca7adc608548219c7754e8
