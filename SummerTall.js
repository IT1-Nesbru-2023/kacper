function summerTall(tallene) {
    if (tallene[0] <= 0 || tallene[1] <= 0 || tallene[2] <= 0 || tallene[3] <= 0 || tallene[4] <= 0 || tallene[5] <= 0) {
      return false;
    }

    let sum = tallene[0] + tallene[1] + tallene[2] + tallene[3] + tallene[4] + tallene[5];
    console.log(sum)
    return sum;
  }