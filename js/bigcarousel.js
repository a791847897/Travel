
//重用
$(function () {
    
    var width1 = ($(window).width());
    $('.carousel').css({width: width1 + "px"});
    $('.content').css({width: width1 + "px"});
    $(' .content li').css({width: width1 + "px"});
    $(' .content img').css({width: width1 + "px"});

   



    var datas = [];
    datas.push('images/banner.jpg');
    datas.push('images/bg2.jpg');
    datas.push('images/srdz.jpg');

//  初始化动画位
    function resetPostion() {
        $('.carousel .content li').eq(0).css({left: width1 + "px"});
        $('.carousel .content li').eq(1).css({left: '0px'});
        $('.carousel .content li').eq(2).css({left: width1 + "px"});
    }
//    修改3个li的图片
    function resetLiImg(imgs) {
        $('.carousel .content li').eq(0).children('img').attr('src', imgs[0]);
        $('.carousel .content li').eq(1).children('img').attr('src', imgs[1]);
        $('.carousel .content li').eq(2).children('img').attr('src', imgs[2]);
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
    $('.leftbtn').on('click', function () {

        $('.carousel .content li').stop(true, true);
        $('.carousel .content li').eq(1).animate({left: -(width1 + "px")}, 500, function () {

        });
        $('.carousel .content li').eq(2).animate({left: '0px'}, 500, function () {
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
    $('.rightbtn').on('click', function () {
        zzz();
    });

    var zzz = function () {
        $('.carousel .content li').stop(true, true);

        $('.carousel .content li').eq(1).animate({left: width1 + "px"}, 500, function () {
        });
        $('.carousel .content li').eq(0).animate({left: '0px'}, 500, function () {

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
    
    //设置定时器
    var rongqi=$('.carousel .content');
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