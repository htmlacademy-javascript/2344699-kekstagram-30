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
