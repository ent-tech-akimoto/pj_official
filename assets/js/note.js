// 省略処理
$(".card-block--contents").each(function (index, element) {
  // element == this
  $(this).children().first().css("display", "block");
});

$(".card-block--contents-acd").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("is-open");
  $(this).parent('.card-block--contents').toggleClass("omit");
  $(this).parent('.card-block--contents').children().first().css("display", "block");
});

// ラベル処理
var current_status = "status-all";
var current_cat = "cat-all";
var check_label = function () {
  $(".card-block--item").each(function (index, element) {
    var target_status = $(this).data("status");
    var target_cat = $(this).data("cat");
    var bloom_status = Boolean(target_status == current_status || current_status == "status-all");
    var bloom_cat = Boolean(target_cat == current_cat || current_cat == "cat-all");
    $(this).removeClass("js-show");
    if (bloom_status && bloom_cat) {
      $(this).show();
      $(this).addClass("js-show");
    } else {
      $(this).hide();
    }
  });
}

$(".js-status").on("click", function (e) {
  e.preventDefault();
  $(".js-status").removeClass("is-active");
  $(this).addClass("is-active");
  current_status = $(this).data("status");
  check_label()
});

$(".js-cat").on("click", function (e) {
  e.preventDefault();
  $(".js-cat").removeClass("is-active");
  $(this).addClass("is-active");
  current_cat = $(this).data("cat");
  check_label()
});

// カード数処理
var show_num = 10;
var show_card = function () {
  $(".card-block--item").each(function (index, element) {
    // element == this
    if (index >= show_num) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });

  if ($(".card-block--item").length <= show_num) {
    $(".js-more").hide()
  } else {
    $(".js-more").show()
  }
}
show_card();

$(".js-more").on("click", function (e) {
  e.preventDefault();
  show_num += 10;
  show_card();
});