<<<<<<< HEAD
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Validasi sederhana
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Simpan email ke file atau database
        $file = 'subscribers.txt'; // Ganti dengan database jika diperlukan
        file_put_contents($file, $email . PHP_EOL, FILE_APPEND);

        // Kirimkan pesan sukses
        echo 'Thank you for signing up! You will receive updates soon.';
    } else {
        echo 'Invalid email address.';
    }
} else {
    echo 'Invalid request method.';
}
?>

=======
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Validasi sederhana
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Simpan email ke file atau database
        $file = 'subscribers.txt'; // Ganti dengan database jika diperlukan
        file_put_contents($file, $email . PHP_EOL, FILE_APPEND);

        // Kirimkan pesan sukses
        echo 'Thank you for signing up! You will receive updates soon.';
    } else {
        echo 'Invalid email address.';
    }
} else {
    echo 'Invalid request method.';
}
?>

>>>>>>> 80f7195ffba54693bdca7adc608548219c7754e8
