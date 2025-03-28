jQuery(document).ready(function() {
    $(".menu-btn").click(function() {
        $(".mobile-menu").toggleClass("-left-200 left-0");
    });
    $(".close-btn").click(function() {
        $(".mobile-menu").removeClass("left-0").addClass("-left-200");
    });


    
    $(".testimonials-carousel").slick({
        autoplay: true,
        autoplaySpeed: 2500,        
        prevArrow:'<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.15 33.8665L14.2834 22.9998C13 21.7165 13 19.6165 14.2834 18.3332L25.15 7.46649" stroke="#1F1F1F" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        nextArrow: '<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.85 33.8665L25.7167 22.9998C27 21.7165 27 19.6165 25.7167 18.3332L14.85 7.46649" stroke="#1F1F1F" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    });


    $(".progress-bar").ProgressBar();
});