$(document).ready(function () {
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

	$(window).scroll(function (){
		var bottom_of_element = $("#bio-detail").offset().top + $("#bio-detail").outerHeight() - $(window).height();
		var bottom_of_window = $(this).scrollTop();
		var hT = $("img#my-img").offset().top,
		hH = $("img#my-img").outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		if ( (bottom_of_window > bottom_of_element) && wS > (hT+hH-wH)) {
			$("#bio-detail").animate({"opacity": "1", "margin-left": "0px"},2000);
				$("img#my-img").animate({"opacity":"1"},2000);
			}
	
	});
// scrolling down fade in the navbar scrolling up top make it transparent 
// When scrolling down to a fixed value i.e 3 then the js will apply background .scrolling to nav tag

$(window).scroll(function () {
	$("nav").toggleClass("apply-scrolling", $(this).scrollTop() > 3);
});

// Slide to the left from -700px to 0px( at the present of 1st collumn )

});

