document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".items");
  const sections = document.querySelectorAll("section");
  const activeImages = [
    "assets/icons/outline-home (1).svg",
    "assets/icons/person-1.svg",
    "assets/icons/server-bold-1.svg",
    "assets/icons/paper-outline (1).svg",
    "assets/icons/portfolio-1.svg",
    "assets/icons/message (1).svg",
    "assets/icons/mail-outline-1.svg",
  ];
  const nonActiveImages = [
    "assets/icons/outline-home.svg",
    "assets/icons/person.svg",
    "assets/icons/server-bold.svg",
    "assets/icons/paper-outline.svg",
    "assets/icons/portfolio.svg",
    "assets/icons/message.svg",
    "assets/icons/mail-outline.svg",
  ];
  function setActiveItem(item) {
    const index = Array.from(navItems).indexOf(item);
    if (index >= 0) {
      navItems.forEach((navItem, i) => {
        const isActive = navItem === item;
        navItem.classList.toggle("active", isActive);
        const aTag = navItem.querySelector(".naver");
        const imgTags = navItem.querySelectorAll("img");
        aTag.style.color = isActive ? "#3d50fb" : "#fff";
        imgTags.forEach((imgTag, j) => {
          imgTag.src = isActive ? activeImages[i] : nonActiveImages[i];
        });
      });
    }
  }
  function setActiveSection() {
    let activeSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        activeSection = section;
      }
    });

    if (activeSection) {
      const sectionId = activeSection.id;
      const navItem = document.querySelector(`[href="#${sectionId}"]`);
      setActiveItem(navItem.parentElement);
    }
  }
  navItems.forEach((navItem) => {
    navItem.addEventListener("click", function (event) {
      event.preventDefault();
      setActiveItem(navItem.parentElement);
      const sectionId = navItem
        .querySelector("a")
        .getAttribute("href")
        .substring(1);
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", () => {
    setActiveSection();
  });
  setActiveItem(navItems[0]);
});
