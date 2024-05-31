<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "finalexam";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $bday = $_POST["bday"];
    $gender = $_POST["gender"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];

    $sql = "INSERT INTO user_info (firstname, lastname, bday, gender, email, password_original, confirm_password) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $firstname, $lastname, $bday, $gender, $email, $password, $confirmPassword);

    if ($stmt->execute()) {
    echo "New user registered successfully!";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
    $conn->close();

?>
