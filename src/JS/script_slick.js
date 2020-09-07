$(document).ready(function(){
    $('.slick__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 700,          
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/next.png"></button>'
    });
});
