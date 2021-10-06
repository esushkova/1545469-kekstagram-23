import { createPhotoArray } from './data.js';
import { createThumbnails } from './pictures.js';
import { createFullPhoto } from './full-picture.js';

let newArray = createPhotoArray();

createThumbnails(newArray);

let fullPhotoWindow = document.querySelector('.big-picture');
let elements = document.querySelectorAll('.picture');
let close = document.querySelector('.big-picture__cancel');

elements.forEach(element => {

  element.addEventListener('click', function () {
        let id = element.id - 1;
        fullPhotoWindow.classList.remove('hidden');

    createFullPhoto(newArray, id)
  })
})

close.addEventListener('click', function () {
  fullPhotoWindow.classList.add('hidden');
})
