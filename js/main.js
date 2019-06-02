/* global $ */
$(function() {
	var winH = $(window).height(),
		navH = $('nav').innerHeight();

	// [01] Navbar
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 250) {
			$('nav').addClass('navbar-sticky');
		} else $('nav').removeClass('navbar-sticky');
	});

	// [02] Header

	$('header').css('margin-top', -navH);

	$('header').height(winH);
	$('header img').height(winH);

	$(window).resize(function() {
		var winH = $(window).height();

		$('header').height(winH);
		$('header img').height(winH);
	});

	// [04] About

	$('.percentage span').each(function() {
		$(this).css({
			width: $(this).data('value'),
			content: $(this).data('value')
		});
	});

	// [05] Portfolio

	// init Isotope
	// var $grid = $('.gallery').isotope({
	// 	// options
	// });

	// // isotope
	// $('.gallery').isotope({
	// 	// options
	// 	itemSelector: '.items'
	// });

	// filter items on button click
	$('.filtering').on('click', 'span', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});
