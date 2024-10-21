    AOS.init({
        duration: 1200,
        once: true,
    });

    Fancybox.bind("[data-fancybox='testimoni']", {
        infinite: true,
        thumbs: {
            autoStart: true,
        }
    });

    Fancybox.bind("[data-fancybox='promo']", {
        infinite: true,
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        transitionEffect: "tube"
    });

    Fancybox.bind("[data-fancybox]", {
        caption: function (fancybox, carousel, slide) {
            return slide.caption;
        },
    });

    let lastScrollTop = 0;
    let navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY;

        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });


    document.addEventListener('DOMContentLoaded', function () {
        var video = document.getElementById('jetCleanerVideo');
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });
    });