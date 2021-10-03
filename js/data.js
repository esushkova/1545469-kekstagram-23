import { getRandomIntInclusive } from './util.js';
import { MESSAGES, NAMES, DESCRIPTIONS } from './variables.js';

//функция создания комментария
const createCommentObject = (index) => {
  const randomMessagesIndex = _.random(0, MESSAGES.length - 1);
  const randomNameIndex = _.random(0, NAMES.length - 1);

  return {
    id: index,
    avatar: 'img/avatar-' + getRandomIntInclusive(1, 6) + '.svg',
    message: MESSAGES[randomMessagesIndex],
    name: NAMES[randomNameIndex],
  };
};

//записываю массив комментариев
const createCommentsArray = () => {
  let commentsArray = [];

  for (let i = 1; i < getRandomIntInclusive(2, 10); i++) {
    commentsArray.push(createCommentObject(i));
  }

  return commentsArray
}

//функция создания объекта фотографии юзера
const createPhotoObject = (index) => {
  const randomDescriptionsIndex = getRandomIntInclusive(0, DESCRIPTIONS.length - 1);

  return {
    id: index,
    url: 'photos/' + getRandomIntInclusive(1, 25) + '.jpg',
    description: DESCRIPTIONS[randomDescriptionsIndex],
    likes: getRandomIntInclusive(15, 200),
    comments: createCommentsArray(),
  };
};

//функция создания массива фотографий
let createPhotoArray = () => {
  let photosArray = [];

  for (let i = 1; i <= 25; i++) {
    photosArray.push(createPhotoObject(i))
  }

  return photosArray
}

export { createPhotoArray }


//спросить про этот способ создания и записи массива
//const createPosts = () => new Array(USERS_POSTS_COUNTS).fill(null).map((item, id) => createUserPost(id + 1));
