
let listaNombreGasto = [];
let listaValorGasto = [];

//Esta funcion se invoca al momento del 
//que el usuario hace click en el bootn
function clickBoton() {

    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);//validamos la salida de los datos llamados en el LET
    console.log(valorGasto);

    listaNombreGasto.push(nombreGasto)
    listaValorGasto.push(valorGasto)

    console.log(listaNombreGasto);
    console.log(listaValorGasto);

    actualizarListaGastos()

}


function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombreGasto.forEach((element, position) => {
        const valorGasto = listaValorGasto[position];

        htmlLista += `<li> ${element} - USD ${valorGasto} 
        <button onclick="eliminar(${position});">eliminar</button>

                        </li>`;

        totalGastos += Number(valorGasto);

    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = "";
    document.getElementById('valorGasto').value = "";
}

function eliminar(position) {
    listaNombreGasto.splice(position, 1);
    listaValorGasto.splice(position, 1);

    actualizarListaGastos();
}


