let altura = 177;
let alturaDot = 1.77
console.log("Mi altura en centimetros es : " + (parseInt(altura)));
if (altura !== parseInt()) {
    console.log("Mi altura en metros es : " + (altura /= 100));
} else {
    console.log("Mi altura en centimetros es : " + (parseInt(altura)));
}

let peso = 72.500
console.log(parseFloat(peso).toFixed(1));
console.log(parseFloat(peso).toFixed(2));
console.log(parseFloat(peso).toFixed(3));
console.log("Aqui le quitamos el decimal = " + (parseInt(peso)));

console.log(Math.ceil(alturaDot));
console.log(Math.floor(peso));

let MAX_valor = Number.MAX_VALUE;
console.log("Aqui vemos el maximo numero posible en Js : " + Number.MAX_VALUE);

let MAX_valorPlusOne = (Number.MAX_VALUE += 1);

if (MAX_valor == Number.MAX_VALUE) {
    console.log(MAX_valorPlusOne);
} else {
    console.log(Number.MAX_EPSILON)
}