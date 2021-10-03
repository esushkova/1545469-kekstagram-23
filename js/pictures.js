//функция отрисовывает превьюшки на странице
const createThumbnails = (images) => {
  let picturesBlock = document.querySelector('.pictures');
  let picturesTemplateFragment = document.querySelector('#picture').content;
  let template = picturesTemplateFragment.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < images.length; i++) {
    let element = template.cloneNode(true);
    element.querySelector('.picture__img').src = images[i].url;
    element.querySelector('.picture__likes').textContent = images[i].likes;
    element.querySelector('.picture__comments').textContent = images[i].comments;
    fragment.appendChild(element);
  };

  picturesBlock.appendChild(fragment)
}

export { createThumbnails };
