// Load Navigation Bar
$(document).ready(function () {
    $("#nav-placeholder").load("../html/navigation.html");
 });


// Load Footer Section
$(document).ready(function () {
    $("#footer-placeholder").load("../html/footer.html");
 });

$(document).ready( function () {
 $('#down').on('click',function () {
  $("html").scrollTop(0);
   $('html, body').animate({
     scrollTop: $('#projects').offset().top
 }, 10);
 });
});

/*
window.addEventListener("beforeunload", function() {
    document.body.classList.add("animate-out");
});
*/