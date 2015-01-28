$(window).load(function() {
    NProgress.done();
});


$(document).ready(function() {
    $(".one_page_main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
    });

	/*$(".one_page_main").onepage_scroll({
	  afterMove: function(index) {
	    if($( ".contacts" ).hasClass( "active" ) == true){
	    	$(".bar").addClass('animated');
	    }
	  }
	});*/

    $('#graduation').goalProgress({
        goalAmount: 100,
        currentAmount: 50,
        textAfter: '%'
    });

    $('#courseReg').goalProgress({
        goalAmount: 100,
        currentAmount: 100,
        textAfter: '%'
    });

     $('#website').goalProgress({
        goalAmount: 100,
        currentAmount: 95,
        textAfter: '%'
    });

    NProgress.start();
    $('#Container').mixItUp();
});