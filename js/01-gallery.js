import { galleryItems } from "./gallery-items.js";

// Change code below this line
const renderItem = (item) => `
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;

const itemsMarkup = galleryItems.map(renderItem).join("");

const gallery = document.querySelector("div.gallery");

const instance = basicLightbox.create(`
    <img src="" class="js-modal-img" width="800" height="600">
`);

gallery.addEventListener("click", (evt) => {
  evt.preventDefault();
  const imageSource = evt.target.dataset.source;

  const modalEl = instance.element();
  const modalImg = modalEl.querySelector(".js-modal-img");
  modalImg.setAttribute("src", imageSource);

  instance.show();
});

gallery.insertAdjacentHTML("afterbegin", itemsMarkup);
