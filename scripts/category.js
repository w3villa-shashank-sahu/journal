function initializeCarousel(className, slidesCount, breakpoints) {
    $(className).slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: slidesCount,
        slidesToScroll: slidesCount,
        arrows: false,
        responsive: breakpoints.map(bp => ({
            breakpoint: bp.width,
            settings: {
                slidesToShow: Math.min(bp.slidesToShow, slidesCount),
                slidesToScroll: Math.min(bp.slidesToShow, slidesCount),
                infinite: true,
                dots: true
            }
        }))
    });
}

$(document).ready(function () {
    const breakpoints = [
        { width: 1400, slidesToShow: 4 },
        { width: 1200, slidesToShow: 3 },
        { width: 992, slidesToShow: 2 },
        { width: 500, slidesToShow: 1 }
    ];

    const breakpoints5 = [
        { width: 1400, slidesToShow: 4 },
        { width: 900, slidesToShow: 3 },
        { width: 700, slidesToShow: 2 },
    ];
    const breakpoints9 = [

        { width: 1000, slidesToShow: 7 },
        { width: 750, slidesToShow: 5 },
        { width: 450, slidesToShow: 3}
    ];

    initializeCarousel('.carousel3', 3, breakpoints);
    initializeCarousel('.carousel5', 5, breakpoints5);
    initializeCarousel('.carousel4', 4, breakpoints);
    initializeCarousel('.carousel9', 9, breakpoints9);
});
