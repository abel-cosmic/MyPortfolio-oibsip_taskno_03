document.addEventListener("DOMContentLoaded", function () {
  const typingItems = document.querySelector(".typing-items");
  const textArray = [
    "Programmer",
    "Web Developer",
    "Back End Dev",
    "Front End Dev",
    "Web Designer",
    "Software Developer",
  ];
  let currentIndex = 0;
  let currentText = "";
  let charIndex = 0;
  let isDeleting = false;

  function typeText() {
    currentText = textArray[currentIndex];

    if (isDeleting) {
      typingItems.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex <= 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textArray.length;
      }
    } else {
      typingItems.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isDeleting = true;
      }
    }

    const speed = 150; // Constant typing speed
    setTimeout(typeText, speed);
  }

  // Start the typing loop
  typeText();
});
