$(document).ready(function () {
//	$(".jumbotron-header.container").css("display", "none");
//	$(".jumbotron-header.container").fadeIn(2500);
	// Add smooth scrolling to all links
$("a").on('click', function (event) {
		// Make sure this has has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery animate() method to add smooth page scroll
			// The optional number (800) specifies the number of miliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function () {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});
$("div#fade").css("display", "none"); 
/*
Slowly display the jumbotron
*/ 
$("div#fade").fadeIn(2500);	
$(window).scroll(function () {
	$("nav").toggleClass("scrolling", $(this).scrollTop() > 650);
});
	