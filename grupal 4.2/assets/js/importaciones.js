export class Importacion {
    constructor(id, producto, numProductos, precioUnitario) {
        this.id = id;
        this.producto = producto;
        this.numProductos = numProductos;
        this.precioUnitario = precioUnitario;
    }

    getResumen() {
        let resumen = [this.id, this.producto, this.numProductos, this.precioUnitario]; 
        return console.log(resumen);
    }
}

