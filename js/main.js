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

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Оля', 'Петя', 'Коля', 'Саша', 'Катя', 'Ира'];

const DESCRIPTIONS = [
  'Приятно провожу вечер',
  'Скорее бы выходные!',
  'Очень много работы',
  'Просто хорошее настроение',
  'Отдыхаю с друзьями',
  'Инстаграм для бумеров',
];

//функция создания комментария
const createCommentObject = (index) => {
  const randomMessagesIndex = _.random(0, MESSAGES.length - 1);
  const randomNameIndex = _.random(0, NAMES.length - 1);

  return {
    id: _.random(1, 100),
    avatar: 'img/avatar-' + getRandomIntInclusive(1, 6) + '.svg',
    message: MESSAGES[randomMessagesIndex],
    name: NAMES[randomNameIndex],
  };
};

//функция создания объекта фотографии юзера
const createPhotoObject = () => {
  const randomDescriptionsIndex = getRandomIntInclusive(0, DESCRIPTIONS.length - 1);

  return {
    id: _.random(1, 25),
    url: 'photos/' + getRandomIntInclusive(1, 25) + '.jpg',
    description: DESCRIPTIONS[randomDescriptionsIndex],
    likes: getRandomIntInclusive(15, 200),
    comments: new Array(getRandomIntInclusive(1, 10)).fill(null).map((item, index) => createCommentObject(index + 1)),
  };
};
