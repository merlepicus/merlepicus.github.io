//Header
document.addEventListener("DOMContentLoaded", function(event) { 

	var slider_button = document.querySelector('.slider-button');
	var slider_container = document.getElementById("slider-container");
	var main_navigation = document.getElementById("main-navigation");
  var sub_navigation = document.getElementById("subnavi");
	var slider_inactive = false;
  
	slider_button.onclick = function() {
		$("#slider-container").removeClass('active');
		$("#content-container").removeClass('inactive');
		slider_inactive = true;
	}
  
	window.addEventListener('scroll', function() {
		position = scrollbar_position();
		
		if (position >= 150) {
		main_navigation.classList.add('fixed');
		sub_navigation.classList.add('top-position');
		} else {
		main_navigation.classList.remove('fixed');
		sub_navigation.classList.remove('top-position');
		}
		});
	
});

var scrollbar_position = function(){
  return window.pageYOffset | document.body.scrollTop;
}

$('body').on('mousewheel', function(e){
	$("#slider-container").removeClass('active');
	$("#content-container").removeClass('inactive');
});


//Change pos/background/padding/add shadow on nav when scroll event happens 
$(function(){
	var navbar = $('.navbar');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});

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