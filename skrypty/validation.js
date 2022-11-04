const log = document.querySelector(".login");
const pass = document.querySelector(".pass");
const passRepeat = document.querySelector(".pass-repeat");
const numReg = /[0-9]/g;
const specialCharReg = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
const form = document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
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
        const login = log.value;
        const password = pass.value;
        const url = "http://localhost/skrypty/addAccount.php";
        const data = {login: login, password: password};
        fetch(url,{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
            body: JSON.stringify(data)
        }).then(Response => {
            if(Response.status===200){
                Response.json().then(data => {
                    if(data["succes"]==="true"){
                        alert("Utworzono konto");
                        setTimeout(() => {
                            window.location.href = "index.php";
                        },3000)
                    }
                    else if(data["succes"]==="false")
                        alert("Podana nazwa uzytkownika jest zajeta");
                })
            }
            else{
                throw Error;
            }
        }).catch(err => {
            alert("Błąd połączenia z bazą");
            console.log(err);
        })
    }
});