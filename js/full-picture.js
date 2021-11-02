let commentList = document.querySelector('.social__comments');
let commentTemplate = commentList.querySelector('.social__comment');
const fragment = document.createDocumentFragment();
let button = document.querySelector('.social__comments-loader');
let fullPhotoImg = document.querySelector('.big-picture__img').children[0];
let fullPhotoLikes = document.querySelector('.likes-count');
let fullPhotoCommentsCount = document.querySelector('.comments-count-total');
let photoDescription = document.querySelector('.social__caption');
let count = 0;

const createFullPhoto = (array, id) => {

  fullPhotoImg.src = array[id].url;
  fullPhotoLikes.textContent = array[id].likes;
  fullPhotoCommentsCount.textContent = array[id].comments.length;
  photoDescription.textContent = array[id].description;

  commentList.innerHTML = '';

let arrayCommentsList = array[id].comments.slice(0, 2);


  arrayCommentsList.forEach(item => {

    let element = commentTemplate.cloneNode(true)

    element.children[0].src = item.avatar;
    element.children[0].alt = item.name;
    element.children[1].textContent = item.message;

    fragment.appendChild(element);

  })

  commentList.appendChild(fragment)


  if(commentList.childNodes.length === array[id].comments.length) {
    button.classList.add('hidden');

  }
  if(commentList.childNodes.length < array[id].comments.length) {
    button.classList.remove('hidden')
  }

    button.addEventListener('click', function () {
    commentList.innerHTML = '';
    count += 2;

    let arrayCommentsList = array[id].comments.slice(0, count + 2);

    if(count > array[id].comments.length) {
      console.log("work")
      count = array[id].comments.length
    }

    arrayCommentsList.forEach(item => {

      let element = commentTemplate.cloneNode(true)

      element.children[0].src = item.avatar;
      element.children[0].alt = item.name;
      element.children[1].textContent = item.message;

      fragment.appendChild(element);

    })

    commentList.appendChild(fragment)

    if(commentList.childNodes.length === array[id].comments.length) {
      button.classList.add('hidden');
    }
    if(commentList.childNodes.length < array[id].comments.length) {
      button.classList.remove('hidden')
    }


    console.log(commentList.childNodes.length)
    console.log(array[id].comments.length)


  })


}


export { createFullPhoto }


/*
//рабочий код

// здесь мы объявляем "статичные" константы, которые ВСЕГДА есть на странице
const fullPhotoImg = document.querySelector('.big-picture__img').children[0];
const fullPhotoLikes = document.querySelector('.likes-count');
const photoDescription = document.querySelector('.social__caption');
const loadNextCountCommentsButton = document.querySelector('.social__comments-loader');
const commentsCountInfoContainer = document.querySelector('.social__comment-count');
const commentsCountTotalContainer = commentsCountInfoContainer.querySelector('.comments-count-total');
const visibleCommentsCountContainer = commentsCountInfoContainer.querySelector('.visible-comments-count');
const commentListContainer = document.querySelector('.social__comments');
const commentTemplate = commentListContainer.querySelector('.social__comment');



// Объявляем переменную, в которой будем хранить
// текущее количество уже показанных комментариев
let visibleCommentsCountValue;

// Объявляем переменную, хранящую массив оставшихся комментариев
let commentsRemainingArray;

// Описываем функцию, которая добавляет следующие count комментариев
// и возвращает число, равное количеству по факту добавленных комментариев
// (т.к. может оказаться что мы хотим добавить count, а осталось меньше чем count)
function appendNextCountComments(count) {
  // если элементов не осталось - значит ничего не добавим. Результат функции - 0:
  if (commentsRemainingArray.length === 0) return 0;

  const fragment = document.createDocumentFragment();
  // создаем счетчик добавленных комментов:
  let currentFragmentElementsCount = 0;

  for (let i = 0; i < count; i++) {
    // если комментов не осталось, делаем break:
    if (commentsRemainingArray.length === 0) break;
    const comment = commentsRemainingArray.pop();
    const commentElement = commentTemplate.cloneNode(true)

    commentElement.children[0].src = comment.avatar;
    commentElement.children[0].alt = comment.name;
    commentElement.children[1].textContent = comment.message;

    // добавляем в фрагмент элемент и увеличиваем счетчик:
    fragment.appendChild(commentElement);
    currentFragmentElementsCount++;
  }

  // прикрепляем фрагмент с комментариями к контейнеру комментов:
  commentListContainer.appendChild(fragment);
  return currentFragmentElementsCount;
}

// Описываем функцию-обработчик нажатия на кнопку
function onLoadNextButtonClick() {
  // увеличиваем количество показанных коментариев на результат нашей функции
  visibleCommentsCountValue = visibleCommentsCountValue + appendNextCountComments(5);
  // обновляем значение счетчика:
  visibleCommentsCountContainer.textContent = visibleCommentsCountValue;
  // если после последнего добавления комментариев не осталось
  // скрываем кнопку добавления:
  if (commentsRemainingArray.length == 0) loadNextCountCommentsButton.classList.add('hidden');
}

// Добавляем обработчик на кнопку. Мы должны добавить его только 1 раз.
loadNextCountCommentsButton.addEventListener('click', onLoadNextButtonClick);

// Собственно, искомая функция:
const createFullPhoto = (array, id) => {
  fullPhotoImg.src = array[id].url;
  fullPhotoLikes.textContent = array[id].likes;
  photoDescription.textContent = array[id].description;

  // Если ни одного комента нет, скрываем информацию по комментариям (либо логика на твое усмотрение)
  // и кнопку загрузить еще, после чего завершаем работу функции
  if (array[id].comments.length === 0) {
    loadNextCountCommentsButton.classList.add('hidden');
    commentsCountInfoContainer.classList.add('hidden');
    return;
  } else {
    // а тут мы должны гарантировать, что они не скрыты
    commentsCountInfoContainer.classList.remove('hidden');
    loadNextCountCommentsButton.classList.remove('hidden');
  }

  // Вписываем общее количество комментариев в commentsCountTotal:
  commentsCountTotalContainer.textContent = array[id].comments.length;

  // Очищаем контейнер всех комментариев
  commentListContainer.textContent = '';

  // сохраняем массив комментариев для текущего фото и делаем reverse(),
  // чтобы далее извлекать элементы через pop()
  commentsRemainingArray = array[id].comments.reverse();

  // Обнуляем переменную, хранящую текущее количество показанных комментариев
  visibleCommentsCountValue = 0;

  // При первом открытии большого фото добавляем первые count комментов.
  // Таким образом изначальное количество показанных комментов равно результату нашей функции.
  // я сделал count = 1, чтобы наглядно посмотреть как все работает:
  visibleCommentsCountValue = appendNextCountComments(5);

  // теперь мы должны обновить счетчик коментов:
  visibleCommentsCountContainer.textContent = visibleCommentsCountValue;
}

export { createFullPhoto }
*/
