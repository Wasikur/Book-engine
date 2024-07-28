document.addEventListener("DOMContentLoaded", function () {
  const cityItems = document.querySelectorAll(".sidebar ul li");
  const monumentsContainer = document.querySelector(".monuments");
  const searchInput = document.getElementById("where");
  const container = document.getElementById("mainContainer");

  // Toggle container visibility on 'Search for Monuments' input click
  searchInput.addEventListener("click", function () {
    container.classList.toggle("active");
  });

  // Handle city item click
  cityItems.forEach((item) => {
    item.addEventListener("click", function () {
      cityItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");

      // Get the images for the selected city
      const images = this.getAttribute("data-images").split(",");

      // Clear existing images
      monumentsContainer.innerHTML = "";

      // Append new images
      images.forEach((img) => {
        const imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.alt = "Monument";
        monumentsContainer.appendChild(imgElement);
      });

      // Set custom underline width
      const underlineWidth = this.getAttribute("data-underline-width");
      this.style.setProperty("--underline-width", underlineWidth);
    });
  });
});
