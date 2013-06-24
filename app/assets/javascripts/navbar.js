$(document).ready(function() {
    activeNav();
});

var activeNav = function() {
  var currentURL = document.URL;
  $('.nav li').removeClass('active');
  $('li a').each(function(){
    if (this.href === currentURL) {
      $(this).parent().addClass('active');
    }
  });
};