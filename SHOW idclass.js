$(document).ready(function(){

$("#AA0").click(function(){
$(".top").show();
$(".hide").hide();
});  
$("#AA1").click(function(){
$("div, #1").show();
$("#0, #2 #3").hide();
});
$("#AA2").click(function(){
$("div, #2, #3").show();
$("#0, #1").hide();
});
$("#show").click(function(){
$("div, #0, #1, #2, #3").show();
});
});
