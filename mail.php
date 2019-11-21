<?php
if(isset($_POST['email'])) {

    $email_to = "hanette2000@yahoo.com";
    $email_subject = "WEBSITE MESSAGE: $request from $fname $lname";

    function died($error) {
       // your error code can go here
       echo "We are very sorry, but there were error(s) found with the form you submitted. ";
       echo "These errors appear below.<br /><br />";
       echo $error."<br /><br />";
       echo "Please go back and fix these errors.<br /><br />";
       die();
   }

   // validation expected data exists
    if(!isset($_POST['fname']) ||
        !isset($_POST['lname']) ||
        !isset($_POST['mail']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['mail'];
    $request = $_POST['subject'];
    $message = $_POST['message'];

    // check if theres errors
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if(!preg_match($email_exp,$email)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if(!preg_match($string_exp,$fname)) {
        $error_message .= 'The First Name you entered does not appear to be valid.<br />';
    }

    if(!preg_match($string_exp,$lname)) {
        $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
    }

    if(strlen($error_message) > 0) {
        died($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $email_message .= "First Name: ".clean_string($fname)."\n";
    $email_message .= "Last Name: ".clean_string($lname)."\n";
    $email_message .= "Email: ".clean_string($mail)."\n";
    $email_message .= "Subject: ".clean_string($subject)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";

    // create email headers
    $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $send = mail($email_to, $email_subject, $email_message, $headers);
    if($send){
        echo "<br>";
        echo "Your message has been sent!";
    }
}
?>
<!DOCTYPE html>
<html>
<!-- include your own success html here -->
<body>
    Thank you for contacting us. We will be in touch with you very soon.
</body>
</html>
<?php

}
?>
