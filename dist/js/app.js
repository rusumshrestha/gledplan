// function filter() {
// 	$('#removalists-select').change(function() {
// 		$( "#removalists-filter" ).submit();
// 	});
// }
jQuery(document).ready(function(){
$('#removalists-filter select').change(function(evt){
	evt.preventDefault();
	var url = $('#removalists-filter select option:selected').attr('data-url');
	// console.log(url);
	window.location = url;
});
});
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
//  //Fancybox Javascript
//  function fancythumb(){
//  $(".fancybox-thumb").fancybox({
//         prevEffect  : 'none',
//         nextEffect  : 'none',
//         openEffect  : 'elastic',
//         closeEffect : 'elastic',

//         // helpers : {
//         //     thumbs  : {
//         //         width   : 100,
//         //         height  : 100
//         //     }
//         // }
//     });
//  }
//  	var $containter = $('#container');
//     $containter.imagesLoaded( function(){
//         $containter.masonry({
//           itemSelector: '.box',
//           isAnimated: !Modernizr.csstransitions,
//           isFitWidth: true
//      });
// });
// 
// 
function fancybox(){
	$('.fancybox').fancybox();
}
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
function searchTop(){
$("#top-search-trigger").click(function(e){
					$("body").toggleClass('top-search-open');
					$("#top-search input").focus();
				});
				
				
					$("#top-cart__trigger").click(function(e){
					$(".top-cart").toggleClass('top-cart__open');
				});
}
function sliderArrow() {
		//For slider arrow down
		$(".slider__arrow").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".content").offset().top
	    }, 2000);
		});
		}
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

   function Tabs(){
   //Vertical Tab
        $('#parentVerticalTab').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
                 event.preventDefault();
            }
        });

        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'horizontal', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
                 event.preventDefault();
            }
        });
   }
//Full screen video
$( document ).ready(function() {

    // scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        // scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

// function scaleVideoContainer() {

//     var height = $(window).height() + 5;
//     var unitHeight = parseInt(height) + 'px';
//     $('.homepage-hero-module').css('height',unitHeight);

// }

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;
}


//mute and infinite loop

var tag = document.createElement('script');

        tag.src = "//www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('ytplayer', {
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        function onPlayerReady() {
            player.playVideo();
            // Mute!
            player.mute();
        }