// index.js
const Alumno = require('./Alumno.js');
const fs = require('fs').promises;

const path = 'notas.txt';

const leerArchivo = async () => {
  const data = await fs.readFile(path);
  console.log(data.toString());
};

const guardar = async (texto) => {
  await fs.writeFile(path, texto);
};

leerArchivo();
guardar("Escribiendo desde node");

// ---- Pruebas de la clase Alumno ----
let nombre = "Tiara";

const alumno1 = new Alumno(nombre, "Albornos", 20, "Diseño y Programación Web");

// obtenerCarrera y obtenerDatos
console.log("Carrera:", alumno1.obtenerCarrera());
console.log("Datos:", alumno1.obtenerDatos());

// modificarEdad + retornarEdad
alumno1.modificarEdad(21);
console.log("Edad actual:", alumno1.retornarEdad());


alumno1.agregarMateria("Programación Web");
alumno1.agregarMateria("Aplicaciones Híbridas");
alumno1.agregarMateria("Diseño UX/UI");
console.log("Materias:");
alumno1.mostrarMaterias();
