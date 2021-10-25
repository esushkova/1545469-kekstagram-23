import { createPhotoArray } from './data.js';
import { createThumbnails } from './pictures.js';
import { isEscEvent } from './util.js';

let newArray = createPhotoArray();
console.log(newArray)

const openFullPhoto = (array) => {
  createThumbnails(array);

  let closeButton = document.querySelector('.big-picture__cancel');

  const closePhotoByClick = () => {
    document.querySelector('.big-picture').classList.add('hidden');
  };

  closeButton.addEventListener('click', closePhotoByClick);

  const closePhotoByEsc = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      document.querySelector('.big-picture').classList.add('hidden');
    }

  }

  document.addEventListener('keydown', closePhotoByEsc);
}

openFullPhoto(newArray)

//Форма
let body = document.querySelector('body');
let form = document.querySelector('.img-upload__form');
let openUploadButton = form.querySelector('#upload-file');
let imgUploadForm = form.querySelector('.img-upload__overlay');
let closeUploadButton = form.querySelector('#upload-cancel');

let hashtagsInput = document.querySelector('.text__hashtags'); //поле хэштегов
const re = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;

//let description = document.querySelector('.text__description'); //поле комментариев

openUploadButton.addEventListener('change', function () {
  imgUploadForm.classList.remove('hidden');
  body.classList.add('modal-open');
})

closeUploadButton.addEventListener('click', function () {
  openUploadButton.value = openUploadButton.defaultValue;
  imgUploadForm.classList.add('hidden');
  body.classList.remove('modal-open');
})

document.addEventListener('keydown', function (evt) {
  if (isEscEvent(evt)) {
    openUploadButton.value = openUploadButton.defaultValue;
    imgUploadForm.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

//валидация поля хэштега
function testUnique(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return false;
    }
  }
  return true;
}

hashtagsInput.addEventListener('input', function (evt) {
  let string = hashtagsInput.value;
  let space = ' ';
  let hashtagArray = string.split(space);
  let unique = testUnique(hashtagArray);

  for (let i = 0; i <= hashtagArray.length - 1; i++) {
    let item = hashtagArray[i].toUpperCase();

    if (!re.test(item)) {
      evt.preventDefault();
      hashtagsInput.setCustomValidity('Хештег должен начинаться с #, должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
      return false;
    }
    if (hashtagArray.length > 5) {
      evt.preventDefault();
      hashtagsInput.setCustomValidity('Вы можете указать не больше пяти хештегов');
      return false;
    }
    if (unique) {
      hashtagsInput.setCustomValidity('');
    } else {
      evt.preventDefault();
      hashtagsInput.setCustomValidity('Хештеги не могут повторяться');
      return false;
    }

    hashtagsInput.setCustomValidity('');
    hashtagsInput.reportValidity();
  }
});

document.addEventListener('keydown', function (evt) {
  if(hashtagsInput.focus([ { preventScroll: true } ])) {
    evt.stopPropagation()
  }
})

/*
  if(!re.test(hashtagsInput.value)) {
    hashtagsInput.setCustomValidity('Хештег должен начинаться с #, должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
  } else {
    hashtagsInput.setCustomValidity('');
  }
});

hashtagsInput.addEventListener('input', () => {
  hashtagsInput.setCustomValidity('');
})
*/


/*
document.addEventListener('keydown', function (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.querySelector('.big-picture').classList.add('hidden');
  }
});
*/




/*
let closeButton = document.querySelector('.big-picture__cancel');
let container = document.querySelector('.pictures');

container.addEventListener('click', function (evt) {
  if(evt.target.nodeName === "IMG") {
  document.querySelector('.big-picture').classList.remove('hidden');
    createFullPhoto(newArray, id)
  }
})

closeButton.addEventListener('click', function () {
  document.querySelector('.big-picture').classList.add('hidden');
})
*/



/*
let closeButton = document.querySelector('.big-picture__cancel');
let thumbnailsElements = document.querySelectorAll('.picture');

thumbnailsElements.forEach(element => {

  element.addEventListener('click', function () {
    let id = element.id - 1;

    document.querySelector('.big-picture').classList.remove('hidden');

    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');

    createFullPhoto(newArray, id)

    //обработчик закрытия по Esc навешивается на документ
    //только после срабатывания открытия
    document.addEventListener('keydown', function (evt) {
      if (isEscEvent(evt)) {
        evt.preventDefault();
        document.querySelector('.big-picture').classList.add('hidden');
      }
    });
  })
})

closeButton.addEventListener('click', function () {
  document.querySelector('.big-picture').classList.add('hidden');
})

*/
