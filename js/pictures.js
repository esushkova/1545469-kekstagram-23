import { createFullPhoto } from './full-picture.js';
import {isEscEvent} from './util.js';


//функция отрисовывает превьюшки на странице
const createThumbnails = (images) => {
  let picturesBlock = document.querySelector('.pictures');
  let picturesTemplateFragment = document.querySelector('#picture').content;
  let template = picturesTemplateFragment.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  template.setAttribute('id', '0');

  images.forEach(item => {
  let element = template.cloneNode(true);
  element.id = item.id;
  element.querySelector('.picture__img').src = item.url;
  element.querySelector('.picture__likes').textContent = item.likes;
  element.querySelector('.picture__comments').textContent = item.comments.length;
  fragment.appendChild(element);
});

  picturesBlock.appendChild(fragment)

  let thumbnailsElements = document.querySelectorAll('.picture');

  thumbnailsElements.forEach(element => {

    element.addEventListener('click', function () {
      let id = element.id - 1;

      document.querySelector('.big-picture').classList.remove('hidden');

      document.querySelector('.social__comment-count').classList.add('hidden');
      document.querySelector('.comments-loader').classList.add('hidden');
      document.querySelector('body').classList.add('modal-open');

      createFullPhoto(images, id);
})
  })

}

export { createThumbnails };


/*
const createThumbnails = (images) => {
  let picturesBlock = document.querySelector('.pictures');
  let picturesTemplateFragment = document.querySelector('#picture').content;
  let template = picturesTemplateFragment.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  template.setAttribute('id', '0');

  images.forEach(item => {
  let element = template.cloneNode(true);
  element.id = item.id;
  element.querySelector('.picture__img').src = item.url;
  element.querySelector('.picture__likes').textContent = item.likes;
  element.querySelector('.picture__comments').textContent = item.comments.length;
  fragment.appendChild(element);
});

  picturesBlock.appendChild(fragment)
}

export { createThumbnails };

*/
