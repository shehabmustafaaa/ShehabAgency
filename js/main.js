/* global $ */
$(function() {
	var winH = $(window).height(),
		navH = $('nav').innerHeight();

	/* ============================== [01] Navbar  ==============================*/
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 250) {
			$('nav').addClass('navbar-sticky');
		} else $('nav').removeClass('navbar-sticky');
	});

	/* ============================== [02] Header  ==============================*/

	$('header').css('margin-top', -navH);

	$('header').height(winH);
	$('header img').height(winH);

	$(window).resize(function() {
		var winH = $(window).height();

		$('header').height(winH);
		$('header img').height(winH);
	});

	/* ============================== [03] About  ==============================*/

	$('.percentage span').each(function() {
		$(this).css({
			width: $(this).data('value'),
			content: $(this).data('value')
		});
	});

	/* ============================== [03] Portfolio  ==============================*/

	// Init Isotope
	var $gallery = $('.gallery');
	$gallery.isotope({
		// options
		itemSelector: '.items',
		layoutMode: 'fitRows'
	});

	$('.filtering').on('click', 'span', function(e) {
		e.preventDefault();
		$(this)
			.addClass('active')
			.siblings()
			.removeClass('active');
		var filterValue = $(this).attr('data-filter');

		$gallery.isotope({ filter: filterValue });
	});


	
});
