/***
 * (4) Qual o valor escrito no console e por quê?
 *
 * A função retorna o valor 10,  apesar de ter como retorno uma função ela é do tipo number
 * que é o value, o unico valor tangível que tem realmente dentro desta função
 *
 */


function teste4() {
  var value = 10;

  return function() {

    return  value;

  };
}
func = teste4();
console.log( func());
