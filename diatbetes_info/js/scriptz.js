$(document).ready(function() {
  console.log("workz!!!");

$("#link_def").click(function(){
  $('html, body').animate({
      scrollTop: $("#definition").offset().top
  }, 2000);
});

$("#link_sym").click(function(){
  $('html, body').animate({
      scrollTop: $("#symptoms").offset().top
  }, 2000);
});

$("#link_doc").click(function(){
  $('html, body').animate({
      scrollTop: $("#doctor").offset().top
  }, 2000);
});

$("#link_caus").click(function(){
  $('html, body').animate({
      scrollTop: $("#causes").offset().top
  }, 2000);
});

$("#link_treat").click(function(){
  $('html, body').animate({
      scrollTop: $("#treatment").offset().top
  }, 2000);
});

$("#link_info").click(function(){
  $('html, body').animate({
      scrollTop: $("#information").offset().top
  }, 2000);
});

});
