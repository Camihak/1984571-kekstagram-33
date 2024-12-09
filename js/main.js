import {displaysThumbnails, thumbnails} from './draw-thumbnails.js';
import {transferModalData, openFullsizePhoto} from './draw-fullsize-photo.js';
import {validateForm, blockEscapeAction, scallingPhoto} from './form.js';
displaysThumbnails(thumbnails);

const photosLinks = document.querySelectorAll('.picture');

photosLinks.forEach((photoLink) => {
  photoLink.addEventListener('click', (evt) => {
    openFullsizePhoto();
    document.body.classList.add('modal-open');
    transferModalData(evt, photoLink);
  });
});

validateForm();
blockEscapeAction();
scallingPhoto();

