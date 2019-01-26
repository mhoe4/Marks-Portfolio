$("#contact").hide();
$("#portfolio").hide();
$("#portfolio2").hide();

$(document).ready(function () {
  $(document).on("click", "#about-button", showAbout);
  $(document).on("click", "#projects-button", showProjects);
  $(document).on("click", "#resume-button", openResume);

});

function showAbout() {
  $("#portfolio").hide();
  $("#bio").show();
}

function showProjects() {
  $("#portfolio").show();
  $("#bio").hide();
}

function openResume() {
  window.open('assets/resume/resume.pdf'); 
}
