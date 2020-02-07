/**
 *(2) Qual o valor escrito no console e por quê?
 *
 * ********************************
 * Inicialmente o valor aprensentado é 3 e undefined, eu creio ser um vazamento de escopo dentro javascript,
 * o javascript na interpretação não estava respeitando o loop, ele até executa  o loop antecipadamente, mas
 * acaba desrespeitando  o escopo da função e saindo do loop ai mostra o 3 que é uma posição invalida
 * ou seja ele executa mais uma vez além após o loop
 *
 * *******************************
 * ***Solução 01***
 * *******************************
 *
 * Mudei a declaração de var para let, o que obriga variável i que é mutável
 * a seguir dentro do escopo de bloco, a partir daquele momento  de execução,
 * ou seja ela deixa de existir nos escopos  anteriores a função.
 * *******************************
 *
 */

function teste02() {
  let arr = [1, 2, 3];
  for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log(`Index: ${i};\nElement: ${arr[i]}`);
    }, 0);
  }
}

teste02();

/**
 *
 * Solução 02
 * ****************************************
 * Esta é outra forma  de resolver o problema anterior, que eu gosto bastante,
 * dividir a responsabilidade do código,
 * criei uma função para exibir o contador, e outra apenas chamada, respeitando também o escopo de bloco.
 * ****************************************
 *
 */

const arr = [1, 2, 3];
function exibeContador(i) {
  setTimeout(function() {
    console.log(`Index: ${i};\nElement: ${arr[i]};`);
  }, 1000 * i);
}

function chamaContador() {
  for (let i = 0; i < arr.length; i++) {
    exibeContador(i);
  }
}

chamaContador();
