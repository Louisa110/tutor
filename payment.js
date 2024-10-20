<<<<<<< HEAD
document.getElementById('proceedToPayButton').addEventListener('click', function() {
    fetch('get_payment_methods.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('paymentMethods').innerHTML = data; // Isi div dengan data
            document.getElementById('paymentModal').style.display = 'block'; // Tampilkan modal
        })
        .catch(error => console.error('Error:', error));
});

// Tutup modal saat klik 'x'
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('paymentModal').style.display = 'none'; // Sembunyikan modal
});

// Konfirmasi pembayaran saat tombol diklik
document.getElementById('confirmPayment').addEventListener('click', function() {
    const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentDetails = document.getElementById('paymentDetails');
    const invoice = document.getElementById('invoice');
    const totalAmount = document.getElementById('total').innerText; // Ambil nilai dari elemen total

    // Menghapus "Rp. " dari totalAmount agar hanya mengambil nilai numeriknya
    const amountOnly = totalAmount.replace('Rp. ', '').replace('.', '').trim(); 

    if (selectedMethod) {
        paymentDetails.innerHTML = ''; // Kosongkan isi sebelumnya

        // Menampilkan detail pembayaran
        if (selectedMethod.value === 'Transfer Bank') {
            paymentDetails.innerHTML = '<p>Silakan transfer ke rekening: <strong>123-456-789</strong></p>'; // Tampilkan nomor rekening
            invoice.style.display = 'block'; // Tampilkan invoice
            invoice.innerHTML = `<h4>Invoice Pembayaran</h4>
                                <p>Metode Pembayaran: <strong>${selectedMethod.value}</strong></p>
                                <p>Jumlah: <strong>Rp. ${amountOnly}</strong></p>
                                <p>Status: <strong>Menunggu Konfirmasi</strong></p>`;
        } else if (selectedMethod.value === 'QRIS') {
            paymentDetails.innerHTML = '<p>Scan QR Code di bawah ini:</p><img src="Image/Qris.png" alt="QR Code" style="width:100%; height:auto;">'; // Tampilkan QR code
            invoice.style.display = 'block'; // Tampilkan invoice
            invoice.innerHTML = `<h4>Invoice Pembayaran</h4>
                                <p>Metode Pembayaran: <strong>${selectedMethod.value}</strong></p>
                                <p>Jumlah: <strong>Rp. ${amountOnly}</strong></p>
                                <p>Status: <strong>Menunggu Konfirmasi</strong></p>`;
        } else if (selectedMethod.value === 'Cash') {
            paymentDetails.innerHTML = '<p>Anda memilih pembayaran Cash. Terima kasih!</p>'; // Pesan untuk cash
            invoice.style.display = 'block'; // Tampilkan invoice
            invoice.innerHTML = `<h4>Invoice Pembayaran</h4>
                                <p>Metode Pembayaran: <strong>${selectedMethod.value}</strong></p>
                                <p>Jumlah: <strong>Rp. ${amountOnly}</strong></p>
                                 <p>Status: <strong>Pembayaran Sukses</strong></p>`; // Status untuk cash
        }
    } else {
        alert('Silakan pilih metode pembayaran!');
    }
=======
document.getElementById('proceedToPayButton').addEventListener('click', function() {
    fetch('get_payment_methods.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('paymentMethods').innerHTML = data; // Isi div dengan data
            document.getElementById('paymentModal').style.display = 'block'; // Tampilkan modal
        })
        .catch(error => console.error('Error:', error));
});

// Tutup modal saat klik 'x'
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('paymentModal').style.display = 'none'; // Sembunyikan modal
});

// Konfirmasi pembayaran saat tombol diklik
document.getElementById('confirmPayment').addEventListener('click', function() {
    const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentDetails = document.getElementById('paymentDetails');
    const invoice = document.getElementById('invoice');
    const totalAmount = document.getElementById('total').innerText; // Ambil nilai dari elemen total

    // Menghapus "Rp. " dari totalAmount agar hanya mengambil nilai numeriknya
    const amountOnly = totalAmount.replace('Rp. ', '').replace('.', '').trim(); 

    if (selectedMethod) {
        paymentDetails.innerHTML = ''; // Kosongkan isi sebelumnya

        // Menampilkan detail pembayaran
        if (selectedMethod.value === 'Transfer Bank') {
            paymentDetails.innerHTML = '<p>Silakan transfer ke rekening: <strong>123-456-789</strong></p>'; // Tampilkan nomor rekening
            invoice.style.display = 'block'; // Tampilkan invoice
            invoice.innerHTML = `<h4>Invoice Pembayaran</h4>
                                <p>Metode Pembayaran: <strong>${selectedMethod.value}</strong></p>
                                <p>Jumlah: <strong>Rp. ${amountOnly}</strong></p>
                                <p>Status: <strong>Menunggu Konfirmasi</strong></p>`;
        } else if (selectedMethod.value === 'QRIS') {
            paymentDetails.innerHTML = '<p>Scan QR Code di bawah ini:</p><img src="Image/Qris.png" alt="QR Code" style="width:100%; height:auto;">'; // Tampilkan QR code
            invoice.style.display = 'block'; // Tampilkan invoice
            invoice.innerHTML = `<h4>Invoice Pembayaran</h4>
                                <p>Metode Pembayaran: <strong>${selectedMethod.value}</strong></p>
                                <p>Jumlah: <strong>Rp. ${amountOnly}</strong></p>
                                <p>Status: <strong>Menunggu Konfirmasi</strong></p>`;
        } else if (selectedMethod.value === 'Cash') {
            paymentDetails.innerHTML = '<p>Anda memilih pembayaran Cash. Terima kasih!</p>'; // Pesan untuk cash
            invoice.style.display = 'block'; // Tampilkan invoice
            invoice.innerHTML = `<h4>Invoice Pembayaran</h4>
                                <p>Metode Pembayaran: <strong>${selectedMethod.value}</strong></p>
                                <p>Jumlah: <strong>Rp. ${amountOnly}</strong></p>
                                 <p>Status: <strong>Pembayaran Sukses</strong></p>`; // Status untuk cash
        }
    } else {
        alert('Silakan pilih metode pembayaran!');
    }
>>>>>>> 80f7195ffba54693bdca7adc608548219c7754e8
});