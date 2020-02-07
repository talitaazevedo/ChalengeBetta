
module.exports  = {
  checkDegreeIs90: (l1,l2)=> {
    const deg = {
      positive:90,
      negative: -90,
    };
    const checkDegreeL1 = l1 < deg.negative || l1 > deg.positive;
    const checkDegreeL2 = l2 < deg.negative || l2 > deg.positive;

   if (checkDegreeL1 || checkDegreeL2)
      throw new RangeError(
        "the arguments l1 and l2 must be between -90 and 90."
      );

  },
  checkDegreeIs180: (b1,b2)=> {
    const deg = {
      positive: 180,
      negative: -180,
    };
    const checkDegreeB1 = b1 < deg.negative || b1 > deg.positive;
    const checkDegreeB2 = b2 < deg.negative || b2 > deg.positive;

  if (checkDegreeB1 ||checkDegreeB2 )
        throw new RangeError(
          "the arguments b1 and b2 must be between -180 and 180."
        );
  }
}
