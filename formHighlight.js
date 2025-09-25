document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelectorAll("input, textarea").forEach(falt => {
    
    falt.addEventListener("focus", () => {
      falt.style.backgroundColor = "#e6f7ff"; 
      falt.style.outline = "2px solid #2980B9"; 
    });

    falt.addEventListener("blur", () => {
      falt.style.backgroundColor = "white"; 
      falt.style.outline = "none";
    });
  });
});
