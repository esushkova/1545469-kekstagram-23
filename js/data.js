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
