var body = $("body");
var startbutton = $("#startbutton");

var bgImages = [];
for(var i = 1; i<7; i++) {
  bgImages.push("url(assets/images/startBackgrounds/"+i+".jpg)");
}
bgImages.forEach(function(img){
    new Image().src = img;
});
var bg = bgImages[Math.floor(Math.random()*bgImages.length)];

body.css("background-image", bg)

startbutton.hover(function() {
  $(this).toggleClass("startbutton-small startbutton-large");
});

startbutton.click(function() {
  $(this).stop().unbind();
  $(this).animate({opacity:0},100);
  $('h1').animate({opacity:0},1000);
  $("#starttext").animate({opacity:0},400);
  $(".lines").animate({opacity:0},1000);
  $('.slidebg').fadeOut(1600);
  setTimeout(function() {
    $('h1').text("Welcome, Travelers");
    $('h1').animate({opacity:100},5000);
    $(".lines").animate({opacity:100},5000);
  }, 1600);
  setTimeout(function() {
    $('#start-container').remove();
    $("#menu-container").fadeIn(1600);
    $('.slidebg').fadeIn(1600);
  }, 2000);

});

$('#backbutton').on("click", function() {
  $('#playing-container').fadeOut(1600);
  $('.slidebg').fadeOut(1600);
  setTimeout(function() {
    $("#menu-container").fadeIn(1600);
    $('.slidebg').fadeIn(1600);
  },1600);
});

setButton($('.playbutton'));
setButton($('.menubutton'));

$('.playbutton').on("click",function() {
  $('body').css("background-image", "url(assets/images/backgrounds/"+$(this).attr('id')+".jpg)");
  $('#pause').children().removeClass('fa-play').addClass('fa-pause');
  $('#menu-container').fadeOut(1600);
  $('.slidebg').fadeOut(1600);
  $('#playlist-name').text($(this).children().text()+" Playlist");
  setTimeout(function() {
    $("#playing-container").fadeIn(1600);
    $('#volume-slider').val(49.5);
    $('.slidebg').fadeIn(1600);
  },1600);
  // $("#playing-container").animate({opacity:100},1000);
});

$('#play').on("click", function() {
  $(this).html("<i class='fas fa-pause'></i>")
  $(this).removeAttr('id');
  $(this).attr('id', 'pause');
})

function setButton(button) {
  button.mouseover(function() {
    $(this).css("background","#1f1f1f");
  });
  button.mouseleave(function() {
    $(this).css("background","black");
  });
  button.mousedown(function() {
    $(this).children().css("color","white");
  });
  button.mouseup(function() {
    $(this).children().removeAttr("style");
  });
}
