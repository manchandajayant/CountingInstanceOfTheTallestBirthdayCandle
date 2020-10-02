//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.


function tallestCandles(candles) {
  let tallest = Math.max(...candles);

  let returnValue = 0;
  let candlesObject = {};

  for (let candle of candles) {
    if (candlesObject[candle]) {
      candlesObject[candle] += 1;
    } else {
      candlesObject[candle] = 1;
    }
  }

  for (let value in candlesObject) {
    if (parseInt(value) === tallest) {
      returnValue = candlesObject[value];
    }
  }
   console.log(returnValue);
}

tallestCandles([3, 2, 1, 3]);