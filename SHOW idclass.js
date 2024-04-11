$(document).ready(function(){
  
$("#show").click(function(){
$("div, .aman, .waspada, .bahaya").show();
$(".modalbahaya1").hide();
});  
$("#aman").click(function(){
$("div, .aman").show();
$(".waspada, .bahaya, .modalbahaya1").hide();
});
$("#waspada").click(function(){
$("div, .waspada").show();
$(".aman, .bahaya, .modalbahaya1").hide();
});
$("#bahaya").click(function(){
$("div, .bahaya").show();
$(".aman, .waspada, .modalbahaya1").hide();
});
});
