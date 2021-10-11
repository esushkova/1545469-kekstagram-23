import { createPhotoArray } from './data.js';
import { createThumbnails } from './pictures.js';
import { createFullPhoto } from './full-picture.js';
import {isEscEvent} from './util.js';

let newArray = createPhotoArray();
console.log(newArray)

createThumbnails(newArray);

let thumbnailsElements = document.querySelectorAll('.picture');
let closeButton = document.querySelector('.big-picture__cancel');

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
