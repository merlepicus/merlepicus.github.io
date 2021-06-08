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

// Navigation Change on Scroll
$('#jubilaeum').addClass("active");

/* Smooth scrolling*/
$("#s1").click(function() {
     $('html, body').animate({
         scrollTop:        $("#jubilaeum").offset().top-65
     }, 1000);
  return false;
 });
$("#s2").click(function() {
     $('html, body').animate({
         scrollTop:        $("#chronologie").offset().top-100
     }, 1000);
  return false;
 });

$("#s3").click(function() {
     $('html, body').animate({
         scrollTop:        $("#leistungen").offset().top-100
     }, 1000);
  return false;
 });

$("#s4").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#massschuhe").offset().top-100
     }, 1000);
  return false;
 });
 $("#s5").click(function() {
	$(this).addClass("active");
	   $('html, body').animate({
		   scrollTop:        $("#pflegetipps").offset().top-100
	   }, 1000);
	return false;
   });
$("#s6").click(function() {
$(this).addClass("active");
	$('html, body').animate({
		scrollTop:        $("#stimmen").offset().top-100
	}, 1000);
return false;
});

$("#toTop").click(function() {
     $('html, body').animate({
         scrollTop:        $("#1").offset().top-65
     }, 1000);
  return false;
 });
/*$('#2').waypoint(function(event, direction) {

  $(".nav-container ul li").children().removeClass("active");
  $("#s2").addClass("active");
  
  if (direction === 'down') {
    offset = 90;
  } 
  else {
    offset = 20;
  }
});*/


/*
Using jquery waypoints to change active on scroll
*/
$('#chronologie').waypoint(function() {

  $(".nav-container ul li").children().removeClass("active");
  $("#s2").addClass("active");
  
}, { offset: 101 });


$('#leistungen').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s3").addClass("active");
}, { offset: 101 });

$('#massschuhe').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s4").addClass("active");
}, { offset: 101 });

$('#pflegetipps').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s1").addClass("active");
}, { offset: 0 });

$('#stimmen').waypoint(function() {
	$(".nav-container ul li").children().removeClass("active");
	$("#s1").addClass("active");
  }, { offset: 0 });

  
$('#chronologie').waypoint(function() {
  $(".to-top").addClass("visible");
}, { offset: 100 });

$('#massschuhe').waypoint(function(event, direction) {
  $(".to-top").removeClass("visible");
}, { offset: 30 });



// Mobile Navigation
function openNav() {
	document.getElementById("mobile-nav").style.width = "100%";
}
function closeNav() {
	document.getElementById("mobile-nav").style.width = "0%";
}