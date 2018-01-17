function stickyHeader() {			
			//For sticky header
			var height = $(window).scrollTop();
			$('body').removeClass('sticky');
			if(height  > 200) {
				$('body').addClass('sticky');
				
	    	} else {
				$('body').removeClass('sticky');
				
			}
			
}
