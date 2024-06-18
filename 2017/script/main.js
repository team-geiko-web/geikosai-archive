
$(function(){
	var win = $(window).width();
    var p = 530;
    if(win > p){
	  $(".scheduleImg").hide();
    } else {
	  $(".schedule").hide();
	}
	
	
  $("#toggle").click(function(){
    $("#menu").slideToggle();
    return false;
  });
	
  $(window).resize(function(){

    if(win > p){
      $("#menu").show();
	  $(".schedule").show();
	  $(".scheduleImg").hide();
    } else {
      $("#menu").hide();
	  $(".schedule").hide();
	  $(".scheduleImg").show();
    }
  });
});
