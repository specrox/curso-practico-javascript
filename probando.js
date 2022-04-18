const productos = [
    {id:001, producto: "bicicleta", precio:2000},
    {id:002, producto: "pancho", precio:1000},
    {id:003, producto: "ciruela", precio:5000},
    {id:004, producto: "almeja", precio:3000},
    {id:005, producto: "auto", precio:10000},
]

const productosCaros = productos.filter(function (producto) {
    return producto.precio >= 3000;
});

const productosConDescuento = productos.map (function(producto){
    return producto.precio * (100-10) / 100
})

const esBarato = producto => producto.precio < 2000;
const productosBaratos = productos.filter (esBarato)
