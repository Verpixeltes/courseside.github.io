$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});


$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true,
    center: false  // Hier Änderungen vornehmen
  });
  