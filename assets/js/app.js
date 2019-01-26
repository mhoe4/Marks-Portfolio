$("#contact").hide();
$("#portfolio").hide();

$(document).ready(function () {
  $(document).on("click", "#home-button", showHome);
  $(document).on("click", "#projects-button", showProjects);
});

function showHome() {
  $("#portfolio").hide();
  $("#bio").show();
}

function showProjects() {
  $("#portfolio").show();
  $("#bio").hide();
}
