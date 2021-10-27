let commentList = document.querySelector('.social__comments');
let commentTemplate = commentList.querySelector('.social__comment');
const fragment = document.createDocumentFragment();

const createFullPhoto = (array, id) => {

  let fullPhotoImg = document.querySelector('.big-picture__img').children[0];
  let fullPhotoLikes = document.querySelector('.likes-count');
  let fullPhotoCommentsCount = document.querySelector('.comments-count');
  let photoDescription = document.querySelector('.social__caption');
  //let countShowComments = document.querySelector('.social__comment-count');

  fullPhotoImg.src = array[id].url;
  fullPhotoLikes.textContent = array[id].likes;
  fullPhotoCommentsCount.textContent = array[id].comments.length;
  photoDescription.textContent = array[id].description;

  //список комментариев
  commentList.innerHTML = '';

  let arrayCommentsList = array[id].comments.slice(0, 5);

  arrayCommentsList.forEach(item => {

    let element = commentTemplate.cloneNode(true)

    element.children[0].src = item.avatar;
    element.children[0].alt = item.name;
    element.children[1].textContent = item.message;

    fragment.appendChild(element);
  })

  commentList.appendChild(fragment)


  let button = document.querySelector('.social__comments-loader');

  console.log(commentList.childNodes)

  button.addEventListener('click', function () {
    let startToSlice = commentList.querySelectorAll('.social__comment').length;
    console.log(startToSlice)
    let arrayCommentsList = array[id].comments.slice(startToSlice, startToSlice + 5);

    arrayCommentsList.forEach(item => {

      let element = commentTemplate.cloneNode(true)

      element.children[0].src = item.avatar;
      element.children[0].alt = item.name;
      element.children[1].textContent = item.message;

      fragment.appendChild(element);

    })

    commentList.appendChild(fragment)


    console.log(commentList.childNodes)


    /*
    countShowComments.textContent = `${commentListsLength.length} из ${fullPhotoCommentsCount.textContent} комментариев `;
*/
  })


}

export { createFullPhoto }

