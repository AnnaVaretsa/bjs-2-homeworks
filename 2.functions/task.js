// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  max = arr[0];
  min = arr[0];
  sum = arr[0]; 
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
  sum = sum + arr[i];
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0)
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  let length = arrOfArr.length;
  max = func(arrOfArr[0]);
  for (let i = 0; i< length; i++){
    if (func(arrOfArr[i]) > max){
      max = func(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let diff;
  diff = Math.abs(getArrayParams(arr).max - getArrayParams(arr).min)
  return diff;
}

