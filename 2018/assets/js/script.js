/*global $*/
"use strict";
$(function () {
    $(document).on('contextmenu', function () {
        return false;
    });

    setTimeout(function () {
        var scroll = $(window).scrollTop();
        if (scroll <= 80) {
            $('html, body').animate({
                scrollTop: '200%'
            }, 500);
            $('.arrow').addClass('arrowanime')
        }
    }, 5000);
    $(window).on('load scroll resize', function () {
        var navscrani = $(window).scrollTop()
        if (navscrani >= 80) {
            $('.nav').addClass('navanime');
        }
    });
    $(window).on('load scroll resize', function () {
        var navscr = $(window).scrollTop()
        if (navscr >= 800) {
            $('.nav').removeClass('navanime');
            $('.nav').addClass('transpnav');
        }
    });


    $('.scrbtn').click(function () {
        var id = $(this).attr('href');
        var pos = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': pos
        }, 500);
    })
    var setArea2 = $('.scrkikaku'),
        showHeight2 = 200;


    $(window).on('load scroll resize', function () {
        setArea2.each(function () {
            var setThis2 = $(this),
                areaTop2 = setThis2.offset().top;

            if ($(window).scrollTop() >= (areaTop2 + showHeight2) - $(window).height()) {
                $('.lb1').addClass('tka');
                setTimeout(function () {
                    $('.lb5').addClass('bka');
                }, 150);
                setTimeout(function () {
                    $('.lb2').addClass('tka');
                }, 300);
                setTimeout(function () {
                    $('.lb6').addClass('bka');
                }, 450);
                setTimeout(function () {
                    $('.lb3').addClass('tka');
                }, 600);
                setTimeout(function () {
                    $('.lb7').addClass('bka');
                }, 750);
                setTimeout(function () {
                    $('.lb4').addClass('tka');
                }, 900);

            }
            if ($(window).scrollTop() >= (areaTop2 + showHeight2) - $(window).height()) {
                setTimeout(function () {
                    $('.blogobox').removeClass('bka');
                    $('.blogobox').addClass('logoboxsize');

                    $('.kikakutxt1').addClass('kt');

                }, 1950);
                setTimeout(function () {
                    $('.kikakutxt2').addClass('kt')
                }, 2100);
                setTimeout(function () {
                    $('.btnkikaku').addClass('btnanime')
                }, 3800);
            }
        });
    });



    var setArea = $('.scrEvent'),
        showHeight = 200;

    setArea.css({
        display: 'block',
        opacity: '0'
    });

    $(window).on('load scroll resize', function () {
        setArea.each(function () {
            var setThis = $(this),
                areaTop = setThis.offset().top;

            if ($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()) {
                setThis.addClass('txtanime');
                if (setThis = $('.theme2')) {
                    $('.hosiimg').addClass('hosianime');
                    $('.hosi').addClass('seisaianime');
                }
                if (setThis = $('.nss')) {
                    $('.gimgbox').addClass('gimganime');
                }
                
            }
        });
    });


    /*$('.btnkikaku').hover(function () {
        $(this).addClass('btnanime');
    }, function () {
        $(this).removeClass('btnanime');
    });*/

    $('.map').hover(function () {
        $(this).addClass('mapanime');
    }, function () {
        $(this).removeClass('mapanime');
    });
    $('.ipk').hover(function () {
        $(this).addClass('mapanime');
    }, function () {
        $(this).removeClass('mapanime');
    });
  $('.ipk2').hover(function () {
        $(this).addClass('mapanime');
    }, function () {
        $(this).removeClass('mapanime');
    });

    var mdwBtn = $('.modalbtn'),
        overlayOpacity = 0.7,
        fadeTime = 500;

    mdwBtn.on('click', function (e) {
        e.preventDefault();
        var setMdw = $(this),
            setHref = setMdw.attr('href'),
            setSource = $(setHref).html(),
            wdHeight = $(window).height();

        $('body').addClass('scrolllock');
        $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">×</div><div id="contWrap">' + setSource + '</div></div>');

        $('#mdWindow').addClass('mdCloseanime');
        $('#mdOverlay,#mdWindow').css({
            display: 'block',
            opacity: '0'
        });
        $('#mdOverlay').css({
            height: wdHeight
        }).stop().animate({
            opacity: overlayOpacity
        }, fadeTime);
        $('#mdWindow').stop().animate({
            opacity: '1'
        }, fadeTime);

        $(window).on('resize', function () {
            var adjHeight = $(window).height();
            $('#mdOverlay').css({
                height: adjHeight
            });
        });

        $('#mdOverlay,.mdClose').on('click', function () {
            $('body').removeClass('scrolllock');
            $('#mdWindow,#mdOverlay').stop().animate({
                opacity: '0'
            }, fadeTime, function () {
                $('#mdOverlay,#mdWindow').remove();
            });
        });
    });
});
