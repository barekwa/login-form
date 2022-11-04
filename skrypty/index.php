<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="sc">
</head>
<body>
    <form action="login.php" method="POST">
        <label for="login">Login: </label><input type="text" name="login" required><br>
        <label for="password">Hasło: </label><input type="text" name="password" required><br>
        <button type="submit">Wyślij</button><br>
    </form>
    <form action="new-account.php" method="post">
            <label for="addUser">Nie masz konta?</label>
            <button type="submit">Załóż konto</button>
    </form>
</body>
</html>
