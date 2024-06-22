function login(){
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    

    //coneccion gaaaaa
    

    if(usuario == "CIBER01" & password == "DEW2023"){
        document.getElementById("mensaje").style.background="aqua";
        document.getElementById("mensaje").innerText = "BIENVENIDO AL SISTEMA";
    }
    else{
        document.getElementById("mensaje").style.background="red";
        document.getElementById("mensaje").innerText = "USUARIO O CONTRASEÑA INCORRECTA ";
    }

}