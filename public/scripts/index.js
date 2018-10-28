$(document).keyup(function(e) {
  if (e.key === 'Escape') {
    // escape key maps to keycode `27`
    hideDetails();
  }
});
// 
// $(document).ready(function() {
//   showDetails();
//   setActiveProject(2);
// });

var projects = ['bank', 'mimo', 'nhs', 'social', 'storytelling'];
var activeProject;
// handling clicks

var handleClick = function(active) {
  showDetails();
  setActiveProject(active);
};

// nav

var goToAbout = function() {
  location.href = 'about.html';
};

var nextProject = function() {
  if (activeProject < projects.length - 1) {
    activeProject += 1;
    setActiveProject(activeProject);
  }
};

var prevProject = function() {
  if (activeProject > 0) {
    activeProject -= 1;
    setActiveProject(activeProject);
  }
};

// common functions

var setActiveProject = function(index) {
  activeProject = index;

  $('.project-details').removeClass('active');
  $('.project-details.' + projects[index]).addClass('active');

  $('.overlay-prev').show();
  $('.overlay-next').show();
  if (index > projects.length - 2) {
    $('.overlay-next').hide();
  } else if (index < 1) {
    $('.overlay-prev').hide();
  }
};

var closeOveraly = function() {
  hideDetails();
};

var showDetails = function() {
  // $('#container').addClass('blur');
  $('#project-overlay-wrapper').css({ display: 'flex' });
  $('#project-overlay-nav').css({ display: 'inline' });
  setTimeout(function() {
    $('#project-overlay-wrapper').addClass('active');
    $('#project-overlay-nav').addClass('active');
  }, 10);
};

var hideDetails = function() {
  $('#project-overlay-wrapper').removeClass('active');
  $('#project-overlay-nav').removeClass('active');
  // $('#container').removeClass('blur');
  setTimeout(function() {
    $('#project-overlay-wrapper').css({ display: 'none' });
    $('#project-overlay-nav').css({ display: 'none' });
  }, 651);
};
