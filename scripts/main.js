const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const TINY_EFFECT_CLASS = 'is-tiny';
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
    showDetails();
  });
}

const getThumbnailsArray = () => {
  'use strict';
  const thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  const thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

const hideDetails = () => {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

const showDetails = () => {
  'use strict';
  const frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(() => {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

const addKeyPressHandler = () => {
  'use strict';
  document.body.addEventListener('keyup', event => {
    event.preventDefault();
    if (event.keyCode === ESC_KEY) {
      hideDetails();
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