import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", markup);

function createMarkup(galleryItems) {
  return galleryItems
    .map((element) => {
      return `
        <li>
          <a class="gallery__item" href="${element.original}">
            <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
          </a>
        </li>   
      `;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
