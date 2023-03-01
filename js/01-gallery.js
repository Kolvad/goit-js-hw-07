import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", markup);

function createMarkup(galleryItems) {
  return galleryItems
    .map((element) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${element.original}">
                <img
                    class="gallery__image"
                    src="${element.preview}"
                    data-source="${element.original}"
                    alt="${element.description}"
                />
            </a>
        </div>
        `;
    })
    .join("");
}
galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);

  instance.show();
});
