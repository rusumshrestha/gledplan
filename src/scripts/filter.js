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