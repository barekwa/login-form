const log = document.querySelector(".login");
const pass = document.querySelector(".pass");
const passRepeat = document.querySelector(".pass-repeat");
const numReg = /[0-9]/g;
const specialCharReg = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
let validation = () => {
    if(pass.value!==passRepeat.value){
        alert("Hasła muszą być identyczne");
        return false;
    }
    else if(pass.value.length<8){
        alert("Hasło jest za krótkie");
        return false;
    }
    else if(pass.value.search(numReg)===-1){
        alert("Hasło musi posiadać przynajmniej jedną cyfrę");
        return false;
    }
    else if(pass.value.search(specialCharReg)===-1){
        alert("Hasło musi posiadać przynajmniej jeden znak specjalny");
        return false;
    }
    else{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = () => {
            if(xmlhttp.status === 200){
                if(xmlhttp.responseText=="err")
                    alert("Podana nazwa uzytkownika jest zajeta");
                else{
                    alert("Utworzono konto");
                }
            }
            if(xmlhttp.status === 404){
                alert("Błąd połaczenia z bazą")
            }
        }
        xmlhttp.open("POST","addUser.php",true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlhttp.send(`login=${log.value}&password=${pass.value}`);
    }
}
document.querySelector("button").addEventListener("click", validation);



