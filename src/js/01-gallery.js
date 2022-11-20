import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const render = galleryItems
  .map(
    item => `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
  </a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', render);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);