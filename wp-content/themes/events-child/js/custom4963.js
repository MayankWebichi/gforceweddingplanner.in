function yo(x) { console.log(x); }

//Check to see if the window is top if not then display button

 /* Go up */
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 300) {
        jQuery(".go-up").css("bottom", "15px");
    } else {
        jQuery(".go-up").css("bottom", "-60px");
    }
});
jQuery(".go-up").click(function() {
    jQuery("html,body").animate({
        scrollTop: 0
    }, 500);
    return false;
});

//Header Responsive Toggle
$("#toggle").on("click", function(e){ 
    e.preventDefault();
    $(this).toggleClass("on");

    $(".site__nav").slideToggle();
});

//Responsive Navigation Dropdown
$(".menu-item-has-children span").on("click", function(e){
    $(this).parent("li").toggleClass("subNavOn");
    $(this).next("ul.sub-menu").slideToggle();
});

//Clear on Resize
function resetHeader() {
    if($(window).outerWidth() > 767) {
        $("#toggle").removeClass("on");
        $(".site__nav").attr("style","");
        
        //Clear Sub Navigation
        $(".menu-item-has-children").removeClass("subNavOn");
        $(".menu-item-has-children .sub-menu").attr("style", "");
    }
}

//Hero Slider
$(".hero-roller").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1000,
    infinite: true, 
    CSSEase: 'ease-in-out',
});

//Gallery Slider
$(".gallery__slider").slick({
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    infinite: true, 
    CSSEase: 'ease-in-out',
    asNavFor: '.gallery__slider-nav'
});

$(".gallery__slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    infinite: true, 
    CSSEase: 'ease-in-out',
    focusOnSelect: true,
    asNavFor: '.gallery__slider',
    touchThreshold: 30,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,                
            }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
});

//Testimonial slider
$(".testimonial__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '30px',
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1200,
    touchThreshold: 20,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                centerPadding: '30px',
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 8000,
                speed: 1200,
                touchThreshold: 20,                
            }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '0px',
          }
        }
    ]
})


// Animation
function onScrollEvents(){
    if($('.scrollReveal').length){
        $('.scrollReveal').each( function(index){
            var bottomOfElem = $(this).offset().top;
            var bottomOfWin = $(window).scrollTop() + $(window).height();
            var that = this;
            var delayReveal = (that.hasAttribute("data-delay")) ? $(that).attr("data-delay") : 0;
            if (index == 0) { index = 1; }
                if(bottomOfWin > bottomOfElem) {
                var t = setTimeout(function() {
                    $(that).addClass("revealIt");
                }, delayReveal * index);
            }
        });
    }
} // onScrollEvents ENDS

onScrollEvents();

// Footer Copyrights - Current Year
$(".currentYear").text(new Date().getFullYear());


/*Window Events*/

//onload and scroll Events
$(window).on('load scroll', function() {
    onScrollEvents();
});

//Resize Events
$(window).on('resize', function(){
    resetHeader();
});


(function($) {
    "use strict";
    
    /* Preloader */
    $(window).on('load', function(){
        $('.span').fadeOut();
        $('.page-loader').delay(10).fadeOut('slow');
    });
})(jQuery);    
