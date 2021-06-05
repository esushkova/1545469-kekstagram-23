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
getRandomIntInclusive();

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}
checkStringLength();

const DESCRIPTION = [
  'Приятно провожу вечер',
  'Скорее бы выходные!',
  'Очень много работы',
  'Просто хорошее настроение',
  'Отдыхаю с друзьями',
  'Инстаграм для бумеров',
];

const MESSAGE = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = ['Оля', 'Петя', 'Коля', 'Саша', 'Катя', 'Ира'];

const USERS_POSTS_COUNT = 25;

const createUserComment = () => {
  const randomIdComment = getRandomIntInclusive();
  /* const randomAvatar = getRandomIntInclusive(1, 6);*/
  const randomMessage = getRandomIntInclusive(0, MESSAGE.length - 1);
  const randomName = getRandomIntInclusive(0, NAME.length - 1);

  return {
    id: randomIdComment,
    /*avatar: 'img/avatar-' + randomAvatar + '.svg',*/
    message: MESSAGE[randomMessage],
    name: NAME[randomName],
  };
};

const createUserPost = () => {
  const randomId = getRandomIntInclusive(1, 25);
  /*const randomIndexFoto = getRandomIntInclusive(1, 25);*/
  const randomDescription = getRandomIntInclusive(0, DESCRIPTION.length - 1);
  const randomLike = getRandomIntInclusive(15, 200);

  return {
    id: randomId,
    /*url: 'photos/' + randomIndexFoto + '.jpg',*/
    description: DESCRIPTION[randomDescription],
    likes: randomLike,
    comments: createUserComment(),
  };
};

const usersPosts = new Array(USERS_POSTS_COUNT).fill(null).map(() => createUserPost());

usersPosts();
