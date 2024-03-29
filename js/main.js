/* global $  */
$(function() {
	var winH = $(window).height(),
		navH = $('nav').innerHeight();

	/* ============================== [01] Navbar  ==============================*/
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 250) {
			$('nav').addClass('navbar-sticky');
		} else $('nav').removeClass('navbar-sticky');
	});

	$('nav .navbar-nav .nav-link').click(function(e) {
		e.preventDefault();
		var dScroll = $(this).data('scroll');
		$('html,body').animate(
			{
				scrollTop: $(dScroll).offset().top
			},
			800
		);
	});

	// Sync Section active

	$(document).on('scroll', function() {
		$('section,header').each(function() {
			if ($(document).scrollTop() > $(this).offset().top - 58) {
				var sectionID = '#' + $(this).attr('id');

				$('nav .navbar-nav .nav-link').removeClass('active');
				$('nav .navbar-nav .nav-link[data-scroll="' + sectionID + '"]').addClass('active');
			}
		});
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

	// magnificPopup
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* ============================== [11] Sldie to Top  ==============================*/
	$('.slide-to-top').on('click', function(e) {
		e.preventDefault();
		$('body,html').animate(
			{
				scrollTop: 0
			},
			1000
		);
	});

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 250) {
			$('.slide-to-top').css('right', '2%');
		} else {
			$('.slide-to-top').css('right', '-100px');
		}
	});
});

/* ============================== [12] Loading Page  ==============================*/
$(window).on('load', function() {
	$('.loading-page')
		.delay(600)
		.fadeOut(800, function() {
			$('body').css('overflow-y', 'auto');
		});
});
