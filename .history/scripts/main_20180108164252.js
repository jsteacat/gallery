const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const ESC_KEY = 27;

const setDetails = (imageUrl, titleText) => {
  'use strict';
  const detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  const detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

const imageFromThumb = (thumbnail) => {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

const titleFromThumb = (thumbnail) => {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

const setDetailsFromThumb = (thumbnail) => {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

const addThumbClickHandler = (thumb) => {
  'use strict';
  thumb.addEventListener('click', event => {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

const getThumbnailsArray = () => {
  'use strict';
  const thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  const thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

const hideDetail = () => {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

const showDetail = () => {
  'use strict';
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}

const addKeyPressHandler = () => {
  'use strict';
  document.body.addEventListener('keyup', event => {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideDetail();
    }
  });
}

const init = () => {
  'use strict';
  const thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

init();