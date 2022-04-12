function precioConDescuento (precioOriginal, descuento) {
    return  ((100-(descuento+value2))/100)*precioOriginal
  
}

function calcularPrecioConDescuento () {
    const cupons = [
        "pedro",
        "crosa",
        "crack"
        ]
    const precio = document.getElementById ("precio");
    const value1 = precio.value;
    
    const descuento = document.getElementById ("descuento");
    let value2 = descuento.value

    const cupon = document.getElementById ("cupon");
    const cuponValue = cupon.value

    
    if (!cupons.includes(cuponValue)) {
        alert ("Este cupón es no es válido")
    }
    else if (cuponValue === "pedro") {
         value2 = 15;
    }
    else if (cuponValue === "crosa") {
        value2 = 40;
    }
    else if (cuponValue === "crack") {
        value2 = 50;
    }
    
    const precioFinal = precioConDescuento (value1, value2);
    const resultP = document.getElementById ("ResultP");
    resultP.innerText = "El precio final con el descuento aplicado es " + precioFinal //De esta forma puedo escribir dentro de la etiqueta <p> que cree en html
    //para eso tuve que declarar una variable en javascript con el id designado en html, y después a través del .innerText escribo en esa etiqueta
    
    }
