function carousel() {
	var owl = $('.owlCarousel');
	owl.owlCarousel({
		loop: true,
	});

	$('.thumbnails').owlCarousel({
		rtl: true,
		margin: 10,
		nav: true,
		autoplay: true,
		smartSpeed: 450,
		dots: false,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 6
			}
		}
	});

	$('.main-slider').owlCarousel({
		items: 1,
		animateOut: 'fadeOut',
		autoplay: true,
		nav: true,
		loop: true,
		smartSpeed: 450,
		dots: false
	});

	$('.testi').owlCarousel({
		items: 1,
		autoplay: true,
		nav: true,
		loop: true
	});

	$('.fadeOut').owlCarousel({
		items: 1,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		autoplay: false,
		nav: true,
		dots: false,
		smartSpeed: 450
	});

	$('.carousel-thumbs').owlCarousel({
		items: 1,
		animateOut: 'fadeOut',
		autoplay: false,
		nav: true,
		dots: true,
		smartSpeed: 450
	});


	// 1) ASSIGN EACH 'DOT' A NUMBER
	dotcount = 1;

	jQuery('.carousel-thumbs .owl-dot').each(function() {
		jQuery(this).addClass('dotnumber' + dotcount);
		jQuery(this).attr('data-info', dotcount);
		dotcount = dotcount + 1;
	});

	// 2) ASSIGN EACH 'SLIDE' A NUMBER
	slidecount = 1;

	jQuery('.carousel-thumbs .owl-item').not('.cloned').each(function() {
		jQuery(this).addClass('slidenumber' + slidecount);
		slidecount = slidecount + 1;
	});

	// SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
	jQuery('.carousel-thumbs .owl-dot').each(function() {

		grab = jQuery(this).data('info');

		slidegrab = jQuery('.slidenumber' + grab + ' img').attr('src');
		console.log(slidegrab);

		jQuery(this).css("background-image", "url(" + slidegrab + ")");

	});

	// THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
	// TO MAKE IT ALL NEAT 
	amount = jQuery('.carousel-thumbs .owl-dot').length;
	gotowidth = 100 / amount;

	jQuery('.carousel-thumbs .owl-dot').css("width", gotowidth + "%");
	newwidth = jQuery('.carousel-thumbs .owl-dot').width();
	jQuery('.carousel-thumbs .owl-dot').css("height", newwidth + "px");
}