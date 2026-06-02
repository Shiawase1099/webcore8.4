const button = document.querySelector(".show-more");
const buttonText = document.querySelector(".show-more-text");
const grid = document.querySelector(".brands-grid");

button.addEventListener("click", () => {
  grid.classList.toggle("open");
  button.classList.toggle("active");

  if (grid.classList.contains("open")) {
    buttonText.textContent = "Скрыть";
  } else {
    buttonText.textContent = "Показать все";
  }
});

if (window.innerWidth < 768) {
  new Swiper(".swiper", {
    slidesPerView: 1.3,
    spaceBetween: 16,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
