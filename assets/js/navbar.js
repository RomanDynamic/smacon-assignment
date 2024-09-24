$(document).ready(function () {
  // Open the mobile menu
  $("#mobile-menu").click(function () {
    $("#slide-in-menu").css("left", "0");
  });

  // Close the mobile menu
  $("#close-menu").click(function () {
    $("#slide-in-menu").css("left", "-100%");
  });
});
