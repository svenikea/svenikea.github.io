$(document).ready(function () {
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
	$("ul.fade").css("display", "none");
	$("ul.fade").fadeIn(2500);
	$("div.slide-up").animate({"top": "-=30%"}, 2000);

});
