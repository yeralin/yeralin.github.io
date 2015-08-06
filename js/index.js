$(window).load(function() {
    NProgress.done();
});


$(document).ready(function() {
	$(".one_page_main").onepage_scroll();
    NProgress.start();
});

var state = 0;

$(document).keydown(function(e){
    var keyCode = e.keyCode || e.which;
    if (keyCode == '39') {
		if(state == 0) {
			$(".one_page_main").moveDown();
		}
		else if(state == 1) {
			$(".line").addClass("active");
		}
		else if(state == 2) {
			$(".one_page_main").moveDown();
		}
		else if(state == 3) {
			$(".blockImg").addClass("active");
		}
		else if(state == 4) {
			$(".below").addClass("active");
		}
		else if(state == 5) {
			$(".one_page_main").moveDown();
		}
		else if(state == 6){
			animateAnswer();
		}
		else if(state == 7) {
			$(".block").removeClass("active");
			$(".ex").text("How it works?");
			$(".how").addClass("active");
		}
		else if(state == 8) {
			$(".one_page_main").moveDown();
		}
		else if(state == 9) {
			$(".screenshot").addClass("active");
		}
		else if(state == 10) {
			$(".blockGroup").addClass("active");
		}
		else if(state == 11) {
			$(".transferBlock").addClass("active");
		}
		else if(state == 12) {
			$(".transferBlock").addClass("hidden");
			$(".tier").addClass("active");
		}
		else if(state == 13) {
			$(".tier").addClass("move");
		}
		else if(state == 14) {
			$(".tier").addClass("hidden");
		}
		else if(state == 15) {
			$(".architecture").addClass("active");
		}
		
		else if(state == 16)
			$(".one_page_main").moveDown();
		else if(state == 17) {
			$(".videoBlock").addClass("active")
		}
		else if(state == 18) {
			$("#video1")[0].play();
		}
		else if(state == 19) {
			$("#video2")[0].play();
		}
		else if(state == 20) {
			$("#video3")[0].play();
		}
		else if(state == 21) {
			$("#video4")[0].play();
		}
		else if(state == 22) {
			$('.bxslider').bxSlider({
				auto: true,
				pause: 8000
			});
			$(".one_page_main").moveDown();
		}
		else if(state == 23) {

			$(".one_page_main").moveDown();
		}
		state++;
    }
});


var animateAnswer = function(callback) {
	$(".exInput").typed({
		strings: ["What's temperature outside?"],
		typeSpeed: 0,
		callback: function() {
			$(".arrow").addClass("active");
			setTimeout(function() {
				$(".answer").addClass("active");
			}, 2000);
		}
	});
};