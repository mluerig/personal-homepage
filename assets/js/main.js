(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

})();

// autofill path and caption
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".image-thumb").forEach(thumb => {
    let anchor = thumb.querySelector("a");
    let image = thumb.querySelector("img");
    let captionDiv = thumb.querySelector(".caption");

    // Extract values from `data-*` attributes
    let imagePath = anchor.getAttribute("data-src");
    let captionText = anchor.getAttribute("data-title");

    // Set image `src` and anchor `href`
    if (imagePath) {
      anchor.setAttribute("href", imagePath); // Lightbox link
      image.setAttribute("src", imagePath);   // Thumbnail
    }

    // Set caption text
    if (captionText && captionDiv) {
      captionDiv.textContent = captionText;
    }
  });
});
