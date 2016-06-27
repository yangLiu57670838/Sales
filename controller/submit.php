<?php
include '../asset/php/connect.php';

$office = $_GET["team"];
$staff = $_GET["staff"];
$email = $_GET["email"];
$note = $_GET["note"];
$amount = $_GET["amount"];
$currency = $_GET["currency"];

$date = date("Y-m-d");

 $sqlU = "INSERT INTO sales (office, staff, customer_email, note, commission, currency, date, sales_status)
VALUES ('$office', '$staff', '$email', '$note', '$amount', '$currency', '$date', 'pending')";
    if (!mysql_query($sqlU)) {
        die('Error: ' . mysql_error());
    }        
        
        
        
 mysql_close();   





?>
