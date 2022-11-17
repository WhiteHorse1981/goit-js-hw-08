// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const refsGallery = document.querySelector('.gallery');

function createGallaryMarkup(items) {
  return items
    .map(
      item => `<li>
                  <a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>
              </li>`
    )
    .join('');
}

refsGallery.innerHTML = createGallaryMarkup(galleryItems);
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
