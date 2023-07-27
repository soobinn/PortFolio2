jQuery(document).ready(function () {


    var screenWidth = $(window).width();
    var screenScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();





    $('.logo li:nth-child(1)').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 800)
    })

    $('.logo li:nth-child(2)').on('click', function () {
        $('html,body').animate({
            scrollTop:
                $('.main_wrapper').height() + $('.About1').height()
        }, 800)
    }
    )

    $('.logo li:nth-child(3)').on('click', function () {
        $('html,body').animate({
            scrollTop:
                $('.main_wrapper').height() + $('.About1').height() + $('.About2').height()
        }, 800)
    })

    $('.logo li:nth-child(4)').on('click', function () {
        $('html,body').animate({
            scrollTop:


                $('.main_wrapper').height() + $('.About1').height() + $('.About2').height() + $('.Work').height()
        }, 800)
    })

})