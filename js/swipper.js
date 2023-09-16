document.addEventListener("DOMContentLoaded", function () {
  const carouselButtons = document.querySelectorAll("[data-carousel-button]");
  carouselButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset =
        button.getAttribute("data-carousel-button") === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");
      const activeSlide = slides.querySelector(".slide[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;
      activeSlide.removeAttribute("data-active");
      slides.children[newIndex].setAttribute("data-active", "true");
    });
  });
});
