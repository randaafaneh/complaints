<?php
header("Access-Control-Allow-Origin: *");
include_once("dbcon.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$firstName = trim($request->firstName);
$lastName = trim($request->lastName);
$password = mysqli_real_escape_string($mysqli, trim($request->password));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
// $sql = "Select * from users where email='$email'"; 
    
// $result = mysqli_query($conn, $sql); 

// $num = mysqli_num_rows($result); 
// if ($num !== 0) {
//     echo '<script> window.alert("Email not available") </script> ' ;
// }
// else{
    $hash = password_hash($password, PASSWORD_DEFAULT); 
    $sql_insert = "INSERT INTO users(firstName,lastName,password,email, accountType) 
    VALUES ('$firstName','$lastName','$hash','$email', 1)";
    if ($mysqli->query($sql_insert) === TRUE) {
    $authdata = [
    'firstName' => $firstName,
    'lastName' => $lastName,
    'password' => '$password',
    'email' => $email,
    'id' => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
    }
    }
// }


?>