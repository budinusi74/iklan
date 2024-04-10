$(document).ready(function(){
  
$("#show").click(function(){
$("div, #0, #1, #2, #3").show();
});  
$("#AA1").click(function(){
$("div, #1").show();
$("#0, #2 #3").hide();
});
$("#AA2").click(function(){
$("div, #2, #3").show();
$("#0, #1").hide();
});
$("#AA3").click(function(){
$(".bahaya").show();
$(".aman, .waspada").hide();
});
});
