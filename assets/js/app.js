$("#contact").hide();
$("#portfolio").hide();

$(document).ready(function () {
  $(document).on("click", "#about-button", showAbout);
  $(document).on("click", "#projects-button", showProjects);
});

function showAbout() {
  $("#portfolio").hide();
  $("#bio").show();
}

function showProjects() {
  $("#portfolio").show();
  $("#bio").hide();
}
