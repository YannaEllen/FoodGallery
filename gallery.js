const ORIGINAL_TEXT = "Hover over an image below to display here.";

const imageDiv = document.getElementById("image");

imageDiv.textContent = ORIGINAL_TEXT;
imageDiv.style.backgroundImage = "url('')";

const previews = document.querySelectorAll(".preview");

previews.forEach(img => {
  img.setAttribute("tabindex", "0");

  function show() {
    console.log("Show triggered for:", img.alt);
    imageDiv.style.backgroundImage = "url('" + img.src + "')";
    imageDiv.textContent = img.alt;
  }

  function reset() {
    console.log("Reset triggered");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = ORIGINAL_TEXT;
  }

  img.addEventListener("mouseenter", show);
  img.addEventListener("mouseleave", reset);

  img.addEventListener("focus", show);
  img.addEventListener("blur", reset);
});
