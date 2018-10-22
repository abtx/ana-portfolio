// (function() {
// })();
$(document).keyup(function(e) {
     if (e.key === 'Escape') { // escape key maps to keycode `27`
       hideDetails();
    }
});

// handling bank
var handleBank = function() {
  showDetails();
  setActiveProject('.bank');
};


// common functions

var setActiveProject = function(project) {
  $('.project-details' + project).addClass('active');

};

var setInactiveProject = function(project) {
  $('.project-details' + project).removeClass('active');
};

var closeOveraly = function() {
  hideDetails();
};

var showDetails = function() {
  $('#project-overlay-wrapper').css({'display':'block'});
  setTimeout(function(){
    $('#project-overlay-wrapper').addClass('active');
  },10);
};

var hideDetails = function() {
  $('#project-overlay-wrapper').removeClass('active');

  setTimeout(function(){
    $('#project-overlay-wrapper').css({'display':'none'});
  },251);
};
