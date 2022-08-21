<?php
    include 'config.php';

    $name = $_POST['name'];
    $msg = $_POST['msg'];
    
    $sql = "INSERT INTO msg (name, msg) VALUES ('$name', '$msg')";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo 1;
    }else {
        echo 0;
    }
?>