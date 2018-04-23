// Tab Panels - This was already here!
$(document).ready(function(){
	// grab all container panel DIVs
	var tabContainers = $('div.tabs > div');
	// hide them all, then show the first one
	tabContainers.hide().filter(':first').show();
	// set the first tab to class="selected"
	$('div.tabs ul.tabNavigation a:first').addClass('selected');
	// add onclick handlers to all tabs
	$('div.tabs ul.tabNavigation a').click(function(){
		// hide all tabContainers
		tabContainers.hide();
		// show only the tabContainer with the ID that matches the href for the A that was clicked
		//alert(this.hash);
		tabContainers.filter(this.hash).show();
		// remove class="selected" from all tabs
		$('div.tabs ul.tabNavigation a').removeClass('selected');
		// set class="selected" on the tab that was just clicked
		$(this).addClass('selected');
		// stop following links
		return false;
	});
});

// GreenSock Animation - This functionality is mine!:

// Using the TweenMax CDN to animate elements on the page, in this case, any 'p' tags
TweenMax.staggerFrom('p', 1.5, {opacity: 0, scale: .5}, 1);
// Background Colour set to red before fading
TweenMax.staggerFrom('p', 5, {backgroundColor:"red"}, 2);
// Changes font style to italic for 6 seconds, afterwhich switches back to normal.
TweenMax.staggerFrom('p', 6, {fontStyle:"italic"}, 6);

// Using GreenSock, create a large delay for the third tab to display HTML content.
const duration = 5000;
const third = document.querySelector('#gsap #third');
