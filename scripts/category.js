function initializeCarousel(className, slidesCount) {
    $(className).slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: slidesCount,
        slidesToScroll: slidesCount,
        arrows: false,
        responsive: Array.from({ length: slidesCount - 1 }, (_, index) => {
            const remainingSlides = slidesCount - index - 1;
            return {
                breakpoint: 1400 - (index * 300),
                settings: {
                    slidesToShow: remainingSlides,
                    slidesToScroll: remainingSlides,
                    infinite: true,
                    dots: true
                }
            };
        })
    });
}

$(document).ready(function () {
    initializeCarousel('.carousel5', 5);
    initializeCarousel('.carousel4', 4);
    initializeCarousel('.carousel9', 9);
});
