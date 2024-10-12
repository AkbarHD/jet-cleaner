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