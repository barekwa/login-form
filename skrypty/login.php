<?php
    $user = 'root';
    $password = '';
    try{
        $log = $_POST['login'];
        $pass = $_POST['password'];
        $dbc = new PDO('mysql:host=localhost;dbname=users',$user,$password);
        $result = $dbc->prepare("SELECT * FROM login_information WHERE login LIKE ?");
        $result->execute([$log]);
        $tab = $result->fetchAll();
        if(password_verify($pass, $tab[0]['password'])==true){
            echo "Zalogowano pomyślnie";
        }
        else{
            echo "Blad logowania";
        }
        die();
    }
    catch(PDOException $e){
        print "Error" . $e->getMessage();
        die();
    }
?>