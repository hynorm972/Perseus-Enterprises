<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $contact_number = $_POST['contact_number'];
    $city = $_POST['city'];
    $message = $_POST['message'];

    // Validate form data
    if (!empty($name) && !empty($email) && !empty($contact_number) && !empty($message)) {
        // Prepare email
        $to = "your-email@example.com"; // Change this to your email address
        $subject = "New Contact Us Form Submission";
        $body = "Name: $name\nEmail: $email\nCompany: $company\nContact Number: $contact_number\nCity: $city\nMessage:\n$message";
        $headers = "From: $email";

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you for contacting us. We will get back to you shortly.";
        } else {
            echo "Sorry, something went wrong. Please try again later.";
        }
    } else {
        echo "Please fill in all required fields.";
    }
} else {
    echo "Invalid request.";
}
?>
