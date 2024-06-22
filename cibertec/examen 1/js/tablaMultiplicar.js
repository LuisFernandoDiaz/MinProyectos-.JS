

    function saltarLinea(){
        document.write("<br> <br> <br>");
    }
    function imprimir(frase){
        document.write(frase);
        saltarLinea();
    }
    var numero = 1
    var num = prompt("ingrese el numero de multiplicar aqui")
    document.write("<h2>Utilizamso el while en JS </h2>");
    while (numero <= 12){
         imprimir(num +" por " + numero +" es = " + num * numero );
         numero = numero + 1;
        }
    document.write("<h2>Utilizamso el for en JS </h2>");

    for (var numero = 1 ; numero <= 12; numero = numero + 1){
        imprimir(num + " por "+ numero + " es = "+ num * numero);
    }   

   


