// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const ulGalleryRef = document.querySelector('.gallery');

const galleryLayout = createGallerySet(galleryItems);

ulGalleryRef.insertAdjacentHTML('beforeend', galleryLayout)
    
function createGallerySet(gallery) {
    return galleryItems
        .map(({ preview, original, description }) =>
            `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>`)
        .join('')
}

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });