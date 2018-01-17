function searchTop(){
$("#top-search-trigger").click(function(e){
					$("body").toggleClass('top-search-open');
					$("#top-search input").focus();
				});
				
				
					$("#top-cart__trigger").click(function(e){
					$(".top-cart").toggleClass('top-cart__open');
				});
}