$(document).ready(function(){
  const myRegExp = /[a-z0-9]+\@[a-z]+\.[a-z]{3,}/;
  $("button").mouseover(function(){
    if(!$('input').val().match(myRegExp)) {
      $('input').css('border', '1px solid hsl(354, 100%, 66%)');
      $('#alert').css('display', 'block');
    }else{
      $('input').css('border', '1px solid hsl(223, 100%, 88%)');
      $('#alert').css('display', 'none');   
    }
  });
  $('form').mousemove(function(){
    if(!$('input').val().match(myRegExp)) {
        $('input').css('border', '1px solid hsl(354, 100%, 66%)');
        $('#alert').css('display', 'block');
      }else{
        $('input').css('border', '1px solid hsl(223, 100%, 88%)');
        $('#alert').css('display', 'none');   
      }    
  })
});