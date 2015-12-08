$(function(){
	console.log('wprking')
	$('h1').on('mouseover', function(){
		$(this).toggleClass('class1');
	$('h1').on('mouseleave', function(){
		$(this).removeClass('class1');
	});
	$("divphotos").on('mouseover', function(){
		$(this).animate('bounce');
	});
	


