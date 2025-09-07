$(document).ready(function () {
  // När man klickar på "Meny"-knappen
  $("#menu-toggle").click(function () {
    $("nav ul").slideToggle(400); // visa/dölj menyn med animation
  });
});
