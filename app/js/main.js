$(document).ready(function() {
    $('.dropdown-lang__btn').click(function(){
        $('.dropdown-lang__content').toggleClass('hidden');
    });
    $( ".dropdown-lang__content" ).mouseleave(function() {                
        $(this).addClass('hidden');               
    })
    $('.menu-btn').click(function(){
        var toggleBlocks =  $('.header-top-menu__nav, .header-main-menu ');
        if (toggleBlocks.css('display') == 'none') {
            toggleBlocks.css('display', 'block');
        } else {
            toggleBlocks.css('display', 'none');
        }
    });
    
    $('.news-slider').slick({
        dots: true,                
        appendDots:$('.news-slider-pagination__dots'),
        /*customPaging: function(slick,index) {
                return '<a>' + index + '</a>';
            },*/
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        //centerMode: true,
        variableWidth: true, 
        prevArrow: $('.news-slider-pagination__prev'),
        nextArrow: $('.news-slider-pagination__next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.projects-slider').slick({
        dots: true,
        appendDots:$('.projects-slider-pagination__dots'),
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        //centerMode: true,
        //variableWidth: true, 
        prevArrow: $('.projects-slider-pagination__prev'),
        nextArrow: $('.projects-slider-pagination__next'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true                            
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1                           
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1                            
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

var myVideo = document.getElementById("video1");
function playPause() { 
    if (myVideo.paused) {
        $('#video1').attr('controls', 'true');
        $('.video-player__nav').addClass('hidden');
        myVideo.play(); 
    }                 
    else {
        myVideo.pause(); 
    }       
}