const checkStringLenght = function (string, length) {
  return string.length <= length;
};

checkStringLenght('проверяемая строка', 230);

const polindromeTest = function (string) {
  const givenString = string.replaceAll(' ', '').toLowerCase();
  let stringToCompare = '';

  for (let i = givenString.length - 1; i >= 0; i--) {
    stringToCompare += givenString[i];
  }

  return givenString === stringToCompare;
};

polindromeTest('Лёша на полке клопа нашёл');
polindromeTest('Лёша на полке клопа нашёл1');
polindromeTest('казак');

const numbersFromString = function (string) {
  const givenString = string.toString().replaceAll(' ', '');
  let getNumber = '';
  for (let i = 0; i <= givenString.length - 1; i++) {
    if (!isNaN(givenString[i] * 1)) {
      getNumber += givenString[i];
    }
  }
  return parseInt(getNumber, 10);
};
numbersFromString('dgkjshlfgj    985 768 hkjhk   ');
