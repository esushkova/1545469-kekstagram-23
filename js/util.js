//функция возвращает рандомное целое число из заданного диапазона включительно
function getRandomIntInclusive(min, max) {
  const isBothNumbers = typeof min === 'number' && typeof max === 'number';
  if (!isBothNumbers) {
    return 'Введенные значения должны быть числами';
  }
  if ((min < 0 || max < 0) || min >= max) {
    return 'Некорректный диапазон';
  }
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

//функция для проверки максимальной длины строки
function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

const isEscEvent = (evt) => {
return evt.key === 'Escape' || evt.key === 'Esc';
};

function testUnique(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return false;
    }
  }
  return true;
}
export {getRandomIntInclusive, isEscEvent, testUnique}
