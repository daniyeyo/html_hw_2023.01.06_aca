$(function () {

    $('button').on('click', function () {
        $('h1').toggleClass('on')
    });

    $('.TopBanner').slick({
        dots: true,
        autoplay: true,
        trueauopSpeed: 6000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
    });

    $('button').on('click', function () {
        $('h1').toggleClass('on')
    });

    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        trueauopSpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainNotice .list ul').slick({
        autoplay: true,
        trueauopSpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        prevArrow: $('.xi-angle-up'),
        nextArrow: $('.xi-angle-down')
    });

    $('.mainTip .inner .con').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });




})