<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $project_name = htmlspecialchars($_POST["project_name"]);
    $admin_email = htmlspecialchars($_POST["admin_email"]);
    $form_subject = htmlspecialchars($_POST["form_subject"]);
    $name = htmlspecialchars($_POST["Name"]);
    $email = htmlspecialchars($_POST["Email"]);
    $subject = htmlspecialchars($_POST["Subject"]);
    $option = htmlspecialchars($_POST["option"]);
    $message = htmlspecialchars($_POST["Message"]);

    $email_message = "
        <html>
        <body>
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Option:</strong> $option</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$admin_email>" . "\r\n";

    if (mail($admin_email, $form_subject, $email_message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
}
?>
