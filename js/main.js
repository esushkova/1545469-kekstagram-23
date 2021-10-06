import { createPhotoArray } from './data.js';
import { createThumbnails } from './pictures.js';

console.log(createPhotoArray())


let newArray = createPhotoArray();

createThumbnails(newArray);

let close = document.querySelector('.big-picture__cancel');
let fullPhotoWindow = document.querySelector('.big-picture');

let elements = document.querySelectorAll('.picture');

elements.forEach(element => {

  element.addEventListener('click', function () {
    fullPhotoWindow.classList.remove('hidden');

    let id = element.id - 1;

    let fullPhotoImg = fullPhotoWindow.querySelector('.big-picture__img').children[0];
    let fullPhotoLikes = fullPhotoWindow.querySelector('.likes-count');
    let fullPhotoCommentsCount = fullPhotoWindow.querySelector('.comments-count');

    fullPhotoImg.src = newArray[id].url;
    fullPhotoLikes.textContent = newArray[id].likes;
    fullPhotoCommentsCount.textContent = newArray[id].comments.length;

  })

})


close.addEventListener('click', function () {
  fullPhotoWindow.classList.add('hidden');
})


