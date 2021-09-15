/*

const smallImage = function (image) {
  const picturesBlock = document.querySelector('.pictures');
  const picturesTemplateFragment = document.querySelector('#picture').content;
  const template = picturesTemplateFragment.querySelector('.picture');
  const fragment = document.createDocumentFragment();


  for (let i = 0; i < image.length; i++) {
    const element = template.cloneNode(true);
    element.querySelector('.picture__img').src = image[i].url;
    element.querySelector('.picture__likes').textContent = image[i].likes;
    element.querySelector('.picture__comments').textContent = image[i].comments.length;
    fragment.appendChild(element);
  }

  picturesBlock.appendChild(fragment);
};

export { smallImage };
*/
