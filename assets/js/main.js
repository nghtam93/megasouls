$(document).ready(function(){




    var header_sticky=$("header.-fix")
    if($('body').hasClass( "home" )){
        $(window).scroll(function(){
            $(this).scrollTop()>5?header_sticky.addClass("is-active"):header_sticky.removeClass("is-active")
        })
    }else{
        header_sticky.addClass("is-active")
    }

    //-------------------------------------------------
    // Menu
    //-------------------------------------------------
    $('.nav__mobile--close').click(function(e){
        $('.nav__mobile').removeClass('active')
        $('body').removeClass('modal-open')
    });
    $('.menu-mb__btn').click(function(e){
        e.preventDefault()
        if($('body').hasClass('modal-open')){
            $('.menu-mb__btn').removeClass('active')
            $('.nav__mobile').removeClass('active')
            $('body').removeClass('modal-open')
        }else{
            $('.menu-mb__btn').addClass('active')
            $('body').addClass('modal-open')
            $('.nav__mobile').addClass('active')
        }
    });

    //back to top
    var back_to_top=$(".back-to-top"),offset=220,duration=500;
    $(document).on("click",".back-to-top",function(o){
        return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1
    });

    //check home
    if($('body').hasClass( "home" )){

        $('.js-intro-slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.js-intro-slider-nav'
        });
        $('.js-intro-slider-nav').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.js-intro-slider-for',
          fade: true,
          arrows: false,
          dots: true,
        });

        $('.home-mentor__slider').slick({
            slidesToShow: 1,
            arrows: false,
            dots: true,
            variableWidth: true,
            responsive: [
                {
                  breakpoint: 490,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                  }
                }
            ]
        });

        $('.home-fund-slider').slick({
            slidesToShow: 7,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
            responsive: [
                {
                  breakpoint: 1299,
                  settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
            ]
        });

        $('.home-orbit-slider').slick({
            slidesToShow: 7,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
            responsive: [
                {
                  breakpoint: 1299,
                  settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
            ]
        });

        $('.js-partner-loadmore').on("click",function(e) {
            $(this).remove()
            if($('.js-partner-content').hasClass('active')){
                $('.js-partner-content').removeClass('active')
            }else{
                $('.js-partner-content').addClass('active')
            }
        })

    }

});


