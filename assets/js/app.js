$("#contact").hide();
$("#portfolio").hide();
$("#resume").hide();

$(document).ready(function () {
  $(document).on("click", "#about-button", showAbout);
  $(document).on("click", "#projects-button", showProjects);
  $(document).on("click", "#resume-button", openResume);
});

function showAbout() {
  $("#portfolio").hide();
  $("#bio").show();
  $("#resume").hide();
}

function showProjects() {
  $("#portfolio").show();
  $("#bio").hide();
  $("#resume").hide();
}

function openResume() {
  //window.open('assets/resume/resume.pdf');
  $("#bio").hide();
  $("#portfolio").hide();
  $("#resume").show();
}
