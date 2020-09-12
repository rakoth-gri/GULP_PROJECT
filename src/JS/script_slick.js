$(document).ready(function(){
    $('.slick__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 700,          
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/next.png"></button>'
    });

    $('ul.tabs__catalogue').on('click', 'li:not(.tab_active)', function() {
        $(this)
          .addClass('tab_active').siblings().removeClass('tab_active')
          .closest('div.container').find('div.tabs__element').removeClass('tabs__element_active').eq($(this).index()).addClass('tabs__element_active');
    });

    $(".item__link").each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.item__card').eq(i).toggleClass('item__card_active');
            $('.item__modallist').eq(i).toggleClass('item__modallist_active');
        });
    });

    $(".back").each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.item__card').eq(i).toggleClass('item__card_active');
            $('.item__modallist').eq(i).toggleClass('item__modallist_active');
        });
    });

});
