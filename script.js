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