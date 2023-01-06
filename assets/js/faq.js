$(window).on('load', function(){
    $.ajax({    
        url:"/master-data/json/faq/index.json", // 通信先のURL
        type:"GET",        // 使用するHTTPメソッド
        dataType:"json", // 応答のデータの種類 
                        // (xml/html/script/json/jsonp/text)
        timespan:1000,       // 通信のタイムアウトの設定(ミリ秒)
        success: function(json){
          var all_q = json.faqs.filter(function(item, index){
              if (item.oftenFlg == true ) return true;
            });
            for( var i = 0; i < all_q.length; i++ ){
              $(".q-contents").append("<li><h4>"+ all_q[i].question +"</h4><p>"+ all_q[i].answer +"</p></li>");
            }
            var text = "よくある質問";
            $(".sub-navi").append("<li><a href=\"#all\">"+ text +"</a><div class=\"arrow\"></li>");


            //ゲーム進行
           var all_game = json.faqs.filter(function(item, index){
              if (item.category == "ゲーム進行" ) return true;
            });
            for( var i = 0; i < all_game.length; i++ ){
              $(".game-contents").append("<li><h4>"+ all_game[i].question +"</h4><p>"+ all_game[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#game\">"+ all_game[0].category +"</a><div class=\"arrow\"></li>");

              //みんなでライブ
            var all_live = json.faqs.filter(function(item, index){
              if (item.category == "みんなでライブ" ) return true;
            });
            for( var i = 0; i < all_live.length; i++ ){
              $(".live-contents").append("<li><h4>"+ all_live[i].question +"</h4><p>"+ all_live[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#live\">"+ all_live[0].category +"</a><div class=\"arrow\"></li>");

              //リズムゲーム
            var all_rhythm = json.faqs.filter(function(item, index){
              if (item.category == "リズムゲーム" ) return true;
            });
            for( var i = 0; i < all_rhythm.length; i++ ){
              $(".rhythm-contents").append("<li><h4>"+ all_rhythm[i].question +"</h4><p>"+ all_rhythm[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#rhythm\">"+ all_rhythm[0].category +"</a><div class=\"arrow\"></li>");

              //データ引継ぎ
            var all_data = json.faqs.filter(function(item, index){
              if (item.category == "データ引き継ぎ" ) return true;
            });
            for( var i = 0; i < all_data.length; i++ ){
              $(".data-contents").append("<li><h4>"+ all_data[i].question +"</h4><p>"+ all_data[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#data\">"+ all_data[0].category +"</a><div class=\"arrow\"></li>");

              //チャレンジライブ
            var all_challenge = json.faqs.filter(function(item, index){
              if (item.category == "チャレンジライブ" ) return true;
            });
            for( var i = 0; i < all_challenge.length; i++ ){
              $(".challenge-contents").append("<li><h4>"+ all_challenge[i].question +"</h4><p>"+ all_challenge[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#challenge\">"+ all_challenge[0].category +"</a><div class=\"arrow\"></li>");

              //ユニット・メンバー
            var all_unit = json.faqs.filter(function(item, index){
              if (item.category == "ユニット・メンバー" ) return true;
            });
            for( var i = 0; i < all_unit.length; i++ ){
              $(".unit-contents").append("<li><h4>"+ all_unit[i].question +"</h4><p>"+ all_unit[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#unit\">"+ all_unit[0].category +"</a><div class=\"arrow\"></li>");

              //クリスタル
            var all_crystal = json.faqs.filter(function(item, index){
              if (item.category == "クリスタル" ) return true;
            });
            for( var i = 0; i < all_crystal.length; i++ ){
              $(".crystal-contents").append("<li><h4>"+ all_crystal[i].question +"</h4><p>"+ all_crystal[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#crystal\">"+ all_crystal[0].category +"</a><div class=\"arrow\"></li>");

              //ガチャ
            var all_gacha = json.faqs.filter(function(item, index){
              if (item.category == "ガチャ" ) return true;
            });
            for( var i = 0; i < all_gacha.length; i++ ){
              $(".gacha-contents").append("<li><h4>"+ all_gacha[i].question +"</h4><p>"+ all_gacha[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#gacha\">"+ all_gacha[0].category +"</a><div class=\"arrow\"></li>");

              //イベント
            var all_event = json.faqs.filter(function(item, index){
              if (item.category == "イベント" ) return true;
            });
            for( var i = 0; i < all_event.length; i++ ){
              $(".event-contents").append("<li><h4>"+ all_event[i].question +"</h4><p>"+ all_event[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#event\">"+ all_event[0].category +"</a><div class=\"arrow\"></li>");

              //その他仕様
            var all_other = json.faqs.filter(function(item, index){
              if (item.category == "その他仕様" ) return true;
            });
            for( var i = 0; i < all_other.length; i++ ){
              $(".other-contents").append("<li><h4>"+ all_other[i].question +"</h4><p>"+ all_other[i].answer +"</p></li>");
            }
            $(".sub-navi").append("<li><a href=\"#other\">"+ all_other[0].category +"</a><div class=\"arrow\"></li>");


            //追加するときは以下に追加
        }
    })
})

$(function(){
  setTimeout(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
  },1000);
});

$(function(){
  var $dropdown = $('.js-dropdown');
  var DURATION = 200; //アニメーションの速さ

  function fadeOutMenu(){
    $dropdown.removeClass('is-active')
      .next('.js-dropdown-menu')
      .stop()
      .slideUp(DURATION);
  }

  //表示を切り替える
  function toggleMenu(){
    var $self = $(this); //thisにはクリックした時の要素が入る
    //要素が.is-activeを持っていない場合
    if(!$self.hasClass('is-active')){
      fadeOutMenu();
    }
    //クリックした要素を表示させる
    $self.toggleClass('is-active')
      .next('.js-dropdown-menu')
      .stop().slideToggle(DURATION);
  }

  $dropdown.on('click', toggleMenu);
 
//別の場所をクリックすると閉じる処理
  $(document).on('click touchend', function(event) {
  if (!$(event.target).closest('body').length) {
    // ここに処理;
    fadeOutMenu();//関数呼びだし
  }
});
  });