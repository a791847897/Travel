
//重用
$(function () {
    //
    // var width1 = ($(window).width());
    //
    $('.small-carousel').css({width: "450px", height: "350px"});
    $(' .small-carousel_content').css({width: "450px", height: "350px"});
    $(' .small-carousel_content li').css({width: "450px", height: "350px"});
    $(' .small-carousel_content img').css({width: "450px", height: "350px"});


    var datas = [];
    datas.push('images/pic07.jpg');
    datas.push('images/pic07.jpg');
    datas.push('images/pic07.jpg');

//  初始化动画位
    function resetPostion() {
        $('.small-carousel_content li').eq(0).css({left: "450px"});
        $('.small-carousel_content li').eq(1).css({left: '0px'});
        $('.small-carousel_content li').eq(2).css({left: "450px"});
    }


//    修改3个li的图片

    function resetLiImg(imgs) {
        $('.small-carousel_content li').eq(0).children('img').attr('src', imgs[0]);
        $('.small-carousel_content li').eq(1).children('img').attr('src', imgs[1]);
        $('.small-carousel_content li').eq(2).children('img').attr('src', imgs[2]);
    }

    //初始下标位
    var currentIndex = 0;
    //一个临时数组
    var liDatas = [];
//        左边
    liDatas[0] = datas[datas.length - 1];
//        显示
    liDatas[1] = datas[currentIndex];
//        右边
    liDatas[2] = datas[currentIndex + 1];

    resetPostion();
    resetLiImg(liDatas);
//右边.主要区间为等于数组总长和等于数组总长,因为currentIndex递增
    $('.small-carousel_leftbtn').on('click', function () {

        $('.small-carousel_content li').stop(true, true);
        $('.small-carousel_content li').eq(1).animate({left: "-450px"}, 500, function () {

        });
        $('.small-carousel_content li').eq(2).animate({left: '0px'}, 500, function () {
            //动指针
            currentIndex++;
            //重新布局
            resetPostion();

//                等于数组长度的时候
            if (currentIndex == datas.length - 1) {

                liDatas[0] = datas[currentIndex - 1];
                liDatas[1] = datas[currentIndex];
                liDatas[2] = datas[0];
                resetLiImg(liDatas);

            }
//                        大于数组长度的时候
            else if (currentIndex > datas.length - 1) {
                currentIndex = 0;
                liDatas[0] = datas[datas.length - 1];
                liDatas[1] = datas[currentIndex];
                liDatas[2] = datas[currentIndex + 1];
                resetLiImg(liDatas);
            }
//                        在数据范围内
            else {
                liDatas[0] = datas[currentIndex - 1];
                liDatas[1] = datas[currentIndex];
                liDatas[2] = datas[currentIndex + 1];
                resetLiImg(liDatas);
            }
        });
    });

//左边.主要区间为等于0和小于0,因为currentIndex递减
    $('.small-carousel_rightbtn').on('click', function () {
        zzz();
    });

    var zzz = function () {
        $('.small-carousel_content li').stop(true, true);

        $('.small-carousel_content li').eq(1).animate({left: "450px"}, 500, function () {
        });
        $('.small-carousel_content li').eq(0).animate({left: '0px'}, 500, function () {

            currentIndex--;
            //重新布局
            resetPostion();
            if (currentIndex == 0) {
                liDatas[0] = datas[datas.length - 1];
                liDatas[1] = datas[currentIndex];
                liDatas[2] = datas[currentIndex + 1];
                resetLiImg(liDatas);
            }
            else if (currentIndex < 0) {

                currentIndex = datas.length - 1;
                liDatas[0] = datas[currentIndex - 1];
                liDatas[1] = datas[currentIndex];
                liDatas[2] = datas[0];
                resetLiImg(liDatas);
            }
            else {
                liDatas[0] = datas[currentIndex - 1];
                liDatas[1] = datas[currentIndex];
                liDatas[2] = datas[currentIndex + 1];
                resetLiImg(liDatas);
            }


        });
    }


    var rongqi=$('.small-carousel_content ');
    var timer=null;
    function autoplay() {
        timer=setInterval(function () {
            zzz();
        },2000);
    }

    autoplay();
    var key = 1;
    rongqi.hover(function () {
        if (key == 2) {
            autoplay();
            key = 1;
        } else {
            clearInterval(timer);
            key = 2;
        }
    });

});