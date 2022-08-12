import { galleryItems } from './gallery-items.js';
import doGalleryTemplate from './galleryTemplates02.js';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const refs = {
    galleryDiv: document.querySelector('.gallery'),
};

const render = () => {
    const galleryList = galleryItems.map(doGalleryTemplate).join('');

    refs.galleryDiv.insertAdjacentHTML('beforeend', galleryList)
}

render();

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});



// ----- Event Listeners
refs.galleryDiv.addEventListener('click', lightbox );