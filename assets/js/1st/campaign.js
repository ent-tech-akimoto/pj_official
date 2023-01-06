$(function () {

  var first = true;
  var ww;
  var hh;
  var per;
  var size_OS = 0;


  $(window).resize(function () {

    ww = window.innerWidth;
    hh = window.innerHeight;
    if (ww <= 768) {
      if (size_OS == 0) {}
      per = ww / 768;
      $("#contents .box_wrap .box").autoHeight({
        reset: 'reset'
      });

      size_OS = 1;
    } else {
      if (size_OS == 1) {}
      per = ww / 3840;
      $("#contents .box_wrap .box").autoHeight({
        column: 2,
        clear: 1,
        reset: 'reset'
      });

      size_OS = 0;
    }

  }).resize();

  $(window).scroll(function () {}).scroll();

  setTimeout(function () {
    $(window).resize();
    $(window).scroll();
  }, 300);


  $("#contents .box_wrap .box").autoHeight({
    column: 2,
    clear: 1
  });

  var scrollpos = 0;
  //=======================
  //  portraitPop表示
  //=======================
  var isshowSeat1 = false;
  var closeAct1 = false;
  var $seat_lyr1 = $("#pop");
  var $seat_lyr1_cont = $("#pop .popBox");

  $('body').on('click', 'a.modal_pop', function (event) {
    event.preventDefault();
    if (isshowSeat1 == false) {
      var _pass = $(this).data("img");
      showSeat1(_pass);
    }
  });
  $('#pop .mfp-close a').click(function (event) {
    event.preventDefault();
    hideSeat1();
  });
  $('#pop .bg,#pop .bg2').click(function (event) {
    event.preventDefault();
    hideSeat1();
  });

  function showSeat1(_pass) {
    if (isshowSeat1 == false) {
      isshowSeat1 = true;

      $seat_lyr1_cont.find(".img img").attr("src", _pass);
      $seat_lyr1
        .animate({
          opacity: 0
        }, 0)
        .css("display", "block")
        .animate({
          opacity: 1
        }, 400, "linear");

      $seat_lyr1_cont
        .animate({
          "top": "52%",
          opacity: 0
        }, 0)
        .css("display", "block")
        .animate({
          scrollTop: 0
        }, 0)
        .delay(400)
        .animate({
          "top": "50%",
          opacity: 1
        }, 400, "easeOutCubic");


      scrollpos = $('html').scrollTop();
      $('body').addClass('fixed');
      $('#wrapper').css({
        'top': -scrollpos
      });

    }
    return false;
  }

  //==================================================
  //portraitPop非表示
  //==================================================
  window.hideSeat1 = function () {
    if (isshowSeat1 == true) {
      isshowSeat1 = false;

      $seat_lyr1.animate({
        opacity: 0
      }, 600, null, function () {
        onComphideSeat1();
      });

      $('body').removeClass('fixed');
      $('#wrapper').css({
        'top': 0
      });
      window.scrollTo(0, scrollpos);
    }

    return false;
  }
  //==================================================
  //portraitPop非表示完了時
  //==================================================
  function onComphideSeat1() {

    $seat_lyr1_cont.css("display", "none");
    $seat_lyr1.css("display", "none");
  }




  //==================================================
  function imgSet() {
    $("#contents .box_wrap .box a").each(function () {
      var img_pass = $(this).data("img");
      var img_mc = $(this).find(".img_border");
      img_mc.css({
        "background-image": "url('" + img_pass + "')"
      });
    });
  }

  function opening() {
    $(".parallax_wrap")
      .css({
        "display": "block",
        "opacity": "0"
      })
      .animate({
        "opacity": "1"
      }, 1000, "linear");
  }
  $(".parallax_wrap").css({
    "display": "none",
    "opacity": "0"
  });

  setTimeout(function () {
    if (first) {
      init();
    }
  }, 1000);
  jQuery.event.add(window, "load", function () {
    if (first) {
      init();
    }
  });

  function init() {
    first = false;
    $(window).resize();
    $(window).scroll();
    imgSet();
    setTimeout(function () {
      $("#fade").fadeOut(1000, function () {
        opening();
      });
      $(window).resize();
      $(window).scroll();
    }, 300);
  }

});