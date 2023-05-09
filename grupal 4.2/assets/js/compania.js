export class Compania {
    constructor(id, nombre, rut) {
        this.id = id;
        this.nombre = nombre;
        this.rut = rut;
        this.importaciones = [];
    }
    //te hace un arreglo con las importaciones  que vienen de this importaciones, te trae eso, con el push lo agregas, agrgas el dato al arreglo
    addImportaciones(importObj) {
        this.importaciones.push(importObj);
    }
    // te Devuelve el número total de importaciones para la compañía
    getTotalImportaciones() {
        return this.importaciones.length;
    }
    //// Calcula la suma total de todas las importaciones multiplicando
    // el número de productos por el precio unitario para cada importación
    getSumaTotal() {
        return this.importaciones.reduce((total, importObj) => total + (importObj.numProductos * importObj.precioUnitario), 0);
    }
}

