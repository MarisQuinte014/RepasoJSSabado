// let codigoUsuario = "ABCD123:Mariana";
// let nombreUsuario = codigoUsuario.split(":");
// console.log(`Hola ${nombreUsuario[1]}`);

// function calcularDistancia(x1,y1,x2,y2){
//     //let restax = x2-x1;
//     //let restay = y2-y1;
//     //let potenciaCuadradaRestax = Math.pow(restax,2);
//     //let potenciaCuadradaRestay = Math.pow(restay,2);
//     //let suma = potenciaCuadradaRestax+potenciaCuadradaRestay;
//     //let raizCuadrada = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
//     return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
// }

//template literals
// let distancia = calcularDistancia(0,0,-10,-10).toFixed(2);
// console.log(distancia);

let calcularDistancia = (x1,y1,x2,y2) => Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))

let distancia = calcularDistancia(0,0,-10,-10).toFixed(2);
console.log(distancia);