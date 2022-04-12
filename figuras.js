// Código del cuadrado

console.group ("Cuadrados");

function perimetroCuadrado (lado) {
    return lado * 4;
    
}
// console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
    return lado * lado; 
}
// console.log ("El area del cuadrado es: " + areaCuadrado + " cm^2")

console.groupEnd ();

// Código del triángulo

console.group ("Triangulos");

//console.log ("Los lados del triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

//console.log ("La altura del triangulo es de: " + alturaTriangulo + " cm")

function perimetroTriangulo (lado1, lado2, base) {
    return (lado1 + lado2 + base);
}

// console.log ("El perímetro de mi triángulo es de: " + perimetroCuadrado + " cm")

function areaTriangulo (base, altura) {
return (base * altura) / 2
}
// console.log ("El área de mi triángulo es de: " + areaTriangulo + " cm^2")

console.groupEnd ();

// Código del círculo

console.group ("Círculos");

const radioCirculo = 4;
//console.log ("El radio de mi círculo es de: " + radioCirculo + " cm");

function diametroCirculo (radio) {
    return radio * 2;
}
//console.log ("El diámetro de mi círculo es de: " + diametroCirculo + " cm");

const PI = Math.PI;
//console.log ("PI es: " + PI );

function perimetroCirculo (diametro) {
    return PI * diametro;
}
//console.log ("El perímetro de mi círculo es de: " + perimetroCirculo + " cm")

function areaCirculo (radio) {
    return (radio * radio ) * PI;
}
//console.log ("El area de mi círculo es de: " + areaCirculo + " cm");

console.groupEnd;

// Interactuando con el HTML

function calcularPerimetroCuadrado () {
    const input = document.getElementById ("inputCuadrado");
    const value = input.value; // lo hago para solamente obtener el valor y no toda la etiqueta
    const perimetro = perimetroCuadrado (value)
    alert (perimetro);
}

function calcularAreaCuadrado () {
    const input = document.getElementById ("inputCuadrado");
    const value = input.value; // lo hago para solamente obtener el valor y no toda la etiqueta
    const area = areaCuadrado (value)
    alert (area);
}

function calcularPerimetroTriangulo () {

    const lado1 = document.getElementById ("lado1");
    const value1 = parseInt (lado1.value);

    const lado2 = document.getElementById ("lado2");
    const value2 = parseInt (lado2.value);

    const base = document.getElementById ("base");
    const value3 = parseInt (base.value);


    const perimetro = perimetroTriangulo (value1, value2, value3)
    alert (perimetro);


}

function calcularAreaTriangulo () { //no me estaba tomando la función por el espacio antes de poner los paréntesis

    const base = document.getElementById ("base");
    const value1 = base.value;

    const altura = document.getElementById ("altura");
    const value2 = altura.value;

    const area = areaTriangulo (value1, value2)
    alert (area);


}

function calcularDiametroCirculo () {
    const radio = document.getElementById ("radio");
    const value = radio.value

    const diametro = diametroCirculo (value);
    alert (diametro);
}

function calcularPerimetroCirculo () {
    const radio = document.getElementById ("radio");
    const value = radio.value

    const perimetro = perimetroCirculo (diametroCirculo(value));
    alert (perimetro);
}

function calcularAreaCirculo () {
    const radio = document.getElementById ("radio");
    const value = radio.value

    const area = areaCirculo (value);
    alert (area);
}

function calcularAlturaTriangulo (lado1, lado2, base) {
    if (lado1 === lado2 && lado1 != base) {
        const altura = Math.sqrt ((lado1 * lado2) - ((base*base)/4))  // El Math.srqt es una raíz
        console.log (altura);
    }
    else {
        alert ("No es Isoceles")
    }
}