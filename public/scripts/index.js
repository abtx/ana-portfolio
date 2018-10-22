// (function() {
// })();


// bank
var loadedBank = false;
var handleBank = function() {
  // $('#container').addClass('animate-out');
  if (loadedBank === false) {
    $('#project-container').load('ajax/bank.html', function() {
      console.log('loaded');
      loadedBank = true;
    }).addClass('active');
  } else {
    $('#project-container').addClass('active');
  }
};

var closeOveraly = function() {
  console.log(closeOveraly);
  // $('#container').removeClass('animate-out');
  $('#project-container').removeClass('active');
};
