var swiper = new Swiper('.swiper-container', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 30,
  parallax: true,
  speed: 600
});

$(function() {
// Photo BG
  var slides = $('.swiper-slide');
  for (i=0; i<slides.length; i++) {
    imageUrl = 'assets/img/slider/'+(i+1)+'.jpg';
    var slide = slides[i];
    var $slide = $(slide);
    $slide.css('background-image', 'url(' + imageUrl + ')');
  }

// Colapsed menu
  $('.fa-bars').click(function(e){
    e.preventDefault();
    $('.level1-ul').toggle();
  });

// odpowiedni display menu dla różnych ekranów
  $(window).resize(function(){
    if($(window).width()>762){
      $('.level1-ul').css('display', 'flex');
    }else{
      $('.level1-ul').css('display', 'block');
    }
    if($(window).width()<450){
      $('.level2-ul').css('display', 'none');
    }else{
      $('level2-ul').css('display', 'flex');
    }
  });

// Otwieranie drugiego poziomu listy
  $('#entertainment').click(function(e){
    if($(window).width()>449){
      e.preventDefault();
      $('.level2-ul').toggle();
    };
  });


});
// Menu level 3 video
  $(document).ready(function() {
    $('#video-gallery').lightGallery(); 
  });

