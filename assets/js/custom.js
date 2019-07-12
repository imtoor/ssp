(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            Portfolio Filter
        ----------------------------------------------------*/
        $('#portfolio').imagesLoaded(function () {
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $(this).addClass('active').siblings().removeClass('active');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.portfolio-list').isotope({
                itemSelector: '.portfolio-grid',
            });
        });

        /*---------------------------------------------------
            Slider Carousel
        ----------------------------------------------------*/
        var owl = $('.slides.owl-carousel');
        owl.owlCarousel({
            loop: true,
            navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        //Slider Caption Animation
        owl.on('changed.owl.carousel', function (event) {
            var item = event.item.index - 2; // Position of the current item
            $('.caption-content h1, .caption-content h3').removeClass('animated fadeInDown');
            $('.large-btn').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.caption-content h1, .caption-content h3').addClass('animated fadeInDown');
            $('.owl-item').not('.cloned').eq(item).find('.large-btn').addClass('animated fadeInUp');
        });

        /*---------------------------------------------------
            Portfolio Image PopUp
        ----------------------------------------------------*/
        $('.popup-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        /*---------------------------------------------------
            Counter
        ----------------------------------------------------*/
        $('.counter-single h2').counterUp({
            delay: 10, // the delay time in ms
            time: 1000 // the speed time in ms
        });

        /*---------------------------------------------------
            Testimonial Carousel
        ----------------------------------------------------*/
        $('.testimonial-carousel.owl-carousel').owlCarousel({
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        /*---------------------------------------------------
            Partner Carousel
        ----------------------------------------------------*/
        $('.partner-carousel.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                991: {
                    items: 5
                },
                1200: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });

        /*---------------------------------------------------
            Menu Active Color Highlight
        ----------------------------------------------------*/
        $(".navbar ul.nav li a").on("click", function () {
            $(".navbar ul.nav li a").removeClass("active");
            $(this).addClass("active");
        });

        /*---------------------------------------------------
            Ripple Effect
        ----------------------------------------------------*/
        $('.ripple').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04
        });

        // Automatic drops
        setInterval(function () {
            var $el = $('.ripple');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;

            $el.ripples('drop', x, y, dropRadius, strength);
        }, 400);

        /*---------------------------------------------------
            Switcher Panel
        ----------------------------------------------------*/
        $(".switcher-box .switcher-box-spinner").on('click', function (event) {
            event.preventDefault();
            if ($(this).hasClass("color-switcher-icon")) {
                $(".color-switcher").stop().animate({
                    left: "-185px"
                }, 500);
            } else {
                $(".color-switcher").stop().animate({
                    left: "0px"
                }, 500);
            }
            $(this).toggleClass("color-switcher-icon");
            return false;
        });
        /*---------------------------------------------------
            Color Switcher
        ----------------------------------------------------*/
        function colorPrimary() {
            $('body').attr('class', 'color-primary');
        }

        function colorOne() {
            $('body').attr('class', 'color-one');
        }

        function colorTwo() {
            $('body').attr('class', 'color-two');
        }

        function colorThree() {
            $('body').attr('class', 'color-three');
        }

        function colorFour() {
            $('body').attr('class', 'color-four');
        }

        function colorFive() {
            $('body').attr('class', 'color-five');
        }

        function colorSix() {
            $('body').attr('class', 'color-six');
        }

        function colorSeven() {
            $('body').attr('class', 'color-seven');
        }

        function colorEight() {
            $('body').attr('class', 'color-eight');
        }

        function colorNine() {
            $('body').attr('class', 'color-nine');
        }

        function colorTen() {
            $('body').attr('class', 'color-ten');
        }

        function colorEleven() {
            $('body').attr('class', 'color-eleven');
        }

        function colorTwelve() {
            $('body').attr('class', 'color-twelve');
        }

        function colorThirteen() {
            $('body').attr('class', 'color-thirteen');
        }

        function colorFourteen() {
            $('body').attr('class', 'color-fourteen');
        }

        function colorFifteen() {
            $('body').attr('class', 'color-fifteen');
        }

        function colorSixteen() {
            $('body').attr('class', 'color-sixteen');
        }

        function colorSeventeen() {
            $('body').attr('class', 'color-seventeen');
        }

        function colorEighteen() {
            $('body').attr('class', 'color-eighteen');
        }

        function colorNineteen() {
            $('body').attr('class', 'color-nineteen');
        }

        function colorTwenty() {
            $('body').attr('class', 'color-twenty');
        }

        function colorTwentyOne() {
            $('body').attr('class', 'color-twenty-one');
        }

        function colorTwentyTwo() {
            $('body').attr('class', 'color-twenty-two');
        }

        function colorTwentyThree() {
            $('body').attr('class', 'color-twenty-three');
        }

        $('.switcher-colors span.color-primary').on('click', colorPrimary);
        $('.switcher-colors span.color-one').on('click', colorOne);
        $('.switcher-colors span.color-two').on('click', colorTwo);
        $('.switcher-colors span.color-three').on('click', colorThree);
        $('.switcher-colors span.color-four').on('click', colorFour);
        $('.switcher-colors span.color-five').on('click', colorFive);
        $('.switcher-colors span.color-six').on('click', colorSix);
        $('.switcher-colors span.color-seven').on('click', colorSeven);
        $('.switcher-colors span.color-eight').on('click', colorEight);
        $('.switcher-colors span.color-nine').on('click', colorNine);
        $('.switcher-colors span.color-ten').on('click', colorTen);
        $('.switcher-colors span.color-eleven').on('click', colorEleven);
        $('.switcher-colors span.color-twelve').on('click', colorTwelve);
        $('.switcher-colors span.color-thirteen').on('click', colorThirteen);
        $('.switcher-colors span.color-fourteen').on('click', colorFourteen);
        $('.switcher-colors span.color-fifteen').on('click', colorFifteen);
        $('.switcher-colors span.color-sixteen').on('click', colorSixteen);
        $('.switcher-colors span.color-seventeen').on('click', colorSeventeen);
        $('.switcher-colors span.color-eighteen').on('click', colorEighteen);
        $('.switcher-colors span.color-nineteen').on('click', colorNineteen);
        $('.switcher-colors span.color-twenty').on('click', colorTwenty);
        $('.switcher-colors span.color-twenty-one').on('click', colorTwentyOne);
        $('.switcher-colors span.color-twenty-two').on('click', colorTwentyTwo);
        $('.switcher-colors span.color-twenty-three').on('click', colorTwentyThree);

    });

    /*---------------------------------------------------
        Smooth Scroll
    ----------------------------------------------------*/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

    });

    /*---------------------------------------------------
        Window Scroll
    ----------------------------------------------------*/
    $(window).on('scroll', function () {

        /* Parallax Background
        ------------------------*/
        $('#parallax').scrolly({
            bgParallax: true
        });

        /* Click To Top Button
        ------------------------*/
        if ($(this).scrollTop() > 250) {
            $('#footer .click-to-top').fadeIn();
        } else {
            $('#footer .click-to-top').fadeOut();
        }

    });

    /*---------------------------------------------------
        Preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);

    });


}(jQuery));
