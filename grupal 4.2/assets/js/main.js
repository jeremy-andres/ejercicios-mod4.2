import { Compania } from './compania.js';
import { Importacion } from './importaciones.js';


const botonIngresarEmpresa = document.getElementById("botonIngresarEmpresa"); 
botonIngresarEmpresa.addEventListener("click", nuevaEmpresa);

function nuevaEmpresa(event) {  //Se agrega evento para obtener datos de nueva empresa
    event.preventDefault();

    const idEmpresa = document.getElementById("idRegistro").value;
    const nombreEmpresa = document.getElementById("nombreEmpresa").value;
    const rutEmpresa = document.getElementById("rutEmpresa").value;

    const nuevaEmpresa = new Compania(idEmpresa, nombreEmpresa, rutEmpresa);
    return nuevaEmpresa.getInfo();
}


const botonNuevaImportacion = document.getElementById("botonNuevaImportacion");
botonNuevaImportacion.addEventListener("click", nuevaImportacion);

function nuevaImportacion(event) {  //Se agrega evento para obtener datos de una nueva importación
    event.preventDefault();

    const idImportacion = document.getElementById("idImportacion").value;
    const nombreProducto = document.getElementById("nombreProducto").value;
    const cantidadProductos = document.getElementById("cantidadProductos").value;
    const precioUnitario = document.getElementById("precioUnitario").value;


    const nuevaImportacion1 = new Importacion(idImportacion, nombreProducto, cantidadProductos, precioUnitario);
    let infoImportacion = nuevaImportacion1.getResumen();
    return infoImportacion;
}


//Boton que mustra registro de importaciones
const mostrarImportaciones = document.getElementById("mostrarImportaciones"); 
mostrarImportaciones.addEventListener("click", mostrarDatos);

function mostrarDatos(event) {
    event.preventDefault();

    const tabla = document.getElementById("tablaImportaciones")
    let row = tabla.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = "1"
    cell2.innerHTML = "iPhone 12"
    cell3.innerHTML = "20"
    cell4.innerHTML = "$200.000"
}

/*
const compania = new Compania(1, 'Lacamila', '7777777-');

const importacion1 = new Importacion(1, 'tintas', 15, 8990);
const importacion2 = new Importacion(2, 'Agujas', 7, 15990);
compania.addImportaciones(importacion1);
compania.addImportaciones(importacion2);

console.log(compania.getTotalImportaciones()); // 2
console.log(compania.getSumaTotal());

*/