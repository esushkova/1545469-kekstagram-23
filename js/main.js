// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomIntInclusive(min, max) {

  if (min < 0 || max < 0) {
    return 'Некорректный диапазон';
  }

  if (min >= max) {
    return 'Некорректный диапазон';
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}

getRandomIntInclusive();

// Функция для проверки максимальной длины строки
function checkStringLength (string, maxLength) {
  if(string <= maxLength) {
    return true;
  }

  return false;
}

checkStringLength();


// То же самое с тернарным оператором
//function checkStringLength (string, maxLength) {
//return (string <= maxLength) ? true : false;
//};

//checkStringLength();
