
$(document).keyup(function(e) {
   if (e.key === 'Escape') { // escape key maps to keycode `27`
     hideDetails();
  }
});

$(document).ready(function(){
  // showDetails();
  // setActiveProject(1);
});

var activeProject = 0;
var projects = ['bank', 'mimo', 'nhs', 'social', 'storytelling'];

// handling clicks

var handleClick = function(active) {
  showDetails();
  setActiveProject(active);
};


// nav

var nextProject = function() {

  if(activeProject < projects.length - 1){
    activeProject += 1;
    setActiveProject(activeProject);
  }
  else {
    activeProject = 0;
    setActiveProject(activeProject);
  }
};

var prevProject = function() {
  if(activeProject > 0) {
    activeProject -= 1;
    setActiveProject(activeProject);
  } else {
    activeProject = 4;
    setActiveProject(activeProject);
  }
};


// common functions

var setActiveProject = function(activeProject) {
  $('.project-details').removeClass('active');
  $('.project-details.' + projects[activeProject]).addClass('active');

};


var closeOveraly = function() {
  hideDetails();
};

var showDetails = function() {
  $('#project-overlay-wrapper').css({'display':'block'});
  $('#project-overlay-nav').css({'display':'block'});
  setTimeout(function(){
    $('#project-overlay-wrapper').addClass('active');
    $('#project-overlay-nav').addClass('active');
  },10);
};

var hideDetails = function() {
  $('#project-overlay-wrapper').removeClass('active');
  $('#project-overlay-nav').removeClass('active');
  setTimeout(function(){
    $('#project-overlay-wrapper').css({'display':'none'});
    $('#project-overlay-nav').css({'display':'none'});
  },251);
};
