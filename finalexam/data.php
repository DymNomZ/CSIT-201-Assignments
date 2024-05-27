<?php

    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $bday = $_POST["bday"];
    $gender = $_POST["gender"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];

    echo "test = {$firstname}";

    $host = 'localhost';
    $user = 'root';
    $password = '';
    $db_name = 'finalexam';

    $conn = mysqli_connect($host , $user , $password , $db_name);

    if(mysqli_connect_errno()){
        die("Failed to connect with MySQL :".mysqli_connect_errno());
    }

    $sql = "INSERT INTO user_info (firstname, lastname, bday, gender, email, password_original, confirm_password)
    VALUES ('$firstname', '$lastname', '$bday', '$gender', '$email', '$password', '$confirmPassword')";

    if ($conn->query($sql) === TRUE){
    } else {
    }
?>