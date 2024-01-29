var numero=5;

console.log(numero);
console.log(typeof numero);

var flutuante=5.32332322;

console.log(flutuante);
console.log(typeof flutuante); //vai imprimir 'number' pois tudo numero em js é um 'number'.

var textoComNumero='texto com numero 5.323232';

console.log(textoComNumero);
console.log(typeof textoComNumero);//vai dizer que é tipo string

console.log (flutuante+textoComNumero); //devido a baixa tipagem o js aceita somar number e string
                                        // ele tranforma tudo em string e concatena (cuidado!)

console.log(NaN); //Nof a Number é considerado um number pelo js !
console.log(typeof NaN);
console.log(typeof +Infinity);//considerado number
console.log(typeof -Infinity);//considerado number