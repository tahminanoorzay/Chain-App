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

document.addEventListener("DOMContentLoaded", () => {
  let clientData = [
    {
      paragraph:
        "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
      name: "David Martino",
      details: "CEO of David Company",
    },
    {
      paragraph:
        "“CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
      name: "Jake H. Nyo",
      details: "CTO of Digital Company",
    },
    {
      paragraph:
        "“May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
      name: "May C.",
      details: "Founder of Catherina Co.",
    },
    {
      paragraph:
        "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
      name: "Random Staff",
      details: "Manager, Digital Company",
    },
    {
      paragraph:
        "“Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
      name: "Mark Am",
      details: "CTO, Amber Do Company",
    },
  ];

  let clients = document.querySelectorAll(".customClient");
  let clientPara = document.querySelector(".clientPara");
  let clientAnimitionSection = document.querySelector(
    ".clientAnimitionSection"
  );
  let clientName = document.querySelector(".clientName");
  let clientDetails = document.querySelector(".clientDetails");

  clientPara.textContent = clientData[0].paragraph;
  clientName.textContent = clientData[0].name;
  clientDetails.textContent = clientData[0].details;
  clientAnimitionSection.classList.add("show");

  clients.forEach((client, index) => {
    client.addEventListener("click", () => {
      clientAnimitionSection.classList.remove("show");

      setTimeout(() => {
        clientPara.textContent = clientData[index].paragraph;
        clientName.textContent = clientData[index].name;
        clientDetails.textContent = clientData[index].details;
        clientAnimitionSection.classList.add("show");
      }, 200);
    });
  });
});

// Sign In Form

const show_modal = document.querySelector(".show_modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close-modal");

const displayModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

show_modal.addEventListener("click", displayModel);
close_modal.addEventListener("click", hideModel);
overlay.addEventListener("click", hideModel);
