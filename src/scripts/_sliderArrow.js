function sliderArrow() {
		//For slider arrow down
		$(".slider__arrow").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".content").offset().top
	    }, 2000);
		});
		}