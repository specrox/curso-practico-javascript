lista = [200,100,1000,600];

lista.sort(function(a, b) {
    return a - b;
  });
  console.log(lista); //Gracias al .sort puedo ordenar un array

const mitadLista = parseInt (lista.length / 2);
let mediana;
const elemento1 = lista[mitadLista - 1];
const elemento2 = lista[mitadLista];

function esPar (numero) {
    if (numero % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function calcularPromedio (elemento1, elemento2) {
    promedio = (elemento1 + elemento2) / 2
    return promedio;
}

if (esPar (lista.length)) {
const promedioelem1y2 = calcularPromedio (elemento1, elemento2);
mediana = promedioelem1y2;

}
else {
    mediana = lista[mitadLista];
}

