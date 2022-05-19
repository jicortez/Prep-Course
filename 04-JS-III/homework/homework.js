// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let cantidad = (array.length) - 1;
  return array[cantidad];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0 ; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      array[i] = array[i] + 1;
    }
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let frase = "";
  for (let i = 0; i < palabras.length; i++) {
    if (palabras.length == 1) {
      frase = frase + palabras[i];
    } else if (palabras.length == 2) {
      if (i == 0) {
        frase = frase + palabras[i] + " ";
      } else {
        frase = frase + palabras[i];
      }
    } else {
      if (i != palabras.length - 1){
        frase = frase + palabras[i] + " "
      }else {
        frase = frase + palabras[i]
      }
    }
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.indexOf(elemento) == -1) {
    return false;
  } else {
    return true;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // if (Math.floor(numeros) != numeros) {}
  let verificacion = false;
  let contador = 0;
  for (let i = 0; i < numeros.length; i++){
    if (Math.floor(numeros[i]) == numeros[i]) {
      verificacion = true;
      contador += numeros[i];
    }else {
      verificacion = false;
      break;
    }
  }
  if (verificacion == true) {
    return contador;
  }

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let verificacion = false;
  let sumaValores = 0;
  let contador = 0;
  let promedio = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    if (Math.floor(resultadosTest[i] == resultadosTest[i])){
      sumaValores += resultadosTest[i];
      contador += 1;
      verificacion = true;
    } else {
      verificacion = false;
      break;
    }
  }
  promedio = sumaValores/contador;

  if (verificacion == true) {
    return (promedio)
  }

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let verificacion = false;
  let numeroMasGrande = 0;
  for ( let i = 0; i < numeros.length; i++) {
    if (Math.floor(numeros[i] == numeros[i])) {
      verificacion = true;
      if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
      }
    } else {
      verificacion = false;
      break;
    }
  }
  if (verificacion == true) {
    return numeroMasGrande;
  }
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  // let multiplicaciòn = 1;
  // if (arguments.length < 1) {
  //   multiplicaciòn = 0;
  //   return multiplicaciòn
  // } else {
  //   for (let i = 0; i < arguments.length; i++) {
  //     multiplicaciòn = multiplicaciòn + arguments[i];
  //   }
  //   return multiplicaciòn;
  // }
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contadorMayor = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18){
      contadorMayor ++ ;
    }
  }
  return contadorMayor;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  // switch (numeroDeDia) {
  //   case 2:
  //   case 3:
  //   case 4:
  //   case 5:
  //   case 6:
  //     return "Es día laboral"
  //   default:
  //     return "Es fin de semana"
  // }
  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana";
  }
  return "Es dia Laboral";
}



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
//   if (n[0] = 9) {
//     return true;
//   } else {
//     return false;
//   }
// }
let num = n.toString()
if(num.charAt(0) === "9"){
  return true;
}
return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  let comparador = arreglo[0];
  let validador = false;
  for (i = 1; i < arreglo.length;i++) {
    if(arreglo[i] == comparador) {
      validador = true;
    } else {
      validador = false;
      break;
    }
  }
  return validador;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let = nuevoArray = [];
for (let i = 0; i < array.length; i++) {
  if(array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
    nuevoArray.push(array[i])
  }
}
if (nuevoArray.length = 3) {
  return nuevoArray;
} else {
  return "No se encontraron los meses pedidos";
}
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let = nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i] > 100){
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  // let flag = false;
  // let nuevoArray = [];
  // for (let i = 0; i < 10; i++) {
  //   numero +=  2;
  //   nuevoArray.push(numero);
  //   flag = true;
  //   if (numero == i){
  //     flag == false;
  //     break;
  //   }
  // }

  // if (flag == true) {
  //   return nuevoArray;
  // } else {
  //   return "Se interrumpió la ejecución"
  // }
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
