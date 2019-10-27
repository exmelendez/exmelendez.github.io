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

const instaIcon = document.querySelectorAll('header>div>i')[0];
const emailIcon = document.querySelectorAll('header>div>i')[1];

instaIcon.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com';
});

emailIcon.addEventListener('click', () => {
    window.location.href = 'mailto:test@test.com';
});