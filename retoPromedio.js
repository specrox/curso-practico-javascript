const nota = [
    {nombre: "tp1",
     peso: 0.2
    },
    {nombre: "tp2",
     peso: 0.3
    },
    {nombre: "prueba",
     peso: 0.5
    }
]

function calcularNotaFinal(tp1,tp2,prueba) {
if ((nota[0].peso + nota[1].peso + nota[2].peso) > 1) {
alert ("El peso de sus notas no es posible ponderar debido a que exceden 1")
}
else {
const notaFinal = tp1 * nota[0].peso + tp2 * nota[1].peso + prueba * nota[2].peso;
return notaFinal;
}
}

//probado en js.console --- funciona!!!
//El objetivo de esta función es poder calcular la nota final de los alumnos a través de la ponderación del peso de las actividades y sus respextivas notas.