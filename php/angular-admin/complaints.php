<?php
include_once("dbcon.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{ echo('hi');
$request = json_decode($postdata);
$complaintType = trim($request->$complaintType);
$country = trim($request->country);
$complaint = trim($request->complaint);
$date = date("d/m/y");


    $sql_insert = "INSERT INTO complaints('complaintType','country','complaint','date','status') 
    VALUES ('$complaintType','$country ','$complaint','$date', 0)";
    if ($mysqli->query($sql_insert) === TRUE) {
    $authdata = [
    'complaintType' => $complaintType,
    'country' => $country,
    'complaint' => $complaint,
    'date' => $date,
    'status' => 0
    ];
    echo json_encode($authdata);
    }
    }



?>