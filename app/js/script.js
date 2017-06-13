$(function() {
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top < 100)
			$("header").stop().animate({'backgroundColor':'transparent'}, 'slow');
		else
			$("header").stop().animate({'backgroundColor':'rgba(174,169,201, .6)', 'height':'80px'}, 'slow'); 
	});
});