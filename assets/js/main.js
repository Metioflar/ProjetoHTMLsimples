$(document).ready(function(){
    $(window).scroll(function(){
        var scrolltop = $(this).scrollTop();
        var nav = $("#menu").position();
        var submenu = $('#submenu').position();
        if(scrolltop > nav.top && scrolltop > submenu.top){
                    $('#nav').css({"position":"fixed","top":"0","width":"100%","border-bottom":"1px solid #061013"});
                    $('.itens-submenu').css({"position":"fixed","top":"0"})
                }
        else{
                     $('#nav').css({"position":"static","top":"auto"})

        }
    });
    $('#submenu').click(function(){
        $('.itens-submenu').css({"transform":"translateX(0)"});
    });
    $('#fechar').click(function(){
        $('.itens-submenu').css({"transform":"translateX(-100%)"});
    })
});