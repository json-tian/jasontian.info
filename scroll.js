// Smooth Scrolling
$(".nav-link, .navbar-brand, #myBtn").click(function(e) {
  var sectionTo = $(this).attr("href");
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(sectionTo).offset().top
    },
    1000
  );
});
