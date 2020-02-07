
/**
 *
 * (5) Existem potenciais armadilhas (pitfalls) na função acima?
 * Se SIM qual é ou quais são? Comente a resposta.
 *  ****************************************
 *
 * Este algoritmo tem uma lógica  parecida com a do Fisher–Yates shuffle,
 * Eu analisei o código e  uma coisa que notei, mas não sei dizer se é uma armadilha
 * o if no final  do código não fez muito sentido  ao menos para mim,
 * utilizei um for para  mostrar varrer o array, e adicionei um retorno no final da função
 * ****************************************
 *
 *
 */


const array = [5, 3, 1, 4, 2];

// A função shuffle recebe como entrada uma array e a embaralha.
function shuffle(a) {
  // atribui a variável n a quantidades de elementos da array a.
  let result;
  n = a.length;
  console.log(`valor inicial de a`, a)
  // Percorre a array a da posição 0 até a ultima posição.
  for (var i = 0; i < n; i++) {
    //Sorteia uma posição aleatória entre i e n-1 e atribui para a variável swap
    let swap = i + Math.floor(Math.random() * (n - i - 1));
    console.log(`valor do swap`, swap)
    // Troca os valores das posições i e swap da array a.
    let aux = a[i];

    a[i] = a[swap];

    a[swap] = aux;

    result  = console.log(` posição final de a :  ${a}`);
  }
  return result;
}
shuffle(array);
//for (let i =0 ; i< array.length; i++ ) console.log(`array: ${array[i]}`);
