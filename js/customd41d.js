$(document).ready(function(){

    //Check to see if the window is top if not then display button

    function setNavbar()
    {
        var nav = $('#nav');
        if (/*$('header').height()*/$('#nav.navbar-default').height() <$(this).scrollTop())
        {
            if(!nav.hasClass('fixed'))
            {
                nav.addClass('fixed');
                nav.removeClass('absolute');
                nav.css('display','none');
                nav.fadeIn();
            }
        }else
        {
            if(!nav.hasClass('absolute'))
            {
                nav.addClass('absolute');
                nav.fadeOut(function(e){
                    nav.removeClass('fixed');
                    nav.css('display','block');
                })
                //nav.removeClass('fixed');
            }
        }
        if ($(this).scrollTop() > 70) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    };
    
    $(window).scroll(function(){
        setNavbar();
    });
    
    setNavbar();
    
    //Click event to scroll to top
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });

    if(!isMobile.any()) {
        $("#background").removeClass('background-stat');
        $("#background").addClass('background-anim');
    }

});
// FlexSlider plugin
$('.flexslider').flexslider({
    animation : 'fade',
    fadeFirstSlide: false,
    controlNav : false,
    nextText : '',
    prevText : '',
});

// Complete page is fully loaded, including all frames, objects and images
$(window).load(function() {
    // Remove preloader
    // https://ihatetomatoes.net/create-custom-preloading-screen/
    $('body').addClass('loaded');


});



$('.flex-caption').addClass('animated bounceInRight');

$('.flex-next').on('click', function() {
    $('.flex-caption').removeClass('animated bounceInRight');
    $('.flex-caption').removeClass('animated bounceInLeft');
    $('.flex-caption').fadeIn(0).addClass('animated bounceInRight');
});
$('.flex-prev').on('click', function() {
    $('.flex-caption').removeClass('animated bounceInRight');
    $('.flex-caption').removeClass('animated bounceInLeft');
    $('.flex-caption').fadeIn(0).addClass('animated bounceInLeft');
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};