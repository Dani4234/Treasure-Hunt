$("button").click(function(){
  $("#alert").toggle();
});
$("#alert").click(function(){
  $("#map").fadeToggle();
});
$("#alert").click(function(){
  $("#alert").text("HURRY!");
});
$("#map").click(function(){
  $("#alert").hide();
});
