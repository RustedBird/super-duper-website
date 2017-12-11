;(function ($) {
    $('.content .block').hide();
    $('.glavnaya').show();

    $('.button:nth-of-type(1)').click(function () {
        $('.content .block').hide();
        $('.glavnaya').toggle();
    });
    $('.button:nth-of-type(2)').click(function () {
        $('.content .block').hide();
        $('.katalog').toggle();
    });
    $('.button:nth-of-type(3)').click(function () {
        $('.content .block').hide();
        $('.service').toggle();
    });
    $('.button:nth-of-type(4)').click(function () {
        $('.content .block').hide();
        $('.contacts').toggle();
    });
    $('.button:nth-of-type(5)').click(function () {
        $('.content .block').hide();
        $('.questions').toggle();
    });
})(jQuery);