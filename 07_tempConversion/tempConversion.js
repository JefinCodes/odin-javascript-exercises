function roundTo1Decimal(num){
  num = num * 10;
  num = Math.round(num);
  num = num / 10;
  return num;
}

const convertToCelsius = function(tempFah) {
  let tempCel = (tempFah - 32) * 5 / 9;
  if(Number.isInteger(tempCel)){
    return tempCel;
  }
  return roundTo1Decimal(tempCel);
};

const convertToFahrenheit = function(tempCel) {
  let tempFah = tempCel * 9 / 5 + 32;
  if(Number.isInteger(tempFah)){
    return tempFah;
  }
  return roundTo1Decimal(tempFah);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
