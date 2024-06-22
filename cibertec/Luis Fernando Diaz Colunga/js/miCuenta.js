function login(){
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    

    //coneccion gaaaaa
    

    if(usuario == "123" & password == "1234"){
        document.getElementById("loco").style.background="red";
        document.getElementById("mensaje").style.background="green";
        document.getElementById("mensaje").innerText = "BIENVENIDO AL SISTEMA";
    }
    else{
        document.getElementById("loco").style.background="grey";
        document.getElementById("mensaje").style.background="red";
        document.getElementById("mensaje").innerText = "USUARIO O CONTRASEÑA INCORRECTA ";
    }

}