//agregar imagen mediante boton desde el html
let foto = document.getElementById("foto");
function mostrar() {
    foto.innerHTML = '<img src ="img/1200_800.webp">';
}


//imprimir mensaje desde consola
console.log("Hola mundo");

//pedir nombre con prompt
var nombre = prompt("¿Cuál es tu nombre?");

//lower case
console.log("en minusculas: " + nombre.toLocaleLowerCase());

//upper case
console.log("en mayusculas:" + nombre.toUpperCase());

//uso de funciones
function imprimir(nombre) {
    console.log("Nombre desde funcion: " + nombre);
}
imprimir(nombre);

//uso de funciones arrow
const func_arrow = (usuario)=>{
    console.log("Esta es una prueba de función arrow de " + usuario);
}
func_arrow(nombre);

//uso de funciones return
const suma =  (num1,num2)=>{
    const resul = num1 + num2;
    return resul;
}
const sumar = suma(3,7);
console.log(`El resultado de la función sumar es ${suma(3,7)}`);

//imprimir mensaje desde alert
/*las comillas simples usadas aqui se llaman backticks y sirven para concatenar variables 
dentro de ellas sin necesidad de cortar la cadena*/
alert(`Hola ${nombre} ¿Cómo estas?`);

//ciclo while --> se repite MIENTRAS la condición sea verdadera, ejecuta la condicion antes de la iteración
let indice = 1;
while (indice<10) {
    console.log("WHILE el valor es: " + indice);
    indice++;
}

//ciclo do while --> se repite MIENTRAS la condición sea verdadera, ejecuta la condicion después de la iteración
indice = 1;
do{
    console.log("DO WHILE el valor es: " + indice);
    indice++;
}while (indice<10) 

//ciclo for
let lista = [33,6,9];
for (let index = 0; index < lista.length; index++) {
    console.log("FOR el valor es: " + lista[index]);
    
}

//ciclo foreach
lista.forEach(element => {
    console.log("FOREACH el valor es: " + element);
});

//ordenamiento sort
console.log(lista.sort());