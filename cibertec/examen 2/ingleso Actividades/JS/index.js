let tareas = [];

let input = document.querySelector("input");
let agregar = document.getElementById("agregar");
let eliminar = document.getElementById("eliminar");
let total = document.getElementById("totalTareas");
let mostrar = document.getElementById("mostrarTarea");

agregar.addEventListener("click",()=>{
    if(input.value ==""){
        alert("ingresar una tarea");
        input.focus();
    }else{
    tareas.push(input.value);
    let totalTareas = tareas.length;
    total.innerHTML = "El total de tareas es: " + totalTareas;
    mostrar.innerHTML = tareas;
    input.value = "";
    input.focus();
    }
});

eliminar.addEventListener("click",()=>{
    tareas.pop(input.value);
    let totalTareas = tareas.length;
    total.innerHTML = "El total de tareas es: " + totalTareas;
    mostrar.innerHTML = tareas;
    input.value = "";
    input.focus();
    
});
