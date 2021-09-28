import {getRandomIntInclusive} from './util.js';
import {MESSAGES, NAMES, DESCRIPTIONS} from './variables.js';


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

//записываю массив комментариев
let createCommentsArray = () => {
  let commentsArray = [];
for(let i = 1; i < getRandomIntInclusive(2, 10); i++) {
    commentsArray.push(createCommentObject())
}
    return commentsArray
}

//функция создания объекта фотографии юзера
const createPhotoObject = () => {
  const randomDescriptionsIndex = getRandomIntInclusive(0, DESCRIPTIONS.length - 1);

  return {
    id: _.random(1, 25),
    url: 'photos/' + getRandomIntInclusive(1, 25) + '.jpg',
    description: DESCRIPTIONS[randomDescriptionsIndex],
    likes: getRandomIntInclusive(15, 200),
    comments: createCommentsArray(),
  };
};

//функция создания массива фотографий
let createPhotoArray = () => {
  let photosArray = [];

  for(let i = 1; i <= 25; i++) {
  photosArray.push(createPhotoObject())
  }

  console.log(photosArray) //временная проверка корректности подключения модулей

  return photosArray
}

export {createPhotoArray}














































/*
import {MIN_AVATAR, MAX_AVATAR, MESSAGES, NAMES, MIN_INDEX_FOTO, MAX_INDEX_FOTO, DESCRIPTIONS, MIN_LIKE, MAX_LIKE, USERS_POSTS_COUNTS} from './variables.js';
import {getRandomIntInclusive} from './util.js';

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createUserComment = (index) => {
  const randomAvatar = getRandomIntInclusive(MIN_AVATAR, MAX_AVATAR);
  const randomMessage = getRandomArrayElement(MESSAGES);
  const randomName = getRandomArrayElement(NAMES);
  return {
    id: index,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: randomMessage,
    name: randomName,
  };
};

const createUserPost = (id) => {
  const randomIndexFoto = getRandomIntInclusive(MIN_INDEX_FOTO, MAX_INDEX_FOTO);
  const randomDescription = getRandomIntInclusive(0, DESCRIPTIONS.length - 1);
  const randomLike = getRandomIntInclusive(MIN_LIKE, MAX_LIKE);

  return {
    id: id,
    url: `photos/${randomIndexFoto}.jpg`,
    description: DESCRIPTIONS[randomDescription],
    likes: randomLike,
    comments: new Array(getRandomIntInclusive(1, 10)).fill(null).map((item, index) => createUserComment(index + 1)),
  };
};


const createPosts = () => new Array(USERS_POSTS_COUNTS).fill(null).map((item, id) => createUserPost(id + 1));

export {createPosts};
*/
