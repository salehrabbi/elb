//https://github.com/bfintal/Counter-Up

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


//https://www.jqueryscript.net/loading/Animated-Circle-Progress-Bar-with-jQuery-SVG-asPieProgress.html
jQuery(document).ready(function ($) {
    $('.pie_progress').asPieProgress({
        'namespace': 'pie_progress',
        barsize: '10',
        trackcolor: '#e1e1e1',
        barcolor: '#c51a08',
    });
    $('.pie_progress').asPieProgress('start');

});

		
$(function(){
	$('#Grid').mixitup();
});
			
new WOW().init();

