$(".send").click(
function(){
  var answer = 0;
  var x = $(".inpn").val();
  var base = $(".inp").val();
  var n = 1;
  while (true)
  {
    if(x==0) break;
    answer = answer + ( x% base * n);
    x = (x- (x%base) ) / base;
    n = n*10;
  }

  $(".ans").html(answer);
  
});



