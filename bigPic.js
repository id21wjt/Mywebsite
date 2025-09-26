$(document).ready(function () {
  $(".product-img").hover(
    function () {
      $(this).animate({ width: "150px", height: "150px" }, 300); 
    },
    function () {
      $(this).animate({ width: "50px", height: "50px" }, 300);   
    }
  );
});
