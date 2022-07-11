var swiper = new Swiper(".swiper-ticket", 
    {
        slidesPerView: 3.5,
        spaceBetween: 30,
        grabCursor: !0,
        speed: 2e3,
        loop: !0,

        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            950: {
                slidesPerView: 3.5
            },
            1350: {
                slidesPerView: 5
            }
        }
    })
 