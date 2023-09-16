document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".backtotop");
  function toggleBackToTopButton() {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }
  window.addEventListener("scroll", toggleBackToTopButton);
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
