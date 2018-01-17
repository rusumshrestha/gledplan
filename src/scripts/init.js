// Variables
var ww;

// INIT
jQuery(window).load(function() {
	ww = $(window).width();
	scrollTop();
});

// INIT on Resize
$(window).resize(function() {

});


// INIT on Scroll
$(window).scroll(function() {
	scrollTop(); 
	stickyHeader();
});

// INIT on document load
$(document).ready(function(){
	searchTop();	
	sliderArrow();
	carousel();
	Tabs();
	accordion();
	fancybox();

     $('.resp-accordion, .accordion__section__title').bind('click',function(){
            var self = this;
            setTimeout(function() {
                theOffset = $(self).offset();
                $('body,html').animate({ scrollTop: theOffset.top - 200 });
            }, 310); // ensure the collapse animation is done
        });


});

$(window).resize(function(){
   var width = $(window).width();
   var height = $(window).scrollTop();
   if(width > 960){
       $('body').removeClass('sticky');
   }
})
.resize();//trigger the resize event on page load.








(function($){
	$(window).on("load",function(){
		
		$(".scrollable-div").mCustomScrollbar({
			theme:"minimal"
		});
		
	});
})(jQuery);

