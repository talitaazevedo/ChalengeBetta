/* Imports  */
const {checkDegreeIs90, checkDegreeIs180} = require('./helpers/CheckHelper');
const calculateDistanceFromLatLon=require('./utils/calculateDistance');
const appendFile = require('./database/appendFileDatabase');
 /**
  * doAllStuff - Calcula a distância entre dois pontos.
  * @param {number} l1 - latitude ponto 1.
  * @param {number} b1 - longitude ponto 1.
  * @param {number} l2 - latitude ponto 2.
  * @param {number} b2 - longitude ponto 2.
  * @return {Promise<{number}>} Promise para a distância entre os dois pontos.
  */

function doAllStuff(l1,b1,l2,b2){
    /* Check if degree is between 90° and -90 */
    checkDegreeIs90(l1,l2);
    /* Check if degree is between 180° and -180 */

    checkDegreeIs180(b1,b2);

    /* calculate distance  between points */
    const distanceBetweenTwoPoints = calculateDistanceFromLatLon(l1,l2,b1,b2);
    /* return saves information in database, and return the distance */
    return appendFile(l1,l2,b1,b2,distanceBetweenTwoPoints)


  };
  //Exemplo de uso. Distância entre as cidades de São Paulo e Rio de Janeiro
   doAllStuff(-23.618237, -46.635197, -22.9035, -43.2096).then(value =>
    console.log(value),
  );
