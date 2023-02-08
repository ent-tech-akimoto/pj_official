// 省略処理
$(".card-block--contents-acd").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("is-open");
  $(this).parent('.card-block--contents').toggleClass("omit");
});



// カード数処理
var show_num = 10;
var show_card = function () {
  $(".card-block--item.js-show").each(function (index, element) {
    // element == this
    if (index >= show_num) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });

  if ($(".card-block--item.js-show").length <= show_num) {
    $(".js-more img").hide()
  } else {
    $(".js-more img").show()
  }
}
show_card();

$(".js-more").on("click", function (e) {
  e.preventDefault();
  show_num += 10;
  show_card();
});

// ラベル処理
var current_year = "year-all";
var current_cat = "cat-all";
var check_label = function () {
  $(".card-block--item").each(function (index, element) {
    var target_year = $(this).data("year");
    var date = new Date(target_year);
    target_year = date.getFullYear();
    var target_cat = $(this).data("cat");
    var bloom_year = Boolean(target_year == current_year || current_year == "year-all");
    var bloom_cat = Boolean(target_cat == current_cat || current_cat == "cat-all");
    $(this).removeClass("js-show");
    if (bloom_year && bloom_cat) {
      $(this).show();
      $(this).addClass("js-show");
    } else {
      $(this).hide();
    }
  });
  show_num = 10;
  show_card();
}
check_label();

$(".js-year").on("click", function (e) {
  e.preventDefault();
  $(".js-year").removeClass("is-active");
  $(this).addClass("is-active");
  current_year = $(this).data("year");

  check_label()
});

$(".js-cat").on("click", function (e) {
  e.preventDefault();
  $(".js-cat").removeClass("is-active");
  $(this).addClass("is-active");
  current_cat = $(this).data("cat");
  check_label()
});