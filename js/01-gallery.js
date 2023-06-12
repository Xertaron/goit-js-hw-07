import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

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
// const markup = galleryItems
//   .map(
//     (photo) =>
//       `<div class=item><a class=link href=${photo.original}><li><img class=image src=${photo.preview} data-source=${photo.original} alt=${photo.description}></li></a></div>`
//   )
//   .join("");
// gallery.insertAdjacentHTML("afterbegin", markup);
// const selectedImage = document.querySelectorAll("img");
// console.log(selectedImage);
// const item = document.querySelector(".item");
// console.log(item);

// selectedImage.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     event.preventDefault;
//   });
// });

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

// document.querySelector("div.item").onclick = () => {
//   basicLightbox
//     .create(
//       `<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`
//     )
//     .show();
// };
// data-source=${photo.original}
