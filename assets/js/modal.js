// flag
var _is_mobile = navigator.userAgent.indexOf('iPhone') > 0 ||
    navigator.userAgent.indexOf('iPad') > 0 ||
    navigator.userAgent.indexOf('iPod') > 0 ||
    navigator.userAgent.indexOf('Android') > 0;
var _clicktype_mc = _is_mobile ? "touchstart" : "click";
var _clicktype = _is_mobile ? "click" : "click";
if (_is_mobile) { $("body").addClass("is-mobile"); }

// ----------------------------------------------------------------------------------------------------
// Modal
// ----------------------------------------------------------------------------------------------------
$(function () {
  var modals = [],
    $modal_current = undefined;

  function resetModalNav(modal) {
    // init
    modal.$prev.removeClass("modal-nav-disabled");
    modal.$next.removeClass("modal-nav-disabled");

    var index = modal.$items.children().index($modal_current);

    if (index == 0) {
      modal.$prev.addClass("modal-nav-disabled");
    }
    if (index == modal.$items.children().length - 1) {
      modal.$next.addClass("modal-nav-disabled");
    }
  }

  // init modal
  $.each($(".modal"), function() {
    var $modal = $(this),
      $close = $('<div class="modal-close"><span></span><span></span></div>'),
      $items = $modal.children(),
      $prev = $('<li class="modal-nav-prev"></li>'),
      $next = $('<li class="modal-nav-next"></li>');

    $modal.empty();
    $items.children().hide();

    var modal = {
      id: $modal.attr("id"),
      $modal: $modal,
      $items: $items,
      $prev: $prev,
      $next: $next
    };

    $modal
      .append($('<div id="popup" class="modal-container"></div>')
        .append($('<div class="modal-header"></div>')
          .append($close))
        .append($('<div class="modal-content"></div>')
          .append($items))
        .append($('<ul class="modal-nav"></ul>')
          .append($prev)
          .append($next)));


    // action
    $close.on(_clicktype_mc, function() {
      $modal.fadeOut(300, function() {
        // $('#testid').trigger('click');
        // $('.test').trigger('click');
        // $('testid').trigger('click');
        // $('test').trigger('click');
        // $(function() {
        //     var p = $(".test").offset().top;
        //     $('.modal-items').animate({ scrollTop: p }, 'slow');
        //     return false;
        // });
        // $('.to-top')[0].click();
        $('#to-top')[0].click();
        $("html").removeClass("showmodal");
        $modal_current = undefined;
        return false;
      });
      return false;
    });

    // $(".modal-container:not").on(_clicktype, function() {
    //   $modal.fadeOut(function() {
    //     $("html").removeClass("showmodal");
    //     $modal_current = undefined;
    //   });
    // });

    $prev.on(_clicktype_mc, function() {
      if (!$prev.hasClass("modal-nav-disabled")) {
        var $p = $modal_current.prev("li");

        $modal_current.fadeOut(300, function() {
          // $('.to-top')[0].click();
          $('#to-top')[0].click();
          $p.fadeIn(300, function() {
            $modal_current = $p;
            resetModalNav(modal);
          });
        });
      }
    });

    $next.on(_clicktype_mc, function() {
      if (!$next.hasClass("modal-nav-disabled")) {
        var $n = $modal_current.next("li");

        $modal_current.fadeOut(300, function() {
          // $(".to-top").trigger('click');
          // $('.to-top')[0].click();
          $('#to-top')[0].click();
          $n.fadeIn(300, function() {
            $modal_current = $n;
            resetModalNav(modal);
          });
        });
      }
    });

    modals.push(modal);
  });

  // show modal
  $(".modal-anchor").on(_clicktype, function() {
    var name = $(this).data("modalitem"),
      modal = undefined;

    // find item
    $.each(modals, function(i, m) {
      var $i = m.$items.find("#" + name);

      if ($i.length > 0) {
        modal =m;
        $modal_current = $i;

        return false;
      }
    });

    if (modal != undefined && $modal_current != undefined) {
      // init
      modal.$items.children().hide();
      $modal_current.show();

      $("html").addClass("showmodal");

      resetModalNav(modal);

      // show
      modal.$modal.fadeIn();
      // $('.to-top')[0].click();
      $('#to-top')[0].click();
      return false;
    }
  });
});
