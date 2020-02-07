
const deg2rad = function(deg){
  return  (deg * Math.PI)/180;
};

module.exports = function calculateDistanceFromLatLon(l1,l2,b1,b2){
  const radius  = 6371;


//converte coordenadas de graus para radianos
  const radianus = {
    l1:deg2rad(l1),
    l2:deg2rad(l2),
    b1:deg2rad(b1),
    b2:deg2rad(b2),

  }
//calcula distância entre os dois pontos
 const lambda = Math.acos(
    Math.sin(radianus.l1) * Math.sin(radianus.l2) +
      Math.cos(radianus.l1) *
        Math.cos(radianus.l2) *
        Math.cos(radianus.b2 - radianus.b1)
  );
  const distance = Math.sin(lambda) * radius;
  return distance;
};
