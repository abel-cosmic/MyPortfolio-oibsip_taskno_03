document.addEventListener("DOMContentLoaded", function () {
  const toggleHeaderBtn = document.getElementById("toggleHeaderBtn");
  const mainHeader = document.getElementById("mainHeader");

  // Track the state of the header (visible or hidden)
  let isHeaderVisible = false;

  // Function to toggle the header's position
  function toggleHeader() {
    if (isHeaderVisible) {
      mainHeader.style.left = "-600px"; // Move header off-screen to the left
    } else {
      mainHeader.style.left = "0"; // Bring header to the original position
    }
    isHeaderVisible = !isHeaderVisible; // Toggle the state
  }

  // Add click event listener to the toggle button
  toggleHeaderBtn.addEventListener("click", toggleHeader);
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleHeaderBtn = document.getElementById("toggleHeaderBtn");
  const mainHeader = document.getElementById("mainHeader");
  const navItems = document.querySelectorAll(".items"); // Select all list items

  // Function to hide the header
  function hideHeader() {
    mainHeader.style.left = "-600px"; // Move header off-screen to the left
    isHeaderVisible = false; // Update the state to hidden
  }

  // Add click event listeners to each list item
  navItems.forEach(function (item) {
    item.addEventListener("click", hideHeader);
  });

  // Function to toggle the header's position
  function toggleHeader() {
    if (isHeaderVisible) {
      mainHeader.style.left = "-300px"; // Move header off-screen to the left
    } else {
      mainHeader.style.left = "0"; // Bring header to the original position
    }
    isHeaderVisible = !isHeaderVisible; // Toggle the state
  }

  // Add click event listener to the toggle button
  toggleHeaderBtn.addEventListener("click", toggleHeader);
});
