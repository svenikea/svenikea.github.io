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

// scrolling down fade in the navbar scrolling up top make it transparent 
$(window).scroll(function () {
	$("nav").toggleClass("scrolling", $(this).scrollTop() > 3);
});
	

// Fade the bio image
/*$(document).ready(function (){
	$(window).scroll(function (){
		$("#my-img").fadeIn(2500);
	})

});
*/
// Alternative coding from the internet about fade in bio image 
$(document).ready(function () {
	$(window).scroll(function () {
		$("#my-img").each(function (i){
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(this).scrollTop() + $(window).height();
			if ( bottom_of_window > bottom_of_element) {
				$(this).animate({"opacity" : "1"},2000);
			}
			else if ( bottom_of_window < bottom_of_element) { 
				$(this).animate({"opacity" : "1"},2000);
			}
			/*
			* For some reason I have to added a second if statement just for my ext-monitor and my laptop screen to work?
			*/
		})
	})
});