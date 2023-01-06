$(function(){

	var ww;
	var www;
	var hh;
	var per;
	var size_OS = 0;

	//=======================
	//  スライド用
	//=======================	
	var imgCount = 0;
	var slideW = 0;
	var next_Btn = 1;
	var now_Btn = 1;
	var changeFlg = false;
	var imgW = 280 + 10*2;
	var imgMax = 4;
	var def_left = 0;
	var original_s = "";
	var $slide = $(".bnr-slider .slide");
	
	$slide.each(function(n){
	   	original_s = $(this).html();
		$(this).find("div.list").each(function(m){
			imgCount++;
  		});
  		slideW = imgW*imgCount;
   	});
   	
	$(window).resize(function(){

		ww = $(window).width();
		hh = $(window).height();

   		if(ww <= 750){
			if(size_OS == 0){
				imgMax = 2;
			   	$slide.html(original_s);
  				if(imgCount <= imgMax){
		  			$slide.css({"width":slideW+"px", "margin-left":"auto", "margin-right":"auto"});
		  		}else{
				   	$slide.append(original_s);
	   				$slide.append(original_s);
		  			$slide.css({"width":slideW*3+"px", "margin-left":-(slideW - def_left)+"px", "margin-right":"0px"});		
				}
			}
			www = 750;
			per = www/750;

			imgW = 330 + 10*2;
			def_left = 25;
			size_OS = 1;			
		}else{
			if(size_OS == 1){
				imgMax = 4;
		  		slideW = imgW*imgCount;
			   	$slide.html(original_s);
  				if(imgCount <= imgMax){
		  			$slide.css({"width":slideW+"px", "margin-left":"auto", "margin-right":"auto"});
		  		}else{
				   	$slide.append(original_s);
	   				$slide.append(original_s);
		  			$slide.css({"width":slideW*3+"px", "margin-left":-(slideW - def_left)+"px", "margin-right":"0px"});		
				}
			}
			if(imgCount <= imgMax){
			
			}else{
			
			}
			www = ww < 1200 ? 1200 : ww;
			per = www/1200;
			imgW = 280 + 10*2;
			def_left = 0;
			size_OS = 0;	
		}
				
		slideW = imgW*imgCount;
		
		
  		if(imgCount <= imgMax){
		  	$slide.css({"width":slideW+"px", "margin-left":"auto", "margin-right":"auto"});
		}else{
	  		$slide.css({"width":slideW*3+"px", "margin-left":-(slideW + imgW*(now_Btn-1) - def_left)+"px", "margin-right":"0px"});	
	  	}
		
	}).resize();
	
    setTimeout(function(){
        $(window).resize();
    }, 300);
    
    
	$slide.each(function(n){
	   	$slide.html(original_s);
  		if(imgCount <= imgMax){
		  	$(this).css({"width":slideW+"px", "margin-left":"auto", "margin-right":"auto"});
  		}else{
		   	$(this).append(original_s);
	   		$(this).append(original_s);
		  	$(this).css({"width":slideW*3+"px", "margin-left":-(slideW - def_left)+"px", "margin-right":"0px"});		
		}
   	});

	
	function img_Change(Num){
		if(!changeFlg && now_Btn != Num && imgCount > imgMax){
			changeFlg = true;
			next_Btn = Num;			
			
			var dist = (next_Btn - now_Btn);
			if(dist < 0){
				dist = (next_Btn+imgCount - now_Btn);
			}
			var defX = Number($slide.css("margin-left").split("px")[0]);
			var posX = defX - imgW*dist;
			$slide
				.stop(true)
				.animate({"margin-left":posX+"px"}, 600, "easeOutQuart", function(){
					img_Change2();
				});
				
			if(next_Btn < 1){
				next_Btn += imgCount; 
			}
			if(next_Btn > imgCount){
				next_Btn -= imgCount;
			}
	       	now_Btn = next_Btn;
		}
	}
	function img_Change2(){
		
		$slide.css({"width":slideW*3+"px", "margin-left":-(slideW + imgW*(now_Btn-1) - def_left)+"px"});	
	
		var nowX = Number($slide.css("margin-left").split("px")[0]);
		if(nowX <= -slideW*2){
			$slide.css({"margin-left":(nowX + slideW)+"px"});	
		}
		if(nowX > -slideW){
			$slide.css({"margin-left":(nowX - slideW)+"px"});	
		}
			
       	changeFlg = false;
    }	

		//------------------------------------------
		// 間隔:3秒
		var interval = 3500;
		var timer;	
		var count = 0;
		
		
		function slideShowStart(){		
			// 最初のタイマーを開始
			startTimer();
		}
		// フェード切り替え一回分の関数
		function switchImg(){
			var no = now_Btn + 1;
			if(no == imgCount+1){
				no = 1;
			}
			img_Change(no);
			
		}	
		// タイマー開始関数
		function startTimer(){
			timer = setInterval(switchImg, interval);
		}
		// タイマー停止関数
		function stopTimer(){
			clearInterval(timer);
		}	
		//------------------------------------------  	
		
	function opening(){
		$(".mv-chara")
			.stop(true)
			.animate({"opacity":"1"}, 1300, "linear");
		$(".mv-catch, .mv-bnr, .mv-logo, .mv-pv")
			.stop(true)
			.delay(700)
			.css({"margin-top":"30px"})
			.animate({"opacity":"1","margin-top":"0px"}, 1000, "easeOutQuart",function(){
		    $(".parallax_wrap")
		    	.css({"display":"block","opacity":"0"})
		    	.animate({"opacity":"1"}, 1000, "linear");
			setTimeout(function(){
				if($slide.length){
				    slideShowStart();
			    }
	   		}, 300);
			$("#main-visual .light").each(function(n){
				var ran = Math.floor((Math.random()*900)/10)*100;
				var $this = $(this);
				var this_id = n+1;
				setTimeout(function(){
			    	lightStart($this, this_id);
			    }, ran);
			});
		});
	}
	function lightStart(_mc, _no){
		_mc
			.stop(true)
			.animate({"opacity":"1"}, 600, "linear",function(){
				var ran = Math.floor((Math.random()*500)/10+10)*100;
				setTimeout(function(){
					lightStart2(_mc, _no);
				}, ran);
			});
	
	}
	function lightStart2(_mc, _no){
		_mc
			.stop(true)
			.animate({"opacity":"0"}, 1000, "linear",function(){
				var ran = Math.floor((Math.random()*500)/10+10)*100;
				setTimeout(function(){
					lightStart(_mc, _no);
				}, ran);
			});
	}	
	
	
    $(".parallax_wrap").css({"display":"none","opacity":"0"});
    
	jQuery.event.add(window,"load",function() { // ローディング
		setTimeout(function(){
    	    $(window).resize();
    	}, 300);
	});
	$("#fade").delay(300).fadeOut(1000, function(){
		opening();
	}); 

});