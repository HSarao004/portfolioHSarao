<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['user_name'];
    $number = $_POST['user_number'];
    $email = $_POST['user_email'];
    $message = $_POST['user_message'];

    $to = "hsarao2004@gmail.com";
    $subject = "New Message from Portfolio Contact Form";
    $body = "Name: $name\nPhone Number: $number\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
}
?>
