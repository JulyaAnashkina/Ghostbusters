$(document).ready(function () {
    const mMenuBtn = $('.m-menu-button');
    const mMenu = $('.m-menu');
    const tab = $('.tab');
    mMenuBtn.on('click', function () {
        mMenu.toggleClass('active');
        $('.menu-line').toggleClass('active');
        $('.arrow').toggleClass('active');
        $('body').toggleClass('no-scroll');
        $('.main').toggleClass('no-visible');
    });

    tab.on('click', function () {
        tab.removeClass('active');
        $(this).toggleClass('active');
        let activeTabContent = $(this).attr('data-target');

        $('.tabs-content').removeClass('visible');
        $(activeTabContent).toggleClass('visible');
    });

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 25,        // 25
        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
                allowTouchMove: false,
            },
            768: {
                slidesPerView: 2,
                navigation: {
                    nextEl: ".button-next",
                }
            },
            // 576: {
            //     slidesPerView: 2,
            // },
            280: {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".button-next",
                }
            }
        }
    });
});