document.addEventListener("DOMContentLoaded", function () {
  const toggleHeaderBtn = document.getElementById("toggleHeaderBtn");
  const mainHeader = document.getElementById("mainHeader");
  const navItems = document.querySelectorAll(".items");
  let isHeaderVisible = false;

  function hideHeader() {
    if (window.innerWidth <= 768) {
      mainHeader.style.left = "-1000px";
      isHeaderVisible = false;
    }
  }

  navItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      hideHeader();

      // Get the ID of the target content element
      const targetId = event.target.getAttribute("data-target");

      if (targetId) {
        // Find the target content element by its ID
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
          // Scroll the target content element into view
          targetContent.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  function toggleHeader() {
    if (isHeaderVisible) {
      mainHeader.style.left = "-1000px";
    } else {
      mainHeader.style.left = "0";
    }
    isHeaderVisible = !isHeaderVisible;
  }

  toggleHeaderBtn.addEventListener("click", toggleHeader);
});
