import { createPhotoArray } from './data.js';
import { createThumbnails } from './pictures.js';
import { isEscEvent, testUnique } from './util.js';
import { MAX_DESCRIPTHION_LENHTH } from './variables.js';
import './nouislider.js';

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

let submitButton = document.querySelector('.img-upload__submit');

let hashtagsInput = document.querySelector('.text__hashtags'); //поле хэштегов
const re = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
let description = document.querySelector('.text__description'); //поле комментариев

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
  if (isEscEvent(evt) && document.activeElement !== hashtagsInput && document.activeElement !== description) {
    openUploadButton.value = openUploadButton.defaultValue;
    imgUploadForm.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

//валидация по клику на кнопку
const checkHashtags = (evt) => {
  let string = hashtagsInput.value;
  let space = ' ';
  let hashtagArray = string.split(space);
  let unique = testUnique(hashtagArray);

  for (let i = 0; i <= hashtagArray.length - 1; i++) {
    let item = hashtagArray[i].toUpperCase();
console.log(item)
    if (!re.test(item)) {
      console.log('Я работаю')

      evt.preventDefault();
      hashtagsInput.setCustomValidity('Хештег должен начинаться с #, должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
    break
    }
    if (hashtagArray.length > 5) {
      evt.preventDefault();
      hashtagsInput.setCustomValidity('Вы можете указать не больше пяти хештегов');
      break
    }
    if (!unique){
      evt.preventDefault();
      hashtagsInput.setCustomValidity('Хештеги не могут повторяться');
      break
    }
    else {
      hashtagsInput.setCustomValidity('');
    }
  }
  hashtagsInput.reportValidity();

};

const checkDescription = (evt) => {
  let valueLength = description.value.length
  if (valueLength > MAX_DESCRIPTHION_LENHTH) {
    evt.preventDefault();
    description.setCustomValidity(`Максимальная длина комментария - 140 символов. Удалите лишние ${  valueLength - MAX_DESCRIPTHION_LENHTH } симв.`);
  } else {
    description.setCustomValidity('');

  }
  description.reportValidity();
};

const onSubmitButtonClick = (evt) => {
  checkHashtags(evt);
  checkDescription(evt);
};

submitButton.addEventListener('click', onSubmitButtonClick)



//управление размером фотографии

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP = 25;

scaleControlValue.setAttribute('value', `${MAX_SCALE}%`);
previewImage.style.transform = `scale(${MAX_SCALE}%, ${MAX_SCALE}%)`;

scaleControlBigger.addEventListener('click', () => {
  const value = Number(scaleControlValue.value.replace(/[^-0-9-.]/, ''));
  if(value < MAX_SCALE) {
    scaleControlValue.setAttribute('value', (`${value + STEP}%`));
    previewImage.style.transform = `scale(${value + STEP}%)`;
  }
});

scaleControlSmaller.addEventListener('click', () => {
  const value = Number(scaleControlValue.value.replace(/[^-0-9-.]/, ''));
  if(value > MIN_SCALE) {
    scaleControlValue.setAttribute('value', (`${value - STEP}%`));
    previewImage.style.transform = `scale(${value - STEP}%)`;
  }
});


