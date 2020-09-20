<?php 

$name = $_POST['firstname'];
$mobile = $_POST['Tel'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'rakoth-gri@yandex.ru';                 // Наш логин
$mail->Password = '5agu7by5';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('rakoth-gri@yandex.ru', 'RAMIL_SITE');   // От кого письмо 
$mail->addAddress('galievi.f@yandex.ru');     // Add a recipient
// $mail->addAddress('info@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');    // Add attachments
$mail->addAttachment('../img/Inspiration.jpg', 'Our dude.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Автоматическая рассылка почты от пацанов из Челябинска';
$mail->Body    = '
	Ебануть этот скрипт нас вдохновил этот нигер-пацанчик из Америки. <br>
	Мы рады что в Пиндостане, есть нормальные Пацанята, а не только Гомики и чертафаны!!! <br>
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $mobile . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>