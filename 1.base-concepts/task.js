"use strict";

function solveEquation(a, b, c) {
  let arr;
  let root1, root2;
  let discriminant = Math.pow(b, 2)-4*a*c;
    if (discriminant > 0) { 
    root1 = (-b + Math.sqrt(discriminant) )/(2*a); 
    root2 = (-b - Math.sqrt(discriminant) )/(2*a); 
    arr = [root1, root2]
    } else if (discriminant == 0) {
      root1 = -b/(2*a);
      arr = [root1]
    } else if (discriminant < 0) {
      arr = [];
    }
  return arr; // array
}

function percentIsValid(percent){
  const num = Number(percent);

  if (Number.isInteger(num) && num > 0) {
    return true;
  }
  else return console.log (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
}

function contributionIsValid(contribution){
  const num = Number(contribution);

  if (Number.isInteger(num) && num >= 0) {
    return true;
  }
  else return console.log (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
}

function amountIsValid(amount){
  const num = Number(amount);

  if (Number.isInteger(num) && num > 0) {
    return true;
  }
  else  return console.log (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
}

function getMonthDifference(date) {
  let today = new Date().toLocaleDateString();
  let endDate = new Date(date).toLocaleDateString();
  if (!isNaN(endDate)) {
    return (endDate.getMonth - today.getMonth + 12 * (endDate.getFullYear - today.getFullYear) );
  }
}

function dateIsValid(date) {
  if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date) && getMonthDifference(date) >0 ){
    return true;
  }
  if (getMonthDifference(date) <0) {
    return console.log(`Параметр "Дата" содержит неправильное значение "${date}"`);
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (percentIsValid(percent) !== true) {
  console.log (percentIsValid(percent))
  }
  if (contributionIsValid(contribution) !== true) {
    console.log (contributionIsValid(contribution))
  }
  if (amountIsValid(amount) !== true) {
    console.log (amountIsValid(amount))
  }
  if (dateIsValid(date) !== true) {
    console.log (dateIsValid(date))
  }

  var P = parseFloat( percent / 12 / 100 );
  var S = parseFloat (amount - contribution);
  var n = getMonthDifference(date); 

  if (percentIsValid(percent) === true && contributionIsValid(contribution) === true && amountIsValid(amount) === true && dateIsValid(date) === true) {
    totalAmount = S * ( ( P * Math.pow( 1+P, n ) ) / ( Math.pow( 1+P, n ) - 1 ) );
    return totalAmount.toFixed(2);
  }
  else console.log ("Невозможно посчитать общую сумму!");
  }
  
  if (calculateTotalMortgage >0){
    console.log ("Общая сумма: "+ calculateTotalMortgage (percent, contribution, amount, date) )
  }
  
