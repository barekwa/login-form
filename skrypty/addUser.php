<?php 
    $dbc = mysqli_connect("localhost", "root", "", "users");
    if(mysqli_connect_errno()){
        echo "Błąd łączenia z bazą" . mysqli_connect_error();
        exit();
    }
    else{
        $login = $_POST["login"];
        $pass = $_POST["password"];
        $pass = password_hash($pass, PASSWORD_DEFAULT);
        $checkUsernameAvailability = $dbc->prepare("SELECT * FROM login_information WHERE login LIKE ?");
        $checkUsernameAvailability->bind_param('s',$login);
        $checkUsernameAvailability->execute();
        $checkUsernameAvailability->store_result();
        if($checkUsernameAvailability->num_rows === 0){
            $addUser = $dbc->prepare("INSERT INTO login_information VALUES (?,?)");
            $addUser->bind_param('ss',$login,$pass);
            $addUser->execute();
            echo "Dodano uzytkownika";
        }
        else{
            echo "err";
        }
        $dbc->close();
    }
?>