// Funciones helpers
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

  function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
    }
// Calculadora de medianas
    function medianaSalarios(lista) {
        const mitad = parseInt (lista.length/2)
    
        if (esPar(lista.lenght)) {
            const elemento1 = lista[mitad - 1];
            const elemento2 = lista[mitad];
            const mediana = calcularMediaAritmetica([elemento1, elemento2])
            return mediana;
        } 
        else {
            const personitaMitad = lista[mitad];
            return personitaMitad;
        }
    }

// Mediana general
const salariosColombia = colombia.map (
    function (personita) {
        return personita.salary;                        // A través del .map puede crear un nuevo array que solo tenga los salarios de cada persona
    }
);

const salariosColombiaSorted = salariosColombia.sort (
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }                                                  // A través del .sort y con esa función puedo ordenar los salarios de menor a mayor
);    

const medianaGeneralColombia = medianaSalarios(salariosColombiaSorted);
// Mediana del top 10%
const spliceStart = salariosColombiaSorted.length * (100-10) / 100;
const spliceCount = salariosColombiaSorted.length - spliceStart;
const salariosColTop10 = salariosColombiaSorted.splice (spliceStart, spliceCount);      
// En el array.splice(primero indicamos la posición a partir de la cual queremos que comience a cortar(no incluye esa posición en el corte), y en la segunda parte del paréntesis colocamos cuantas posiciones queremos q corte)
//Ejemplo: const ejemplo = [1,2,3,4,5,6,7,8] ---> ejemplo.splice(4,2) ----> ejemplo = [1,2,3,4,7,8]


const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log ({
    medianaGeneralColombia,
    medianaTop10Col,
});





                  