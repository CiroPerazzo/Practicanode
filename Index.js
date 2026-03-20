/*import concatenarTexto from "./ejercicio1.js";
let mensaje = concatenarTexto('Ciro', 'Perazzo')
console.log(mensaje)

import {suma, resta, multiplicarPorPI, dividir} from "./src/modulos/matematica.js"
console.log(suma(10,4))
console.log(resta(20,5))
console.log(multiplicarPorPI(10))
console.log(dividir(20,10))

import Alumno from "./src/models/Alumno.js"
const alumno = new Alumno("Podikhon", 49800789)
const alumno2 = new Alumno("Cirfi", 49121068)

console.log(`Hola ${alumno.username} dni ${alumno.dni}`)
console.log(`Hola ${alumno2.username} dni ${alumno2.dni}`)


import fs from "fs/promises";

async function copiar(origen, destino) {
  try {
    await fs.copyFile(origen, destino)
    console.log("Archivo copiado correctamente")
  } catch (error) {
    console.error(error.message);
  }
}

copiar("./src/modulos/entrada.txt", "./salida.txt")*/



import  parsearUrl  from "./src/modulos/url.js";
const objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");

console.log(objeto);