import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (element, { original, preview, description }) =>
    (element += `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`),
  ""
);
gallery.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});

console.log(galleryItems);
