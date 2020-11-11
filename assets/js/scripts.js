$(document).ready(function(){
	$('.testimonial-carousel').owlCarousel({
		items:1,
		dot:false,
		nav:false,
		loop:true,
		autoplay:true,
		autoplayTimeout:1000
	});
	
	// responsive menu
	$('.nav-icon').click(function(){
		$('.menu').slideToggle(1000);

		return false;
	});
	
	// video popup
	$('.video-popup').magnificPopup({
		type:'iframe'
	});
	// scroll-spy
	$('body').scrollspy({ target: '#navbar-spy' })
	
	// menu-click animate
	$('.menu ul li a').click(function(){
		$('html,body').animate({
			scrollTop:$($(this).attr('href')).offset().top
		},1000);
		return false;
	});
});


$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();

	if(scrollvalue>100){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');
	}
	return false;
});  