$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});

$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});


var navOffset = $("header").offset().top;

$("header").wrap('<div class="header-placeholder"></div>');
$(".header-placeholder").height($("header").outerHeight());

$(window).scroll(function() {
	var scrollPos = $(window).scrollTop();

	if (scrollPos >= navOffset) {
		$("header").addClass("fixed mainHeader-resize")
	} else {
		$("header").removeClass("fixed")
	}
	if (scrollPos <= navOffset) {
		$("header").removeClass("fixed")
	} else {
		
	}
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top 
        }, 1000);
        return false;
      }
    }
  });
});



