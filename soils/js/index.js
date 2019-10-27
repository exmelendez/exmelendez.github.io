$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 300) {
            $('#nav').addClass('change');
        }
        else {
            $('#nav').removeClass('change');
        }
    });
});