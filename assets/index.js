var branding_height = 253;
var scroll_offset = 10;


//Change pos/background/padding/add shadow on nav when scroll event happens 
$(function(){

	// Add animation after domready to prevent jumping branding
	$("#main-navigation").addClass("animated");


	// Remove animation and active class on intro-container when document is already scrolled
	if ($(window).scrollTop() > scroll_offset) {
		$("#intro-container").removeClass('active');
		$("#main-navigation").removeClass("animated");
	}

	// Toogle navigation and intro classes on scroll
	$(window).scroll(function(){
		if ($(window).scrollTop() > scroll_offset) {
			$("#intro-container").removeClass('active');
			$("#burger-icon").removeClass('active');
		};

		if ($(window).scrollTop() >= branding_height){
			$('#main-navigation').addClass('fixed');
			$('#slogan').addClass('fixed');
			$('#burger-icon').addClass('fixed');
		} else {
			$('#main-navigation').removeClass('fixed');
			$('#burger-icon').removeClass('fixed');
		}
	});

	if ($(window).scrollTop() > branding_height) {
		$('#main-navigation').addClass('fixed');
		$('#burger-icon').addClass('fixed');
	}

	// Splide Slider
	var splide = new Splide('.splide', {
	  focus: 'center',
	  type: 'loop',
	  perPage: 3,
	  gap: '1rem',
	  height: '18rem',
		cover: true,
	  breakpoints: {
			'767': {
				perPage: 1,
			},
		}
	}).mount();

	splide.on('move', function(newIndex, oldIndex, destIndex) {
	  $('.splide__list').find(".slide-description").addClass("hidden");
	  $('.splide__slide').find('.desc-' + newIndex).removeClass("hidden");
	});

});

// Mobile Navigation
function openNav() {
	document.getElementById("mobile-nav").style.width = "100%";
}
function closeNav() {
	document.getElementById("mobile-nav").style.width = "0%";
}