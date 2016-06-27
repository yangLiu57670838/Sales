<?php
include '../asset/php/connect.php';

$office = $_GET["team"];
$staff = $_GET["staff"];
$salesAmount = $_GET["salesAmount"];
$day = $_GET["day"];


$date = date("Y-m-d");

 $sqlU = "INSERT INTO sales_presentation (office, staff, attend_day, presentation, submission_date, status)
VALUES ('$office', '$staff', '$day', '$salesAmount', '$date', 'pending')";
    if (!mysql_query($sqlU)) {
        die('Error: ' . mysql_error());
    }        
        
        
        
 mysql_close();   





?>
