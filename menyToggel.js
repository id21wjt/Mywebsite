$(document).ready(function () {
  // När man klickar på "Meny"-knappen
  $("#menu-toggle").click(function () {
    $("nav ul").slideToggle(200); // visa/dölj menyn med animation
  });
});
