import { createPhotoArray } from './data.js';
import { createThumbnails } from './pictures.js';
import {isEscEvent} from './util.js';

let newArray = createPhotoArray();
console.log(newArray)

createThumbnails(newArray);

let closeButton = document.querySelector('.big-picture__cancel');

const closePhotoByClick = () => {
  document.querySelector('.big-picture').classList.add('hidden');
  closeButton.removeEventListener('click', closePhotoByClick);

};

closeButton.addEventListener('click', closePhotoByClick);

const closePhotoByEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.querySelector('.big-picture').classList.add('hidden');
    document.removeEventListener('keydown', closePhotoByEsc);

  }
}

document.addEventListener('keydown', closePhotoByEsc);



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
