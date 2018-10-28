
$(document).ready(function(){
  
  $('#container').addClass('active');

  $('#contact').click(function(){

    $('#contact-popup').css({ display: 'inline' });
    setTimeout(function() {
      $('#contact-popup').addClass('active');
    }, 10);
  });

  $('#container, #project-overlay-nav, #project-overlay-wrapper').click(function(){
    $('#contact-popup').removeClass('active');
    setTimeout(function() {
      $('#contact-popup').css({ display: 'none' });
    }, 451);
  });

});
