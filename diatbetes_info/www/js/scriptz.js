$(document).ready(function() {
  console.log("workz!!!");

var offsetz = 70;


$("#link_def").click(function(){
  $('html, body').animate({
      scrollTop: $("#definition").offset().top - offsetz
  }, 2000);
});

$("#link_sym").click(function(){
  $('html, body').animate({
      scrollTop: $("#symptoms").offset().top - offsetz
  }, 2000);
});

$("#link_doc").click(function(){
  $('html, body').animate({
      scrollTop: $("#doctor").offset().top - offsetz
  }, 2000);
});

$("#link_caus").click(function(){
  $('html, body').animate({
      scrollTop: $("#causes").offset().top - offsetz
  }, 2000);
});

$("#link_treat").click(function(){
  $('html, body').animate({
      scrollTop: $("#treatment").offset().top - offsetz
  }, 2000);
});

$("#link_info").click(function(){
  $('html, body').animate({
      scrollTop: $("#information").offset().top - offsetz
  }, 2000);
});



$(window).scroll(function(){
    if ($(window).scrollTop() >= 5) {
       $('.navbar').addClass('fixed-header');
    }
    else {
       $('.navbar').removeClass('fixed-header');
    }
});

});
