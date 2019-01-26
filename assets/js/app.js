$("#contact").hide();
$("#portfolio").hide();

$(document).ready(function () {
  $(document).on("click", "#about-button", showAbout);
  $(document).on("click", "#projects-button", showProjects);
});

function showAbout() {
  $("#portfolio").hide();
  $("#about").show();
}

function showProjects() {
  $("#portfolio").show();
  $("#about").hide();
}
