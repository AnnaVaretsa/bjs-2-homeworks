function compareArrays(arr1, arr2) {
  let result;
  if (Array.isArray(arr1) && Array.isArray(arr2) ) {   
    result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    console.log(`Сравнение массивов размером ${arr1.length} и ${arr2.length} `)  } 
    else {    
      console.log("Некорректные входные данные");
    }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(el => el > -1).filter(el => el % 3 === 0).map(el => el *10)
  return resultArr; // array
}
