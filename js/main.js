$(function() {
	
	// Smooth scrolling
	$('.navbar.navbar-default.navbar-fixed-top a, footer .btn-top').on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});

	// close an open collapsed navbar when clicking outside of the navbar element
	$(document).click(function(event) {
		var clickover = $(event.target);
		var opened = $('.navbar-collapse').hasClass('in');
		if (opened === true && !clickover.hasClass('navbar-toggle')) {
			$('button.navbar-toggle').click();
		}
	});

	// Multi-item Carousel
	// https://codepen.io/mephysto/pen/ZYVKRY
	// 1) instantiate the Bootstrap carousel
	$('.multi-item-carousel').carousel({
		interval: false
	});
	// 2) for every slide in carousel, copy the next slide's item in the slide
	// 3) do the same for the next, next item
	$('.multi-item-carousel .item').each(function() {
		var next = $(this).next();
		
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		
		next.children(':first-child').clone().appendTo($(this));

		if (next.next().length > 0) {
			next.next().children(':first-child').clone().appendTo($(this));
		} else {
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});

	// Slide in animation
	$(window).scroll(function() {
		$('.slidein').each(function() {
			var elemPos = $(this).offset().top;
			var scrollPos = $(window).scrollTop();
			if (elemPos < scrollPos + 600) {
				$(this).addClass('slide-item');
			}
		});
	});

});
