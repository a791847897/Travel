
$(function () {
    var key = 2;
    $('.SaoCode').click(function () {
        if (key == 1) {
            $('.side_left').css({display: 'none'});
            key = 2;
        } else {
            $('.side_left').css({display: 'block'});
            key = 1;
        }
    })
    
    $('.side_left').click(function () {
        $('.wechat').css({display:'block'});
    })
    $('.fa-close').click(function () {
        $('.wechat').css({display:'none'});
    })
    
})