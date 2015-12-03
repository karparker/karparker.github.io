$(function(){
	$('.bell').on('click', function(){
		$('.alert').addClass('open');
	});
	$('.close').on('click', function(){
		$('.alert').removeClass('open');
	});
});
$(function(){
	console.log('working')
	$('.table2').on('mouseover', function(){
		$(this).toggleClass('class1');
	});
	$('.table2').on('mouseleave', function(){
		$(this).removeClass('class1');
	});
});
