<?php 
    $user = 'root';
    $password = '';
    try{
        $data = trim(file_get_contents("php://input"));
        $tab = json_decode($data, true);
        $login = $tab["login"];
        $pass = $tab["password"];
        $pass = password_hash($pass, PASSWORD_DEFAULT);
        $dbc = new PDO('mysql:host=localhost;dbname=users',$user,$password);
        $result = $dbc->prepare("SELECT * FROM login_information WHERE login LIKE ?");
        $result->execute([$login]);
        if($result->rowCount()===0){
            $result = $dbc->prepare("INSERT INTO login_information VALUES(?,?)");
            $result->execute([$login, $pass]);
            echo json_encode(array("succes"=>"true"));
        }
        else{
            echo json_encode(array("succes"=>"false"));
        }
        die();
    }
    catch(PDOException $e){
        print "Error" . $e->getMessage();
        die();
    }
?>