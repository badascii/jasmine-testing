$(document).ready(function {
  $('.nav').on('click', 'a', function(event) {

  })
});

var activeNav = function(clicked) {
  currentURL = window.URL

  if (clicked === currentURL) {
    clicked.addClass('active');
  }

}

