/* global $ */
$(function() {
	// [01] Header
	var winH = $(window).height(),
		navH = $('nav').innerHeight();

	$('header').css('margin-top', -navH);

	$('header').height(winH);
	$('header img').height(winH);

	$(window).resize(function() {
		var winH = $(window).height();

		$('header').height(winH);
		$('header img').height(winH);
	});

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 250) {
			$('nav').addClass('navbar-sticky');
		} else $('nav').removeClass('navbar-sticky');
	});
});
