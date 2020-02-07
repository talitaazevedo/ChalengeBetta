// (1) Por que o valor falso é escrito no console?

/**
 *
 * *******************************
 * Inicialmente o valor variável será  undefined e o retorno do console será false,
 * Antes da versão do ECMAScript 2015,  o javascript utilizava um conceito chamado de hoisting,
 * que vai puxando os vars para cima, ou seja deixa no escopo global.
 * como essa váriavel foi inicialmente inicialmente sem valor algum, eu entendo que ela  realmente
 * inicia como undefined, fazendo com que a comparação seja false;
 * por fim essa mesma variável é redeclarada dentro da função, mas no escopo anterior
 * como não tem valor inicialmente  ela não vai retornar o resultado esperado
 * *******************************
 *
 *
 *
 *
 * Solução
 * *******************************
 * Uma das solução possíveis para contornar  isso seria utilizar a declaração somente uma vez,
 * no inicio, forçar a variável a existir desde o inicio sem redeclarações,
 * e aplicar um retorno na função  para que ela sempre retorne o valor da váriavel.
 * *******************************
 *
 */

var a;
function teste01(num) {
  a = num;
  return a;
}

teste01(3);

console.log("retorno da função", a === 3);
