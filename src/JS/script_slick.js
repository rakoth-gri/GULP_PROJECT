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

    $('[data-calling=CALLBACK]').on('click', function() {
        $('.modal_window,#CALLBACK').fadeIn('slow'); 
    });

    $('.exit').on('click', function() {
        $('.modal_window, #CALLBACK, #ORDER, #THANKS').fadeOut('slow'); 
    });

    // $('.button_tabs').on('click', function() {
    //     $('.modal_window, #ORDER').fadeIn('slow'); 
    // });

    $('.button_tabs').each(function(i){
        $(this).on('click', function() {
            $('#ORDER .modal__subtitle').text($('.item__subtitle').eq(i).text());
            $('.modal_window, #ORDER').fadeIn('slow'); 
        });
    });

    
    $("#base_form").validate({

        rules: {
            firstname: {
            required: true,
            minlength: 6
            },

            email: {
              required: true,
              email: true
            },

            Tel: {
                required: true,
                minlength: 11
            }        
        },

        messages: {
            
            firstname: {
                minlength: jQuery.validator.format("Бля, не менее {0} букф вводи, нахуй..")
            },

            email: {
                required: "А почта, че, по-твоему не нужна шо ли...",
                email: "Англискими буквами ебашь, не нашими..."
            },

            Tel: {
                minlength: jQuery.validator.format("Тебе че, западло {0} цифер херануть... Не ССы, вводи нах..")
            }    
        }
    });
    
    // Оптимизируем код за счет введения функции!!!

    function valideForms(form) {
        
        $(form).validate({
            rules: {
                firstname: {
                required: true,
                minlength: 2
                },
    
                email: {
                  required: true,
                  email: true
                },
    
                Tel: {
                    required: true,
                    minlength: 11
                }        
            },
    
            messages: {
                
                firstname: {
                    minlength: jQuery.validator.format("Введите не менее {0} буквенных символов!"),
                    required: "Требуется заполнить данное поле!"
                },
    
                email: {
                    required: "Не забудьте указать адрес электронной почты!",
                    email: "не пропустите знак @"
                },
    
                Tel: {
                    minlength: jQuery.validator.format("Телефон должен начинаться с +7, далее следуют {0} цифр Вашего номера!"),
                    required: "Требуется заполнить данное поле!"
                }    
            }
        });
    };

    valideForms("#ORDER form");
    valideForms("#CALLBACK form");

    jQuery(function($){
        $('input[name="Tel"]').mask("+7 (999) 999-9999",{placeholder:" "});
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax ({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#CALLBACK, #ORDER').fadeOut();
            $('#THANKS, .modal_window').fadeIn('slow');
            $("form").trigger('reset');
        });
        return false;
    });

    // делаем умный скролл

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.icon_up').fadeIn();
        } else {
            $('.icon_up').fadeOut();
        }    
    });

    $("a[href^='#up']").click(function(){
        const_href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});