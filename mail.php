<?php error_reporting(E_ALL);

$fullname 	= 	$_REQUEST['fullname'];
$email		=	$_REQUEST['email'];
$phone		=	$_REQUEST['phone'];
$message	=	$_REQUEST['message'];

//We can insert this data to data or do any thing with it.

//for now we are going to send a email with it.

$to 		= 	"anil@isecuregadgets.com";
$subject	=	"Contact email";
$msg        =   "Hi admin,";	
$msg        .=   "You recieved a email from following user:";
$msg        .=   "Full Name : ".$fullname;	
$msg        .=   "Email 	: ".$email;	
$msg        .=   "Phone 	: ".$phone;	
$msg        .=   "Message 	: ".$message;	

//Header------------------------------
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@test.com>' . "\r\n";

if(mail($to,$subject,$msg,$headers)){
	echo '1';
}else{
	echo '0';
}