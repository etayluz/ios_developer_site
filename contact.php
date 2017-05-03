<?php

//tail -f /var/log/apache2/error_log
  $email_to = "etayluz@gmail.com";
  $email_subject = "New Contact";
  error_log("here");
  $name = $_POST['contactName'];
  $email_from = $_POST['email'];
  $email_message = "Name: ".$name."\n\n".$_POST['comments'];
  error_log($email_message);
  // create email headers
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();

  // send email
  // @mail($email_to, $email_subject, $email_message, $headers);
?>