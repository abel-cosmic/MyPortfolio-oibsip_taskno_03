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
    item.addEventListener("click", hideHeader);
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
