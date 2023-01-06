$(function(){

	var wid;
	var hig;
	var first = true;
	var fadeFlg = false;
	var contBoxTop = 100000;
	var dist;
	var pageName = $("#chara-unite-section").attr("class");
	
	$(window).resize(function(){
		wid = $(window).width();
		hig = $(window).height();
		
		if(wid <= 750){
			dist = hig*0.4;
		}else{
			dist = hig*0.7;
		}
		
		scrolleJudge();
	}).resize();
		
	function opening(){
		$(".main-container .chara-list .character").each(function(n){
			var my_class = $(this).parent().attr("class");
			var my_no = Number(my_class.substr(6));
			var _delay = 500;
			var _speed = 1000;
			if(my_no == 1){
				_delay = 2000;
				_speed = 1500;
			}
			if(pageName == "virtualsinger"){
				_delay = 200*(my_no);
				if(my_no == 6){
					_delay = 200*(my_no+1);
					_speed = 1500;
				}
			}
			$(this)
				.stop(true)
				.delay(_delay)
				.css({"margin-top":"30px"})
				.animate({"opacity":"1","margin-top":"0px"}, _speed, "easeOutQuart");
		});
		$(".main-container .chara-list .name").each(function(n){
			var _delay = 1000;
			if(pageName == "virtualsinger"){
				_delay = 2000;
			}
			$(this)
				.stop(true)
				.delay(_delay)
				.css({"margin-top":"20px"})
				.animate({"opacity":"1","margin-top":"0px"}, 1300, "easeOutQuart");
		});
		var bg_delay = 2000;
		if(pageName == "virtualsinger"){
			bg_delay = 1400;
		}
		$(".main-container .chara-bg")
			.stop(true)
			.delay(bg_delay)
			.animate({"opacity":"1"}, 1500, "linear");
	}
	$(window).scroll(function() {
		scrolleJudge();
	}).scroll();
	
	var scroll = 0;
	function scrolleJudge(){
		scroll = $(window).scrollTop();
		contBoxTop = $(".main-container .chara-list").offset().top;
	    if(scroll + hig - dist >= contBoxTop && !fadeFlg && !first){
			opening();
	    	fadeFlg = true;
		}		
	}
	
    setTimeout(function(){
    	first = false;
    	$(window).resize();
        $(window).scroll();
    }, 300);

});