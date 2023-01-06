$(window).on('load', function(){
    $.ajax({    
        url:"/master-data/json/music/index.json", // 通信先のURL
        type:"GET",        // 使用するHTTPメソッド
        dataType:"json", // 応答のデータの種類 
                        // (xml/html/script/json/jsonp/text)
        timespan:1000,       // 通信のタイムアウトの設定(ミリ秒)
        success: function(json){

          var all_contents = json.musics
            for( var i = 0; i < all_contents.length; i++ ){
              $(".list-music").append("<li class="+all_contents[i].unit+"><h4>"+ all_contents[i].title +"</h4><div><p class=\"lyric\"><span>"+ all_contents[i].lyricist +"</span></p><p class=\"song\"><span>"+ all_contents[i].composer +"</span></p></div><div class="+all_contents[i].virtualSinger+"><p>※バーチャル・シンガーVer.あり</p></div></li>");
            }

           $(".all").on('click', function(){
            $('.sub-navi-list li.all').addClass('active');
            $('.sub-navi-list li.virtualsinger').removeClass('active');
            $('.sub-navi-list li.leoneed').removeClass('active');
            $('.sub-navi-list li.moremore').removeClass('active');
            $('.sub-navi-list li.vivid').removeClass('active');
            $('.sub-navi-list li.wonder').removeClass('active');
            $('.sub-navi-list li.nightcord').removeClass('active');


            $('.list-music').addClass('all');
            $('.list-music').removeClass('virtualsinger');
            $('.list-music').removeClass('leoneed');
            $('.list-music').removeClass('moremore');
            $('.list-music').removeClass('vivid');
            $('.list-music').removeClass('wonder');
            $('.list-music').removeClass('nightcord');
           })

           $(".virtualsinger").on('click', function(){
            $('.sub-navi-list li.virtualsinger').addClass('active');
            $('.sub-navi-list li.all').removeClass('active');
            $('.sub-navi-list li.leoneed').removeClass('active');
            $('.sub-navi-list li.moremore').removeClass('active');
            $('.sub-navi-list li.vivid').removeClass('active');
            $('.sub-navi-list li.wonder').removeClass('active');
            $('.sub-navi-list li.nightcord').removeClass('active');


            $('.list-music').addClass('virtualsinger');
            $('.list-music').removeClass('all');
            $('.list-music').removeClass('leoneed');
            $('.list-music').removeClass('moremore');
            $('.list-music').removeClass('vivid');
            $('.list-music').removeClass('wonder');
            $('.list-music').removeClass('nightcord');
           })
           $(".leoneed").on('click', function(){
            $('.sub-navi-list li.leoneed').addClass('active');
            $('.sub-navi-list li.all').removeClass('active');
            $('.sub-navi-list li.virtualsinger').removeClass('active');
            $('.sub-navi-list li.moremore').removeClass('active');
            $('.sub-navi-list li.vivid').removeClass('active');
            $('.sub-navi-list li.wonder').removeClass('active');
            $('.sub-navi-list li.nightcord').removeClass('active');



            $('.list-music').addClass('leoneed');
            $('.list-music').removeClass('all');
            $('.list-music').removeClass('virtualsinger');
            $('.list-music').removeClass('moremore');
            $('.list-music').removeClass('vivid');
            $('.list-music').removeClass('wonder');
            $('.list-music').removeClass('nightcord');
           })
           $(".moremore").on('click', function(){
            $('.sub-navi-list li.moremore').addClass('active');
            $('.sub-navi-list li.all').removeClass('active');
            $('.sub-navi-list li.virtualsinger').removeClass('active');
            $('.sub-navi-list li.leoneed').removeClass('active');
            $('.sub-navi-list li.vivid').removeClass('active');
            $('.sub-navi-list li.wonder').removeClass('active');
            $('.sub-navi-list li.nightcord').removeClass('active');




            $('.list-music').addClass('moremore');
            $('.list-music').removeClass('all');
            $('.list-music').removeClass('virtualsinger');
            $('.list-music').removeClass('leoneed');
            $('.list-music').removeClass('vivid');
            $('.list-music').removeClass('wonder');
            $('.list-music').removeClass('nightcord');
           })

           $(".vivid").on('click', function(){
            $('.sub-navi-list li.vivid').addClass('active');
            $('.sub-navi-list li.all').removeClass('active');
            $('.sub-navi-list li.virtualsinger').removeClass('active');
            $('.sub-navi-list li.moremore').removeClass('active');
            $('.sub-navi-list li.leoneed').removeClass('active');
            $('.sub-navi-list li.wonder').removeClass('active');
            $('.sub-navi-list li.nightcord').removeClass('active');



            $('.list-music').addClass('vivid');
            $('.list-music').removeClass('all');
            $('.list-music').removeClass('virtualsinger');
            $('.list-music').removeClass('leoneed');
            $('.list-music').removeClass('moremore');
            $('.list-music').removeClass('wonder');
            $('.list-music').removeClass('nightcord');
           })
           $(".wonder").on('click', function(){
            $('.sub-navi-list li.wonder').addClass('active');
            $('.sub-navi-list li.all').removeClass('active');
            $('.sub-navi-list li.virtualsinger').removeClass('active');
            $('.sub-navi-list li.moremore').removeClass('active');
            $('.sub-navi-list li.leoneed').removeClass('active');
            $('.sub-navi-list li.vivid').removeClass('active');
            $('.sub-navi-list li.nightcord').removeClass('active');



            $('.list-music').addClass('wonder');
            $('.list-music').removeClass('all');
            $('.list-music').removeClass('virtualsinger');
            $('.list-music').removeClass('leoneed');
            $('.list-music').removeClass('vivid');
            $('.list-music').removeClass('moremore');
            $('.list-music').removeClass('nightcord');
           })
           $(".nightcord").on('click', function(){
            $('.sub-navi-list li.nightcord').addClass('active');
            $('.sub-navi-list li.all').removeClass('active');
            $('.sub-navi-list li.virtualsinger').removeClass('active');
            $('.sub-navi-list li.moremore').removeClass('active');
            $('.sub-navi-list li.leoneed').removeClass('active');
            $('.sub-navi-list li.wonder').removeClass('active');
            $('.sub-navi-list li.vivid').removeClass('active');



            $('.list-music').addClass('nightcord');
            $('.list-music').removeClass('all');
            $('.list-music').removeClass('virtualsinger');
            $('.list-music').removeClass('leoneed');
            $('.list-music').removeClass('vivid');
            $('.list-music').removeClass('moremore');
            $('.list-music').removeClass('wonder');
           })
        }
    })
})