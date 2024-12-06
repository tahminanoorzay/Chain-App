const cards = document.querySelectorAll(".card-item");
const firstImages = [
  "/imgs/service-icon-01.png",
  "/imgs/service-icon-02.png",
  "/imgs/service-icon-03.png",
  "/imgs/service-icon-04.png",
];
const secondImages = [
  "/imgs/service-icon-hover-01.png",
  "/imgs/service-icon-hover-02.png",
  "/imgs/service-icon-hover-03.png",
  "/imgs/service-icon-hover-04.png",
];

cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    const img = card.querySelector("img");
    img.src = secondImages[index];
  });

  card.addEventListener("mouseleave", () => {
    const img = card.querySelector("img");
    img.src = firstImages[index];
  });
});
