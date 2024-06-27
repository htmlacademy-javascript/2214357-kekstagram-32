//Проверка длинны строки

function checkLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

//Проверка на полиндром

function polindrome (string) {
  const updateString = string.replaceAll(' ', '').toLowerCase();
  const newString = '';
  for (let i = updateString.length; i >= 0; i--) {
    newString += updateString[i];
  }
  if (newString === updateString) {
    return true;
  } else {
    return false;
  }
}

//Дополнительное задание

function stringNumber (string) {
  const newString = stringNumber.toString();
  const result = '';

  for (let i = 0; i <= newString; i++) {
    if (!Number.isNaN(parseInt(newString[i], 10))){
      result += newString[i];
    }
  }
  if (result === ''){
    return NaN;
  } else {
    return parseInt(result, 10);
  }
}


console.log(checkLength('проверяемая строка', 20)); // true
console.log(checkLength('проверяемая строка', 18)); //true
console.log(checkLength('проверяемая строка', 10)); //false

console.log(polindrome('топот')); true;
console.log(polindrome('Кекс')); false;

console.log(stringNumber('2023 год')); //2023
console.log(stringNumber('а я томат')); NAN;

console.log(stringNumber (2023)); //2023
console.log(stringNumber (1.5)); //15
