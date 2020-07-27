$(function(){

	var agent = navigator.userAgent;
	var list = $(".mod_nav ul");

	function menuslide(){
	//メニュー表示非表示
	$(".mod_nav p.navtitle").click(function(){
	if($(list).css("display")=="none"){
	$(list).slideDown("fast");
	}else{
	$(list).slideUp("fast");
	}
	});
	}

	if(agent.search(/iPhone/) != -1){
		menuslide();

	}else if(agent.search(/Android/) != -1){
		menuslide();

	}else{
//resize
	$(window).resize(function(){
	var w = $(window).width();
	var x = 768;
		if (w <= x) {
		$(list).css("display","none");
		} else {
		$(list).css("display","block");
		}
	});
		menuslide();
	}
});


$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});



$(function(){
	$('p.more').click(function() {
		$(this).next('div').slideToggle();
	}).next().hide();
    var flg = "close";
    $("p.more").click(function(){
        $(".div").slideToggle();
        if(flg == "close"){
            $(this).html("<span>▲</span>閉じる");
            flg = "open";
        }else{
            $(this).html("<span>▼</span>もっと見る");
            flg = "close";
        }
    });
});


$(function(){
	var search_visible_flg = $('p.search-more').next('div').is(':visible');
    if(search_visible_flg){
        $('p.search-more').html("<span>×</span>閉じる");
        search_visible_flg = false;
    }else{
        $('p.search-more').html("<span>▼</span>検索条件を変更する");
        search_visible_flg = true;
    }
	$('p.search-more').click(function() {
		$(this).next('div').slideToggle();
        if(search_visible_flg){
            $(this).html("<span>×</span>閉じる");
            search_visible_flg = false;
        }else{
            $(this).html("<span>▼</span>検索条件を変更する");
            search_visible_flg = true;
        }
    });
});