const createFullPhoto = (array, id) => {

  let fullPhotoImg = document.querySelector('.big-picture__img').children[0];
  let fullPhotoLikes = document.querySelector('.likes-count');
  let fullPhotoCommentsCount = document.querySelector('.comments-count');

  fullPhotoImg.src = array[id].url;
  fullPhotoLikes.textContent = array[id].likes;
  fullPhotoCommentsCount.textContent = array[id].comments.length;
}


  export {createFullPhoto}
