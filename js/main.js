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

const USERS_POSTS_COUNTS = 25;
const MIN_COMMENTS_ID = 1;
const MAX_COMMENTS_ID = 200;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_POST_ID = 1;
const MAX_POST_ID = 25;
const MIN_INDEX_FOTO = 1;
const MAX_INDEX_FOTO = 25;
const MIN_LIKE = 15;
const MAX_LIKE = 200;
const USERS_COMMENTS_COUNTS = 5;

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
getRandomIntInclusive(3, 56);

function checkStringLength(string, maxLength) {
    if (string.length <= maxLength) {
        return true;
    }

    return false;
}

checkStringLength('Hi', 15);


const createUserComment = () => {
    const randomIdComment = getRandomIntInclusive(MIN_COMMENTS_ID, MAX_COMMENTS_ID); //проблема с повторением id. исправить с помощью map
    const randomAvatar = getRandomIntInclusive(MIN_AVATAR, MAX_AVATAR);
    const randomMessage = getRandomIntInclusive(0, MESSAGES.length - 1);
    const randomName = getRandomIntInclusive(0, NAMES.length - 1);
    return {
        id: randomIdComment,
        avatar: `img/avatar-${randomAvatar}.svg`,
        message: MESSAGES[randomMessage],
        name: NAMES[randomName],
    };
};

createUserComment();

const arrayComments = new Array(USERS_COMMENTS_COUNTS).fill(null).map(() => createUserComment());

console.log(arrayComments);


const createUserPost = () => {
    const randomId = getRandomIntInclusive(MIN_POST_ID, MAX_POST_ID); //проблема с повторением id. исправить с помощью map
    const randomIndexFoto = getRandomIntInclusive(MIN_INDEX_FOTO, MAX_INDEX_FOTO);
    const randomDescription = getRandomIntInclusive(0, DESCRIPTIONS.length - 1);
    const randomLike = getRandomIntInclusive(MIN_LIKE, MAX_LIKE);

    return {
        id: randomId,
        url: `photos/${randomIndexFoto}.jpg`,
        description: DESCRIPTIONS[randomDescription],
        likes: randomLike,
        comments: arrayComments,
    };
};

createUserPost();


const usersPosts = new Array(USERS_POSTS_COUNTS).fill(null).map(() => createUserPost());

console.log(usersPosts);