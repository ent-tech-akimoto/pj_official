// 生成
var make_campaign_item = function (mediaUrl, i, date_text, author_text) {
  var box_wrap = document.getElementById("box_wrap");
  var box = document.createElement("div");
  box.className = "box";
  var modal_pop = document.createElement("a");
  modal_pop.className = "modal_pop";
  modal_pop.classList.add("btn-hover");
  modal_pop.classList.add("linkbtn");
  modal_pop.dataset.img = mediaUrl;
  modal_pop.href = "";
  var date = document.createElement("div");
  date.className = "date";
  date.innerHTML = "Day" + (i + 1) + ". " + date_text;
  var img_border_top = document.createElement("div");
  img_border_top.className = "img_border_top";
  var img_border = document.createElement("div");
  img_border.className = "img_border";
  img_border.classList.add("img");
  var copy = document.createElement("div");
  copy.className = "copy";
  copy.classList.add("clearfix");
  var copy_tit = document.createElement("div");
  copy_tit.className = "copytit";
  copy_tit.classList.add("svgBox");
  var copy_img = document.createElement("img");
  copy_img.srcset = "/assets/images/1st/svg/cp/illuby.svg";
  copy_img.alt = "Illustlated by.";
  var copy_author = document.createElement("div");
  copy_author.className = "author";
  copy_author.innerHTML = author_text;

  copy_tit.appendChild(copy_img);
  copy.appendChild(copy_tit);
  copy.appendChild(copy_author);
  modal_pop.appendChild(date);
  modal_pop.appendChild(img_border_top);
  modal_pop.appendChild(img_border);
  modal_pop.appendChild(copy);
  box.appendChild(modal_pop);
  box_wrap.appendChild(box);
};

function before_cut(text) {
  var str = text;
  var cut_str = "本日のイラストは";
  var index = str.indexOf(cut_str) + 7;
  str = str.slice(index + 1);
  text = str;
  return text;
}

function after_cut(text) {
  var str = text;
  var cut_str = "（";
  var index = str.indexOf(cut_str);
  var length = str.length;
  str = str.slice(0, index);
  text = str;
  return text;
}

var first_make = function () {
  $.ajax({
    type: "GET",
    url: "../../assets/data/tweet.json",
    dataType: "json",
  }).then(
    function (json) {
      var json_length = Object.keys(json).length;
      console.log(json_length);
      for (let i = 0; i < json_length; i++) {
        var author_text = "";
        author_text = before_cut(json[i].text);
        author_text = after_cut(author_text);
        var day_num = json_length - i - 1;
        make_campaign_item(json[i].mediaUrl, day_num, json[i].date, author_text);
      }
    },
    function () {}
  );
};
first_make();