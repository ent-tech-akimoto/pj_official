var __ua = window.navigator.userAgent.toLowerCase();
var isIE = false;
var isSafari = false;
var win_firefox = false;
if (DEVICE.isTablet) {
	var metalist = document.getElementsByTagName('meta');
	for(var i = 0; i < metalist.length; i++) {
   		var name = metalist[i].getAttribute('name');
    	if(name && name.toLowerCase() === 'viewport') {
        	metalist[i].setAttribute('content', 'width=1280');
        	break;
    	}
	}
	_ua="tab";
}else if (DEVICE.isSp) {
	_ua="smp";
}else{
	_ua="pc";
}
if (DEVICE.isIe11){
	isIE = true;
}else if(DEVICE.isEdge){
	isIE = true;
}else if(DEVICE.isSafariPc){
	isSafari = true;
}else if(DEVICE.isFirefox){
	if(__ua.indexOf("windows nt") !== -1){
		win_firefox = true;
	}
}

window._ua = _ua;

$(function(){

var wid;
var hig;
var www;
var first = true;
var size_OS;

	if(_ua == "tab"){
		$("body").addClass("isTab");
	}else if(_ua == "smp"){
		$("body").addClass("isSp");
	}
	if(isIE){
		$("#wrapper").addClass("ie_browser");
	}
	var scroll = 0;
	var scrolldist = 100;
	var menu_btnH_half = 55;
	var menu_btnT = 12;
	var menu_btnH = 86;
	var menu_btnW = 130;
	var menu_btnW_op = 150;
	var menu_op_scroll = 0;
	
	var menu_btnH1 = 2;
	
	var mvW = 1920;
	var mvH = 1080;
	var mvT = 0;
	var mvL = 0;

    var pageFlg = 0;
	var $pageTOP = $('#pagetop .pagetop_s');
	var pageSize = document.documentElement.scrollHeight || document.body.scrollHeight;
	var pagetopB = $('.footer').offset().top;
	
	var page_id = $("body").attr("id");
	
	if(page_id == "campaign"){
		//$("#menu .menu_list .btn5 a").addClass("active");
	}
	
	$(window).resize(function(){

		//wid = $(window).width();
		//hig = $(window).height();
		wid = window.innerWidth;
		hig = window.innerHeight;
		
		if(wid <= 768){
			if(size_OS != 1){
				$('.imgChange').each(function(){
					$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
				});
			   	 if(menuFlg){
			   	 	menuOpen();
			   	 }
			}
			
			www = wid;
			per = www/768;

			scrolldist = 120*per;
			
			menu_btnT = 5*per;
			menu_btnH = 60*per;
			menu_btnH_half = 28*per;
			menu_btnW = 66*per;
			menu_btnW_op = 70*per;
			
			//menu_btnH1 = 6;
			
			var mvPerW = wid/768;
			var mvPerH = hig/1334;
			var mvPer = mvPerW > mvPerH ? mvPerW : mvPerH;
			mvW = 768*mvPer;
			mvH = 1334*mvPer;
			mvT = (hig - mvH)/2;
			mvL = (wid - mvW)/2;
			
			size_OS = 1;
		}else{
			if(size_OS != 0){
				$('.imgChange').each(function(){
					$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));
				});
			   	 if(menuFlg){
			   	 	menuOpen();
			   	 }
			}
			
			www = wid > 1280 ? 1280 : wid;
			per = wid/3840;
			
			scrolldist = 200*per;
			
			menu_btnT = 12*per;
			menu_btnH = 100*per;
			menu_btnH_half = 55*per;
			menu_btnW = 130*per;
			menu_btnW_op = 150*per;
			
			//menu_btnT = 6;
			//menu_btnH1 = 6;
			//menu_btnH1 = menu_btnH/5;
			
			var mvPerW = wid/1920;
			var mvPerH = hig/1080;
			var mvPer = mvPerW > mvPerH ? mvPerW : mvPerH;
			mvW = 1920*mvPer;
			mvH = 1080*mvPer;
			mvT = (hig - mvH)/2;
			mvL = (wid - mvW)/2;
						
			size_OS = 0;
		}
		$("#mv-video-container .mv-video").css({"width":mvW+"px","height":mvH+"px","top":mvT+"px","left":mvL+"px"},0);
		
		if(!menuFlg){
			//$(".menu-trigger p.menu-btn_s").stop(true).animate({"width":menu_btnW+"px","left":(menu_btnW_op - menu_btnW)/2+"px"},0);
			$(".menu-trigger p.menu-btn_s span:nth-of-type(1)").stop(true).animate({"top":Math_floor(menu_btnT)+"px","opacity":1},0);
			$(".menu-trigger p.menu-btn_s span:nth-of-type(2)").stop(true).animate({"top":Math_floor(menu_btnT+menu_btnH*0.2)+"px","rotate": "0deg"},0);
			$(".menu-trigger p.menu-btn_s span:nth-of-type(3)").stop(true).animate({"top":Math_floor(menu_btnT+menu_btnH*0.4)+"px","opacity":1},0);
			$(".menu-trigger p.menu-btn_s span:nth-of-type(4)").stop(true).animate({"top":Math_floor(menu_btnT+menu_btnH*0.6)+"px","rotate": "0deg"},0);
			$(".menu-trigger p.menu-btn_s span:nth-of-type(5)").stop(true).animate({"top":Math_floor(menu_btnT+menu_btnH*0.8)+"px","opacity":1},0);
		}else{
			//$(".menu-trigger p.menu-btn_s").stop(true).animate({"width":menu_btnW_op+"px","left":"0px"},0);
			$(".menu-trigger p.menu-btn_s span:nth-of-type(1)").stop(true).animate({"opacity":0},300,"linear");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(2)").stop(true).animate({"top":Math_floor(menu_btnH_half)+"px","rotate": "-45deg"},300,"easeOutQuart");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(3)").stop(true).animate({"opacity":0},300,"linear");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(4)").stop(true).animate({"top":Math_floor(menu_btnH_half)+"px","rotate": "45deg"},300,"easeOutQuart");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(5)").stop(true).animate({"opacity":0},300,"linear");
		}					
	}).resize();

	
  	$(window).scroll(function(){
  		scroll = $(window).scrollTop();
  		/*
  		if(size_OS == 0 && menuFlg){
  			if(menu_op_scroll != scroll){
  				menuOpen();
  			}
  		}
  		*/
	}).scroll();


    setTimeout(function(){
        $(window).resize();
        $(window).scroll();
    }, 300);
    
	//---------------------------------------

	    var $menu = $("#menu");
    	var $menuInner = $("#menu .menu_s");
 		var scrollpos = 0;
 		var menuFlg = false;

	   $(".menu-trigger").click(function(event) {
		  event.preventDefault();
		  menuOpen();
		}); 
	   $("#menu .menu_bg").click(function(event) {
		  event.preventDefault();
		  menuOpen();
		});

		function menuOpen(){
		  if(!$(".menu-trigger").hasClass("active")){
		  	$(".menu-trigger").addClass("active");
		  	menu_op_scroll = $(window).scrollTop();
		  	//$(this).animate({"right":"6px"},50);
            $menu.stop(true).css({"display":"block","opacity":1});	
            $menuInner.stop(true).css({"display":"block","opacity":1, "right":"-100%"}).animate({"right":"0"},400,"easeOutQuart");	
            $(".circle_wrap").stop(true).animate({"opacity":0},300);
        	//scrollpos = $(window).scrollTop();
			//$('.wrap').addClass('fixed').css({'top': -scrollpos});
			if(isIE){
				$('body').css({"overflow":"hidden"});
			}
			//$(".menu-trigger p.menu-btn_s").stop(true).animate({"width":menu_btnW_op+"px","left":"0px"},300,"linear");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(1)").stop(true).animate({"opacity":0},200,"linear");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(2)").stop(true).animate({"top":Math_floor(menu_btnH_half)+"px","rotate": "-45deg"},300,"easeOutQuart");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(3)").stop(true).animate({"opacity":0},200,"linear");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(4)").stop(true).animate({"top":Math_floor(menu_btnH_half)+"px","rotate": "45deg"},300,"easeOutQuart");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(5)").stop(true).animate({"opacity":0},200,"linear");
			menuFlg = true;
		  }else{
		  	$(".menu-trigger").removeClass("active");
		  	//$(this).animate({"right":"0px"},50);
            $menu.stop(true).delay(300).animate({"opacity":0},0);
            $menuInner.stop(true).animate({"right":"-100%"},300,"easeInQuart",function(){
            	$menuInner.css({"display":"none","opacity":0});
            	$menu.css({"display":"none","opacity":0});
            });		  	
            
            $(".circle_wrap").stop(true).animate({"opacity":1},300);
        	//$('.wrap').removeClass('fixed').css({'top': 0});
        	//window.scrollTo( 0 , scrollpos );	  	
			if(isIE){
				$('body').css({"overflow":"visible"});
			}
			//$(".menu-trigger p.menu-btn_s").stop(true).animate({"width":menu_btnW+"px","left":(menu_btnW_op - menu_btnW)/2+"px"},300,"easeOutQuart");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(1)").stop(true).animate({"opacity":1},300,"linear");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(2)").stop(true).animate({"top":Math_floor(menu_btnT+menu_btnH*0.2)+"px","rotate": "0deg"},300,"easeOutQuart");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(3)").stop(true).animate({"opacity":1},300,"linear");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(4)").stop(true).animate({"top":Math_floor(menu_btnT+menu_btnH*0.6)+"px","rotate": "0deg"},300,"easeOutQuart");
			$(".menu-trigger p.menu-btn_s span:nth-of-type(5)").stop(true).animate({"opacity":1},300,"linear");
			menuFlg = false;
		  }		
		}
		
	function Math_floor(_num){
		var _suu = Math.floor(_num*1000)/1000;
		return _suu
	}
 	/* =================================
	   スムーススクロール
	================================= */
   $('a.scroll_btn').click(function(event) {
   	  event.preventDefault();
   	        
   	 if(menuFlg){
   	 	menuOpen();
   	 }
      // スクロールの速度
      var speed = 800;// ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      
      // 移動先を数値で取得
      var position = target.offset().top - scrolldist;
            
      $('body,html').stop(true).animate({scrollTop:position}, speed, 'easeInOutCubic');
      return false;
   });
   
   $('a.scroll_btn2').click(function(event) {
   	  event.preventDefault();
   	        
   	 if(menuFlg){
   	 	menuOpen();
   	 }
      // スクロールの速度
      var speed = 800;// ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href")+"_top";
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      
      // 移動先を数値で取得
      var position = target.offset().top - scrolldist;
            
      $('body,html').stop(true).animate({scrollTop:position}, speed, 'easeInOutCubic');
      return false;
   });
   
   
   $('a.pagetop').click(function(event) {
   	  event.preventDefault();
   	  pagetopScroll();
	});  
	 
   function pagetopScroll(){
   	 if(menuFlg){
   	 	menuOpen();
   	 }
      var speed = 400;
      var position = 0;
      $('body,html').stop(true,true).animate({scrollTop:position}, speed, "easeInOutCubic");
      return false;
   }
       
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
    	//menuOpen();
		first = false;	
        $(window).resize();	
        $(window).scroll();
  		
        setTimeout(function(){
	    }, 1000);
    }
	
});