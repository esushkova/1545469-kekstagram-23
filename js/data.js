import {MIN_AVATAR, MAX_AVATAR, MESSAGES, NAMES, USERS_COMMENTS_COUNTS, MIN_INDEX_FOTO, MAX_INDEX_FOTO, DESCRIPTIONS, MIN_LIKE, MAX_LIKE, USERS_POSTS_COUNTS} from './variables.js';
import {getRandomIntInclusive} from './util.js';


const createUserComment = (id) => {
  const randomAvatar = getRandomIntInclusive(MIN_AVATAR, MAX_AVATAR);
  const randomMessage = getRandomIntInclusive(0, MESSAGES.length - 1);
  const randomName = getRandomIntInclusive(0, NAMES.length - 1);
  return {
    id,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: MESSAGES[randomMessage],
    name: NAMES[randomName],
  };
};

createUserComment();

const arrayComments = new Array(USERS_COMMENTS_COUNTS).fill(null).map((item, index) => {
  const id = index + 1;
  return createUserComment(id);
});

console.log(arrayComments);


const createUserPost = (id) => {
  const randomIndexFoto = getRandomIntInclusive(MIN_INDEX_FOTO, MAX_INDEX_FOTO);
  const randomDescription = getRandomIntInclusive(0, DESCRIPTIONS.length - 1);
  const randomLike = getRandomIntInclusive(MIN_LIKE, MAX_LIKE);

  return {
    id,
    url: `photos/${randomIndexFoto}.jpg`,
    description: DESCRIPTIONS[randomDescription],
    likes: randomLike,
    comments: arrayComments,
  };
};

createUserPost();

const usersPosts = new Array(USERS_POSTS_COUNTS).fill(null).map((item, index) => {
  const id = index + 1;
  return createUserPost(id);
});

console.log(usersPosts);
