// biblioteca SimpleLightbox și galeria de elemente
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

// Functia care afișează galeria
function displayGallery() {
  const gallery = document.querySelector('.gallery');

  // Iterăm prin elementele galeriei și le adăugăm la lista HTML
  galleryItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.original;
    const image = document.createElement('img');
    image.src = item.preview;
    image.alt = item.description;
    link.appendChild(image);
    listItem.appendChild(link);
    gallery.appendChild(listItem);
  });

  // Inițializăm SimpleLightbox pe elementele galeriei
  new SimpleLightbox('.gallery a');
}

// Apelăm funcția pentru a afișa galeria atunci când documentul este complet încărcat
document.addEventListener('DOMContentLoaded', displayGallery);
