import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = markupGallery(galleryItems);
gallery.insertAdjacentHTML("afterbegin", markup);
gallery.addEventListener("click", imageClick);

function markupGallery(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href="${original}"> <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKeyPress);
    },
  }
);
function imageClick(event) {
  event.preventDefault();
  const dataSource = event.target.dataset.source;
  if (!dataSource) return;
  instance.element().querySelector("img").src = dataSource;
  instance.show();
}

function onEscKeyPress(event) {
  if (event.code !== "Escape") return;
  instance.close();
}
