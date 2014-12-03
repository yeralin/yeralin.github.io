$(window).load(function() {
    NProgress.done();
});



$(document).ready(function() {

    $(".one_page_main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
    });

    NProgress.start();
    $('#Container').mixItUp();
});