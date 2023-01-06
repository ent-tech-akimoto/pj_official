$(function(){

	var first = true;
	var ww;
	var hh;
	var per;
	var size_OS = 0;
	
	var mv_per = 1;
	var mvW = 1920;
	var mvH = 1080;
	var mvT = 0;
	var mvL = 0;
	
	var mainVideo_per = 1;
	var mainVideoW = 1920;
	var mainVideoH = 1080;
	var mainVideoT = 0;
	var mainVideoL = 0;

	var scroll = 0;
	var scrolldist = 100;
	
	var hash = "";
	var hashFlg = 0;
	
    //---------------------
    // lottie
	var lottie_flg = false;	
	var anim01;
	var anim02;
	var params01 = {
		container: document.getElementById("lottie_scr_pc"),
		renderer: "svg",
		loop: true,
		autoplay: false,
		path: "../assets/js/1st/json/scroll_top_pc.json"
	};
	var params02 = {
		container: document.getElementById("lottie_scr_sp"),
		renderer: "svg",
		loop: true,
		autoplay: false,
		path: "../assets/js/1st/json/scroll_top_sp.json"
	};
	function LottieReStart(){
		if(!lottie_flg){
			anim01 = lottie.loadAnimation(params01);
			anim01.play();
			anim02 = lottie.loadAnimation(params02);
			anim02.play();
			$('.deco .deco_s_pc').each(function () {
				var element = $(this);
				var animation = bodymovin.loadAnimation({
	         		container: element[0],
    	     		renderer: 'svg',
        	 		loop: true,
         			autoplay: true,
			        path: "../assets/js/1st/json/scroll_mid_pc.json"
	    	   });
    	 	});
    	 	$('.deco .deco_s_sp').each(function () {
				var element = $(this);
				var animation = bodymovin.loadAnimation({
	         		container: element[0],
    	     		renderer: 'svg',
        	 		loop: true,
         			autoplay: true,
			        path: "../assets/js/1st/json/scroll_mid_sp.json"
	    	   });
    	 	});
		
			lottie_flg = true;
		}
	}

   	
	$(window).resize(function(){

		//ww = $(window).width();
		//hh = $(window).height();
		ww = window.innerWidth;
		hh = window.innerHeight;
   		if(ww <= 768){
			if(size_OS == 0){
				if(!first){
					setTimeout(function(){
					  window.location.reload(false);
					});
				}				
			}
			per = ww/768;
			
			var w_per = ww/768;
			mv_per = w_per;
			
			mvW = 768*mv_per;
			mvH = 1334*mv_per;
			//mvT = (hh - mvH)/2;
			mvT = 0;
			mvL = (ww - mvW)/2;
			
			scrolldist = 120*per;

			size_OS = 1;			
		}else{
			if(size_OS == 1){
				if(!first){
					setTimeout(function(){
					  window.location.reload(false);
					});
				}				
			}
			per = ww/3840;
			
			scrolldist = 200*per;
			
			var w_per = ww/1920;
			var h_per = hh/1080;
			mv_per = w_per > h_per ? w_per : h_per;
			
			mvW = 1920*mv_per;
			mvH = 1080*mv_per;
			//mvT = (hh - mvH)/2;
			mvT = 0;
			mvL = (ww - mvW)/2;
			
			size_OS = 0;	
		}
		$("#mainvisual").css({"height":hh+"px"});		
		$("#mainvisual .mainvisual_ss").css({"width":mvW+"px","height":mvH+"px","left":mvL+"px"});	
		$("#mainvisual .mainvisual_ss video").css({"width":mvW+"px","height":mvH+"px"});	
				
	}).resize();
	
  	$(window).scroll(function(){
		scroll = $(document).scrollTop();
  		//scrollMenu();
	}).scroll();
	
    setTimeout(function(){
        $(window).resize();
        $(window).scroll();
    }, 300);
    
	//---------------------------------------
	var menuAppearFlg = false;
  	function scrollMenu(){
	  	if(!first){
			if(scroll < 100) {
				if(!menuAppearFlg){
					$(".circle_wrap, #btn-menu")
						.animate({opacity:0}, 200, "linear",function(){
							$(".circle_wrap").css({"display":"none"});
						});
					menuAppearFlg = true;
				} 
			}else{
				if(menuAppearFlg){
					$(".circle_wrap, #btn-menu")
						.css({"display":"block"})
						.animate({opacity:1}, 500, "linear");
					menuAppearFlg = false;
				} 
			} 	
		}
  	}	
    
	var scrollpos = 0;
	//=======================
	//  portraitPop表示
	//=======================
	var isshowSeat1 = false;
	var closeAct1 = false;
	var $seat_lyr1 = $("#pop");
	var $seat_lyr1_cont = $("#pop .popBox");
	$('a.modal_pop').click(function(event){
		event.preventDefault();
		if(isshowSeat1 == false){
			var _href = $(this).attr("href");
			var _no = _href.substr(1);
			showSeat1(_no);
		}
	});
	$('#pop .mfp-close a,#pop .bottom_close a').click(function(event){
			event.preventDefault();
			hideSeat1();	
	});
	$('#pop .bg,#pop .bg2').click(function(event){
			event.preventDefault();
			hideSeat1();
	});
		   	
	function showSeat1(_no){
		if(isshowSeat1 == false){
			isshowSeat1 = true;
				
			$seat_lyr1_cont.find(".inner").each(function(){
				var this_no = $(this).data("pop");
				if(_no == this_no){
					$(this).css({"display":"block"});
				}else{
					$(this).css({"display":"none"});
				}
			});
			
			$seat_lyr1
				.animate({opacity:0}, 0)
				.css("display", "block")
				.animate({opacity:1}, 400, "linear");
			
			$seat_lyr1_cont
				.animate({"top":"52%",opacity:0}, 0)
				.css("display", "block")
				.animate({scrollTop:0},0)
				.delay(400)
				.animate({"top":"50%",opacity:1}, 400, "easeOutCubic");
				
				
	        //scrollpos = $('html').scrollTop();
    	    //$('body').addClass('fixed').css({'top': -scrollpos});
    	    
	        scrollpos = $('html').scrollTop();
    	    $('body').addClass('fixed');
    	    $('#wrapper').css({'top': -scrollpos});
			
		}
		return false;
	}
	
	//==================================================
	//portraitPop非表示
	//==================================================
	window.hideSeat1 = function()
	{
		if(isshowSeat1 == true){
			isshowSeat1 = false;
						
			$seat_lyr1.animate({opacity:0}, 600, null, function(){
				onComphideSeat1();
			});
		  
          $('body').removeClass('fixed');
          $('#wrapper').css({'top':0});
          window.scrollTo(0, scrollpos);
		}
		
		return false;
	}	
	//==================================================
	//portraitPop非表示完了時
	//==================================================
	function onComphideSeat1(){
	    
		$seat_lyr1_cont.css("display", "none");
		$seat_lyr1.css("display", "none");
	}


	//==================================================

	function scrollFirst(_hash){
	
      // スクロールの速度
      var speed = 800;// ミリ秒
      
      // 移動先を取得
      var target = $(_hash + "_top");
      
      // 移動先を数値で取得
      var position = target.offset().top - scrolldist;
            
      $('body,html').stop(true).animate({scrollTop:position}, speed, 'easeInOutCubic');
      
      return false;

	}

	//==================================================
    $(".circle_wrap, #btn-menu").css({"display":"none","opacity":"0"});
	
	function menuStart(){
		if(!menuAppearFlg){
			$(".circle_wrap, #btn-menu")
				.css({"display":"block"})
				.animate({opacity:1}, 800, "linear");
			menuAppearFlg = true;
		}		
	}
	
	//==================================================
	
	function opening(){
	    $(".parallax_wrap")
	    	.css({"display":"block","opacity":"0"})
	    	.animate({"opacity":"1"}, 1000, "linear");	    
	}
	
	var video1 = document.getElementById('mv_movie');;
	var video2 = document.getElementById('mv_movie_loop');;
	//video1.pause();
	//video2.pause();
	var opMovie = true;
	function mvPlay(){
		video2.pause();
		var v1_dur = video1.duration;
		video1.currentTime = 0;
		video1.play();
		setInterval(function(){
			if(opMovie){
				if(video1.currentTime >= (v1_dur - 1)){
					mvReplay();
				}
			}
		}, 10);
		setTimeout(function(){
			$("#mainvisual .gra_up").stop(true).animate({"opacity": "1"}, 600, 'linear');
			setTimeout(function(){
				$("#mainvisual .mv_logo").stop(true).addClass("appear").animate({"opacity": "1"}, 800, 'linear');
				$("#contents .scrollBtn").stop(true).delay(600).animate({"opacity": "1"}, 800, 'linear');
				setTimeout(function(){
					menuStart();
				}, 800);
			}, 3400);
		}, 5000);
	}
	function mvReplay(){
		opMovie = false;
		video2.loop = true;
		var v2_dur = video2.duration;
		video2.currentTime = v2_dur - 1;
		video2.play();
		setTimeout(function(){
			$("#mv_movie").css({"display":"none"});
	    }, 900); 
	}
	
	function mvPlayShort(){
		opMovie = false;
		$("#mv_movie").css({"display":"none"});
		video2.loop = true;
		video2.currentTime = 0;
		video2.play();
	}
	
    $(".parallax_wrap").css({"display":"none","opacity":"0"});
    $('body,html').stop(true).animate({scrollTop:0}, 300, 'linear');
    
	
    hash = location.hash;
    if(hash == "#casting" || hash == "#event" || hash == "#live" || hash == "#song" || hash == "#campaign" || hash == "#game" || hash == "#report"){
    	hashFlg = 1;
    }else if(hash == "#top"){
    	hashFlg = 2;    
    }
	setTimeout(function(){
		if(hashFlg == 0){
			$("#loader .loader_s").stop(true).animate({"opacity": "1"}, 600, 'linear');
		}
	}, 500);
	
	var loadingTime = 3000;
	if(hashFlg != 0){
		loadingTime = 1000;
	}
	setTimeout(function(){
		if(first){
	        init();
        }
    }, loadingTime);    
	jQuery.event.add(window,"load",function() {
		if(first){
	        init();
        }
	});
	
	
	function init(){
		first = false;
        $(window).resize();
   	    $(window).scroll();
		setTimeout(function(){
		    LottieReStart();
		    if(hashFlg == 0){
				$("#loader .load_play .load_play_s").animate({scale: "0.5"}, 0, 'linear');
				$("#loader .loader_s .load_bar .load_bar_s").stop(true).delay(800).animate({"width": "100%"}, 3400, 'easeOutExpo', function(){
					$("#loader .loader_s").stop(true).animate({"opacity": "0"}, 800, 'linear');
					$("#loader .loader_s .loader_ss").stop(true).animate({scale:'0'}, 800, 'easeInCubic');
					$("#loader .load_play").stop(true).delay(100).animate({"opacity": "1"}, 1000, 'linear').delay(1100).animate({"opacity": "0"}, 1500, 'linear',function(){
						$("#loader").css({"display":"none"});
					});
					$("#loader .load_play .load_play_s").stop(true).delay(100).animate({scale: "1.5"}, 1000, 'easeInQuart').animate({scale: "2.3"}, 3000, 'easeOutQuart');
					setTimeout(function(){
						$("#loader .load_play .load_play_ss").addClass("gray");
					}, 1100);
					$("#loader .load_bg").stop(true).delay(1100).animate({"opacity": "0"}, 1000, 'linear');
					setTimeout(function(){
						opening();
			    	    $(window).resize();
   					    $(window).scroll();
					}, 1600);
					setTimeout(function(){
   					    mvPlay();
					}, 200);
			   	    history.replaceState('', document.title, window.location.pathname + "#top");
				}); 
    		    $(window).resize();
   			    $(window).scroll();
   			 }else{
				mvPlayShort();
			  	menuStart();
				$("#mainvisual .mv_logo").addClass("appearshort").css({"opacity": "1"});
				$("#contents .scrollBtn").css({"opacity": "1"});
				$("#mainvisual .gra_up").css({"opacity": "1"});
				$("#loader").stop(true).animate({"opacity": "0"}, 1000, 'linear',function(){
					$("#loader").css({"display":"none"});
					hashAction();
					opening();
	    	    	$(window).resize();
				    $(window).scroll();
				});
    		    $(window).resize();
   			    $(window).scroll();
   			 }
    	}, 1300);
	}
	function hashAction(){
   	    if(hashFlg == 1){
   	    	scrollFirst(hash);	
   	    }
   	    history.replaceState('', document.title, window.location.pathname + "#top");
	}

});