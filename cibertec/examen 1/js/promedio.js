
var numero1 = prompt("Ingresar el Numero 1 ");1
var numero2 = prompt("Ingresar el Numero 2 ");
var numero3 = prompt("Ingresar el Numero 3 ");

var numero1 = parseInt(numero1);
var numero2 = parseInt(numero2);
var numero3 = parseInt(numero3);




var rpta= (numero1 + numero2 + numero3) / 3 ;
alert(Math.round(rpta));

document.write("<h1>El promedio de tus 3 Numeros es: "+ Math.round(rpta)  +"</h1>");
