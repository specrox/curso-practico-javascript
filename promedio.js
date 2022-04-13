const lista = [150,200,300];

function calcularPromedio (lista) {
    let sumaLista = 0;

    for (let i = 0; i < lista.lenght ; i++) {
        sumaLista = sumaLista + lista [i];
    }

    const promedioLista = sumaLista / lista.lenght
    return promedioLista;
}