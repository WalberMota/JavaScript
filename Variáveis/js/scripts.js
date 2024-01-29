/**
 * No JavaScript é permitido criar variáveis de 3 formas
 * 
 * Podemos mudar o tipo da variável livremente (o js tem tipagem fraca)
 * 
 * únicos caracteres especiais para iniciar variáveis são o $ e _ (undeline)
 * variávei não podem ser declaradas começando com um número.
 * é de boa prática em casos de nomes compostos usar camelCase.
 * ex.: var meuPrimeiroNome = "josé"
 */

var teste = 1; //procurar sempre usar a palavra reservada var - ciando assim variáveis globais
                //sem o var pode ser criada mas há o risco de sobrescrever outra variáveis.

console.log(teste);

teste='Agora virou string';

console.log(teste);

