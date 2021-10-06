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
}

export { createThumbnails };
