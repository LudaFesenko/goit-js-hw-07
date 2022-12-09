import { galleryItems } from "./gallery-items.js";
// Change code below this line
const renderItem = (item) => `
  <li>
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>`;

const itemsMarkup = galleryItems.map(renderItem).join("");

const gallery = document.querySelector("ul.gallery");

gallery.insertAdjacentHTML("afterbegin", itemsMarkup);

new SimpleLightbox(".gallery a", {
  caption: true,
  captionDelay: 250,
  captionsData: "alt",
});
