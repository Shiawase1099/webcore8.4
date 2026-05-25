const button = document.querySelector(".show-more");
const slider = document.querySelector(".brands-slider");

button.addEventListener("click", () => {
  slider.classList.toggle("open");

  if (slider.classList.contains("open")) {
    button.textContent = "Скрыть";
  } else {
    button.textContent = "Показать все";
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
