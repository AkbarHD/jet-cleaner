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
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollTop > lastScrollTop && scrollTop > 50 && !navbarCollapse.classList.contains('show')) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });

    // Tambahkan event listener untuk tombol hamburger
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {
        navbar.classList.remove('hidden');
        navbar.classList.add('scrolled');
    });


    document.addEventListener('DOMContentLoaded', function () {
        var video = document.getElementById('jetCleanerVideo');
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });
    });