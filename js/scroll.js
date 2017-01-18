$(function () {
    $(window).on('scroll', function () {
        var sc = $(this).scrollTop();
        console.log($(this).scrollTop());

        if (sc > 400 && sc < 600) {
            $('.main3_title').addClass('fadeInRight');
            $('.main3_logo').addClass('fadeInRight');
            $('.main3_content').addClass('fadeInLeft');
        }
        if (sc > 600) {
            $('.main4_title').addClass('fadeInRight');
            $('.content_item').eq(0).addClass('fadeInRight');
            $('.content_item').eq(1).addClass('fadeInBottom');
            $('.content_item').eq(2).addClass('fadeInLeft');
        }

        if (sc > 900 && sc < 1300) {
            $('.content_item').eq(3).addClass('fadeInRight');
            $('.content_item').eq(4).addClass('fadeInTop');
            $('.content_item').eq(5).addClass('fadeInLeft');

        }
        if (sc>1200){
            $('.main5_title').addClass('fadeInRight');

        }
        if (sc>1400){
            $('.small-carousel').addClass('fadeInRight');
            $('.main5_content').addClass('fadeInLeft');
        }
        if(sc>2000){
            $('.main6_set a').addClass('fadeInRight');

        }
        if (sc>2200){
            $('.main6_set h2').addClass('fadeInLeft');
            $('.main6_set h3').addClass('fadeInRight');
        }
        if(sc>2700){
            $('.footer').addClass('fadeInBottom');
        }


       
    });


})