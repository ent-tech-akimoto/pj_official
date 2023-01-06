$(function(){
	var ww;
	var www;
	var hh;
	var per;
	var size_OS = 0;
	var this_id = $("body").attr("id");
	var paraL = 0;
	var scroll = 0;
	//$("#page").prepend('<div class="debug"></div>');
    //$(".parallax_wrap").css({"display":"none"});
	
	$(window).resize(function(){

		ww = $(window).width();
		hh = $(window).height();
		/*
		if(this_id == "top"){
			var mainH = $("#main").outerHeight();
			var paraH = $("body").innerHeight() - mainH;
			//$(".parallax_wrap").css({"top":mainH+"px", "height":paraH+"px"});
			//$(".parallax_wrap").css({"top":mainH+"px"});
		}
		*/
		if(ww <= 750){
			if(size_OS == 0){
				$('.imgChange').each(function(){
					$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
				});
			}
			www = ww;
			per = ww/750;
			paraL = 0;
			size_OS = 1;
		}else{
			if(size_OS == 1){
				$('.imgChange').each(function(){
					$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));
				});
			}
			
			www = ww < 1200 ? 1200 : ww;
			www = www > 1600 ? 1600 : www;
			paraL = (ww - www)/2;
			size_OS = 0;	
		}
		$(".parallax_wrap").css({"width":www+"px","left":paraL+"px"});

		scrollAction();
		
	}).resize();
	
	$(window).scroll(function() {
		scrollAction();
    });
	
	var scroll2 = 0;
	function scrollAction(){
		scroll = $(window).scrollTop();
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 400){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
	}
	var cc = 90;
	var bb = 180;
	function BgAnime(){
		scroll2 += Math.floor(((scroll - scroll2)/8)*10000)/10000;
		if(Math.abs(scroll - scroll2) > 0.001){
	    	$(".parallax_large").css({ 'transform': 'translateY(' + (-scroll2 * .4) + 'px)' });
    		$(".parallax_small").css({ 'transform': 'translateY(' + (-scroll2 * .2) + 'px)' });		
	    	$(".parallax_txt").css({ 'transform': 'translateY(' + (-scroll2 * .1) + 'px)' });
		}
		
		var this1_y = 50 * Math.sin(cc*0.01*Math.PI);		
		var this2_y = 20 * -Math.sin(bb*0.01*Math.PI);		
		//var this3_y = scroll * .1 + 10 * Math.sin(cc*0.01*Math.PI);		
    	$(".parallax_large .p_inner").css({ 'transform': 'translateY(' + this1_y + 'px)' });
    	$(".parallax_small .p_inner").css({ 'transform': 'translateY(' + this2_y + 'px)' });
    	//$(".parallax_txt .p_inner").css({ 'transform': 'translateY(' + this3_y + 'px)' });
    	cc++;
    	bb += 0.7;
    	
	}
	
	var timer;
    setTimeout(function(){
        $(window).resize();
        $(window).scroll();
        timer = setInterval(BgAnime, 50);
    }, 300);

});