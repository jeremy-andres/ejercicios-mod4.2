import { Compania } from './compania.js';
import { Importacion } from './importaciones.js';

const compania = new Compania(1, 'Lacamila', '7777777-');
const importacion1 = new Importacion(1, 'tintas', 15, 8990);
const importacion2 = new Importacion(2, 'Agujas', 7, 15990);
compania.addImportaciones(importacion1);
compania.addImportaciones(importacion2);
console.log(compania.getImportacionesTotales()); // 2
console.log(compania.getSumaTotal());

//Comentario