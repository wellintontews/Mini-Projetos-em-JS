"user strict";

const images = [
  { id: "1", url: "imgs/img1.jpg" },
  { id: "2", url: "imgs/img2.jpg" },
  { id: "3", url: "imgs/img3.jpg" },
  { id: "4", url: "imgs/img4.jpg" },
  { id: "5", url: "imgs/img5.jpg" },
  { id: "6", url: "imgs/img6.jpg" },
];

const containerItems = document.querySelector(".container-items");

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
    <div class='item'>
    <img src='${image.url}'
    </div>
    `;
  });
};

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previus = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll(".item");
};

const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".item");
};

document.querySelector("#previus").addEventListener("click", previus);
document.querySelector("#next").addEventListener("click", next);
