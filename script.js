var bg = "#963"
$(".send").click(
function(){
  $(".text").html($(".inp").val());
  $(".it").html($(".inpt").val());
  $(".to").html($(".inpto").val());
});
$(".out").click(function()
{
  $(".card").css("background-color", bg);
})

$(".in").click(function()
{
  $(".inside").css("background-color", bg);
})

$(".line").click(function()
{
  $(".inside").css("border-color", bg);
})

$(".red").click(function()
{
  $(".now").css("color", "#D92714");
  bg = "#D92714";
});

$(".g").click(function()
{
  $(".now").css("color", "#07A300");
  bg = "#07A300";
});

$(".y").click(function()
{
  $(".now").css("color", "#FFF49A");
  bg = "#FFF49A";
});

$(".b").click(function()
{
  $(".now").css("color", "#3CE6E6");
  bg = "#3CE6E6";
});

$(".B").click(function()
{
  $(".now").css("color", "#431AF5");
  bg = "#431AF5";
});

$(".o").click(function()
{
  $(".now").css("color", "#FFB84D");
  bg = "#FFB84D";
});

$(".p").click(function()
{
  $(".now").css("color", "#FFFFFF");
  bg = "#FFFFFF";
});