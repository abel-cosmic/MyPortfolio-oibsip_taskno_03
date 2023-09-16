document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".project-nav a");
  const projectItems = document.querySelectorAll(".project-img");
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedCategory = link.getAttribute("data-category");
      categoryLinks.forEach((categoryLink) => {
        categoryLink.classList.remove("active");
      });
      link.classList.add("active");
      const shuffledItems = Array.from(projectItems);
      shuffleArray(shuffledItems);

      shuffledItems.forEach((item, index) => {
        const categories = item.classList;
        if (
          selectedCategory === "all" ||
          categories.contains(selectedCategory)
        ) {
          item.style.order = index;
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
