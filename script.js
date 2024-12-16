// Change Cards Bg colors

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

// Change navbar color when thats scrolled

window.onscroll = function () {
  var navbar = document.querySelector(".navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// Change Clients details

let clientDetails = document.getElementsByClassName("clientDetails");
let clientPara = document.getElementsByClassName("clientPara");

let clientParagraphs = [
  "“CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
  "“May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
  "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
  "“Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
];

clientDetails.addEventListener("click", () => {
  clientDetails.innerHtml = clientParagraphs[0];
});
