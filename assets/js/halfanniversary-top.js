
$(window).on('load', function () { // 読み込み完了したら実行する
    $('#load').delay(500).fadeOut(800);// ローディングを隠す

    $('#main_image').delay(2000).queue(function() { // kv表示
        $(this).addClass('show').dequeue();
    });
    $('#main_logo').delay(2600).queue(function() { // logo表示
        $(this).addClass('show').dequeue();
    });

    $('.fadein-anime').delay(3000).queue(function() { // btn 生放送情報
        $(this).addClass('show').dequeue();
    });
});