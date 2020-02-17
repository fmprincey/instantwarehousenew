// Animations init
new WOW().init();

jQuery(function ($) {
    $(window).scroll(function () {
        if ($('.navbar').hasClass('navbar-brand')) {
            $('.navbar .navbar-brand img').attr('src', 'https://www.instantwarehouse.ng/in/images/logo-white.png');
        } else {
            $('.navbar .navbar-brand img').attr('src', 'https://www.instantwarehouse.ng/in/images/logo-white.png');
        }
    });
});