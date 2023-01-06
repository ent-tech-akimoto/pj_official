$(function(){

	var wid;
	var hig;
	var first = true;
	var fadeFlg = false;
	var $this_target = $("#story-section .words-5");
	var my_OS = 0;
	
	$(window).resize(function(){
		wid = $(window).width();
		hig = $(window).height();
		if(wid <= 750){
			my_OS = 1;
		}else{
			my_OS = 0;
		}
		
		scrolleJudge();
	}).resize();
	
	$(window).scroll(function() {
		scrolleJudge();
	}).scroll();
		
	var scroll = 0;
	function scrolleJudge(){
		scroll = $(window).scrollTop();
    	var targetElement = $this_target.offset().top;
    	var scroll = $(window).scrollTop();
    	var windowHeight = $(window).height();
    	if (scroll > targetElement - windowHeight + 400 && !fadeFlg && !first && my_OS == 1){
    		opening();
		   	fadeFlg = true;
 	   	}
	}
	
	function opening(){
		var $parts1 = $this_target.find(".parts-1");
		var $parts2 = $this_target.find(".parts-2");
		
		var _delay1 = 500;
		var _speed1 = 2000;
		var _delay2 = 700;
		var _speed2 = 2200;
		
		$parts1
			.stop(true)
			.delay(_delay1)
			.css({"margin-top":"200px"})
			.animate({"opacity":"1","margin-top":"0px"}, _speed1, "easeOutQuint");
		$parts2
			.stop(true)
			.delay(_delay2)
			.css({"margin-top":"300px"})
			.animate({"opacity":"1","margin-top":"0px"}, _speed2, "easeOutQuint");
	}
	
    setTimeout(function(){
    	first = false;
    	$(window).resize();
        $(window).scroll();
    }, 300);

});