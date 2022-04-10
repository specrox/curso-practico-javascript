// Código del cuadrado

console.group ("Cuadrados");

const ladoCuadrado = 5;
console.log ("El lado del cuadrado es: " + ladoCuadrado + " cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("El area del cuadrado es: " + areaCuadrado + " cm^2")

console.groupEnd ();

// Código del triángulo

console.group ("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4; 
const alturaTriangulo = 5.5;

console.log ("Los lados del triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

console.log ("La altura del triangulo es de: " + alturaTriangulo + " cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ("El perímetro de mi triángulo es de: " + perimetroCuadrado + " cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log ("El área de mi triángulo es de: " + areaTriangulo + " cm^2")

console.groupEnd ();

// Código del círculo

console.group ("Círculos");

const radioCirculo = 4;
console.log ("El radio de mi círculo es de: " + radioCirculo + " cm");

const diametroCirculo = radioCirculo * 2;
console.log ("El diámetro de mi círculo es de: " + diametroCirculo + " cm");

const PI = Math.PI;
console.log ("PI es: " + PI );

const perimetroCirculo = PI * diametroCirculo;
console.log ("El perímetro de mi círculo es de: " + perimetroCirculo + " cm")

const areaCirculo = (radioCirculo * radioCirculo ) * PI;
console.log ("El area de mi círculo es de: " + areaCirculo + " cm");

console.groupEnd;