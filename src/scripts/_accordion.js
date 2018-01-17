// ACCORDION
function accordion() {
	function close_accordion_section() {
		jQuery('.accordion .accordion__section__title').removeClass('active');
		jQuery('.accordion .accordion__section__content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion__section__title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
}
