document.querySelector('input[name="txtdni"]').addEventListener("keypress",function(event){
    var longitud=document.querySelector('input[name="txtdni"]').value.length;
    if(longitud>=8){
        window.event.preventDefault();
        return;
    }

    var dni = new RegExp("^[0-9]+$");
    var string = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(!dni.test(string)){
        event.preventDefault();
        return false;
    }
});

document.querySelector('input[name="txtnombre"]').addEventListener("keypress",function(event){

    var name = new RegExp("^[a-zA-Z]+$");
    var string = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(!name.test(string)){
        event.preventDefault();
        return false;
    }
});

document.querySelector('input[name="txtapellido"]').addEventListener("keypress",function(event){

    var apellido = new RegExp("^[a-zA-Z]+$");
    var string = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(!apellido.test(string)){
        event.preventDefault();
        return false;
    }
});

document.querySelector('input[name="txtdireccion"]').addEventListener("keypress",function(event){

    var direccion = new RegExp("^[a-zA-Z0-9]+$");
    var string = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(!direccion.test(string)){
        event.preventDefault();
        return false;
    }
});

