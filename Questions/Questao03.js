/**
 *
 * (3) Quais os valores escritos no console e por quê?
 * ********************************
 * O console mostra inicialmente o valor de zero,  a variável foi declarada dentro do escopo da função
 * com o valor inicial de 0, ai quando foi feita a execução da function inc com o valor de i
 * ela executou no escopo anterior  mas   valor não foi retornado em nenhum momento
 * para o escopo da function teste3().
 * ********************************
 *
 *
 *  Solução
 * ********************************
 * Uma solução simples, seria adicionar um retorno direto na função de inc()
 * e durante a declaração da variável, i dentro da function teste03()  podemos fazer a variável i receber como resultado a
 * função inc() com o parametro 0 ou o numero que quisermos.
 *
 * ********************************
 *
 *
 */

function inc(i) {
  console.log(`Antes de Incrementar: ${i}`);
  return ++i;
}

function teste3(n) {
  let i = inc(n);
  console.log(`Depois de incrementar: ${i}`);
  return i;
}

console.log(`Resultado da execução da função: ${teste3(4)}`);
