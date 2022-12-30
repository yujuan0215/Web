Food = ["拉麵", "義大利麵", "水餃", "三明治", "炒飯", "炒麵", "捲餅", "丼飯", "韓式拌飯", "關東煮", "咖哩", "飯糰", "牛肉麵", "炒泡麵", "麵線", "燴飯", "麻辣燙"]
imglink = ["url('./images/ramen.jpg')", "url('./images/spaghetti.jpeg')", "url('./images/dumplings.jfif')", "url('./images/sandwich.jfif')", "url('./images/frice.jpg')"
, "url('./images/fnoodle.jpg')", "url('./images/Burrito.jpg')", "url('./images/drice.jpg')", "url('./images/krice.jpg')"
,"url('./images/kcook.jfif')", "url('./images/curry.jfif')", "url('./images/rice.jfif')", "url('./images/bnoodle.jfif')", "url('./images/pm.jpg')"
, "url('./images/ms.jfif')", "url('./images/ff.jpg')", "url('./images/mlt.jpg')"]
$(".go").click(function()
{ 
    var c = Math.floor(Math.random()*17)
    $(".Ans").html(Food[c]);
    $(".image").css("background-image", imglink[c] )
});