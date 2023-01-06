$(function(){

	var ww;
	var www;
	var hh;
	var per;
	var size_OS = 0;
	var movieW = 1600;
	var movieH = 920;
	var movieT = 0;
	var movieL = 0;
	
	
	$(window).resize(function(){
		ww = $(window).width();
		hh = $(window).height();

		if(ww <= 750){
			if(size_OS == 0){
			}
			www = 750;
			per = www/750;
			
			size_OS = 1;
		}else{
			if(size_OS == 1){
			}
			www = ww < 1200 ? 1200 : ww;
			per = www/1200;
			
			movieH = www*(9/16);
			if(movieH < 920 + 100){
				movieH = 920 + 100;
			}
			movieW = movieH*(16/9);
			movieT = (movieH - 920)/2;
			movieL = (movieW - www)/2;
			
			$('#backgroundMovie').css({"width":movieW + "px","height":movieH+"px","margin-top":-movieT+"px","margin-left":-movieL+"px",});
			size_OS = 0;
		}
	}).resize();

	setTimeout(function(){
		$(window).resize();
	}, 300);


	$('#backgroundMovie')
      .YTPlaylist([{
        videoURL: 'http://youtu.be/GAl6gnRlHvs?loop=1&playlist=0s2jS5r-IYs',
        containment: '#backgroundMovie',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showYTLogo: false,
        stopMovieOnBlur: false,
        showControls: false
      }]);

    setTimeout(function(){
    	$(window).resize();
    }, 300);

    $('#backgroundMovie02')
      .YTPlaylist([{
        videoURL: 'https://youtu.be/99Lgf-SkYEM',
        containment: '#backgroundMovie02',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showYTLogo: false,
        stopMovieOnBlur: false,
        showControls: false
      }]);

    setTimeout(function(){
    	$(window).resize();
    }, 300);

});