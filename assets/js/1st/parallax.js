$(function(){
	var ww;
	var www;
	var hh;
	var per;
	var size_OS = 0;
	var this_id = $("body").attr("id");
	var scroll = 0;
	var fade_dist = 200;
	var first = true;
	//$("#page").prepend('<div class="debug"></div>');
    //$(".parallax_wrap").css({"display":"none"});

	var page_id = $("body").attr("id");

	
	$(window).resize(function(){

		ww = $(window).width();
		hh = $(window).height();
		if(ww <= 750){
			if(size_OS == 0){
				$('.imgChange').each(function(){
					$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
				});
			}
			www = ww;
			per = ww/750;
			fade_dist = 200*per;
			size_OS = 1;
		}else{
			if(size_OS == 1){
				$('.imgChange').each(function(){
					$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));
				});
			}
			
			www = ww < 1200 ? 1200 : ww;
			www = www > 1600 ? 1600 : www;
			per = ww/3840;
			fade_dist = 400*per;
			size_OS = 0;	
		}

		scrollAction();
		
	}).resize();
	
	$(window).scroll(function() {
		scrollAction();
    });
	
	var scroll2 = 0;
	function scrollAction(){
		scroll = $(window).scrollTop();
		if(!first){
	        $('.fadein').each(function(){
    	        var targetElement = $(this).offset().top;
        	    var scroll = $(window).scrollTop();
            	var windowHeight = $(window).height();
            	if (scroll > targetElement - windowHeight + fade_dist){
                	$(this).css('opacity','1');
                	$(this).css('transform','translateY(0)');
	            }
    	    });
    	}
	}
	var cc = 90;
	var bb = 180;
	var dist = 0.8;
	if(page_id == "top"){
		dist = 0.2 
	}
	function BgAnime(){
		scroll2 += Math.floor(((scroll - scroll2)/8)*10000)/10000;
		if(Math.abs(scroll - scroll2) > 0.001){
	    	$(".parallax_txt").css({ 'transform': 'translateY(' + (-scroll2 * dist) + 'px)' });
		}
		
    	
	}
	
	var timer;
    setTimeout(function(){
        $(window).resize();
        $(window).scroll();
        timer = setInterval(BgAnime, 50);
    }, 300);

	setTimeout(function(){
		if(first){
	        init();
        }
    }, 1000);    
	jQuery.event.add(window,"load",function() {
		if(first){
	        init();
        }
	});
	
	function init(){
		setTimeout(function(){
			first = false;
		}, 300);
	}
});