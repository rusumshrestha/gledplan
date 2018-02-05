jQuery(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            // if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            //     $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            // }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });
});
function reset_menu() {
    jQuery('.menuu-toggle').removeClass('active');
    jQuery('.main-menu').css({'display':'none'});
}
jQuery(document).ready(function($) {
    $('.menu-toggle').bind('click', function() {
        $(this).toggleClass('active');
        $('.main-menu').slideToggle();
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    jQuery('.fancybox').fancybox();
});
jQuery(".main-menu").hover(function () {
    jQuery('body').toggleClass("result_hover");
});

jQuery( function() {
    jQuery( "#datepicker" ).datepicker();
  } );



var $rangeslider = jQuery('#js-amount-range');
var $amount = jQuery('#js-amount-input');

$rangeslider
  .rangeslider({
    polyfill: false
  })
  .on('input', function() {
    $amount[0].value = this.value;
  });

$amount.on('input', function() {
  $rangeslider.val(this.value).change();
});


var $rangeslider1 = jQuery('#js-amount-range1');
var $amount1 = jQuery('#js-amount-input1');

$rangeslider1
  .rangeslider({
    polyfill: false
  })
  .on('input', function() {
    $amount1[0].value = this.value;
  });

$amount1.on('input', function() {
  $rangeslider1.val(this.value).change();
});