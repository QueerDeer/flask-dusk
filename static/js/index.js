//= require jquery

$(document).mousedown(function(){
  $('div>div>div>div').each(function(id){
    $(this).css({
      position: 'relative',
      top: '-200px',
      opacity: 0,
      backgroundColor: "#000000"
    });
    var wait = Math.floor((Math.random()*3000)+1);
    $(this).delay(wait).animate({
      top: '0px',
      opacity: 0.9
    },1000);
    $('#content').html('<br><br><br><br><br>I love you.<br>And I will always be with you.<br>You are my sun, my moon, my all in all.');
  })
});
