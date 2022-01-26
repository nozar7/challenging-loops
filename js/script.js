console.log("Numeros Impares del 1 al 20");
let limiteImpares=20;
for (let index = 1; index <= limiteImpares; index++) {
  if (index%2) {
        console.log(index);
    } 
    // console.log(index%2 ? index:'');
}

console.log("Numeros divisibles entre 3 de forma descendente");
limiteDivx3 = 100;
for (let i = limiteDivx3; i > 0; i--) {
    if (!(i%3)) {
        console.log(i);
    }
}

console.log("Imprimir valores en cierta secuencia");
let arraySecuencia = [4, 2.5, 1, -0.5, -2, -3.5];
for (let i = 0; i < arraySecuencia.length; i++) {
    console.log(arraySecuencia[i]);
}
console.log("Imprimir suma de cada uno de los valores del 1 al 100");
let limSumaValores=100;
let sum=0;
for (let i = 1; i <= limSumaValores; i++) {
    sum += i;
    console.log(sum);
}
console.log("Factorial de un numero");
let product=1;
multiplicar=12;
for (let i = 1; i <= multiplicar; i++) {
    product *=i;
    console.log(product);
    
}