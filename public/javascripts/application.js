$(function() {

  $(".hero-wrapper").animate({top: 35 }, 700 )

  $(".fhc").hover(function(){
    $(".hero-overlay").toggleClass("fhc-filter");
  });

  $(".contact-me").hover(function(){
    $(".hero-overlay").toggleClass("contact-filter");
  });

  $(".resume").hover(function(){
    $(".hero-overlay").toggleClass("resume-filter");
  });

});
