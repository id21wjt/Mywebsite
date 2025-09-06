// formHighlight.js
document.addEventListener("DOMContentLoaded", () => {
  // Hitta alla input- och textarea-fält i formuläret
  document.querySelectorAll("input, textarea").forEach(falt => {
    
    // När användaren klickar i fältet (focus)
    falt.addEventListener("focus", () => {
      falt.style.backgroundColor = "#e6f7ff"; // ljusblå bakgrund
      falt.style.outline = "2px solid #2980B9"; // blå ram
    });

    // När användaren lämnar fältet (blur)
    falt.addEventListener("blur", () => {
      falt.style.backgroundColor = "white"; // tillbaka till vit
      falt.style.outline = "none";
    });
  });
});
