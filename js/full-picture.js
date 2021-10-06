const createFullPhoto = (array, id) => {

  let fullPhotoImg = document.querySelector('.big-picture__img').children[0];
  let fullPhotoLikes = document.querySelector('.likes-count');
  let fullPhotoCommentsCount = document.querySelector('.comments-count');
  let photoDescription = document.querySelector('.social__caption');

  fullPhotoImg.src = array[id].url;
  fullPhotoLikes.textContent = array[id].likes;
  fullPhotoCommentsCount.textContent = array[id].comments.length;
  photoDescription.textContent = array[id].description;

  //список комментариев
  let commentList = document.querySelector('.social__comments');
  let commentTemplate = commentList.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();

  array[id].comments.forEach(item => {

    let element = commentTemplate.cloneNode(true)

    element.children[0].src = item.avatar;
    element.children[0].alt = item.name;
    element.children[1].textContent = item.message;

    fragment.appendChild(element);
  })

  commentList.innerHTML = '';
  commentList.appendChild(fragment)

}

export { createFullPhoto }

