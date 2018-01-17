function scrollTop() {
			if ($(this).scrollTop() > 600) {
				$('.gotoTop').fadeIn();
			} else {
				$('.gotoTop').fadeOut();
			}		
		}
		$('.gotoTop').click(function() {
			$('html, body').animate({
			scrollTop: 0
			},800, 'easeInCubic');
			return false;
			});