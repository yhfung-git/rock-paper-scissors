// Footer Copyright Date
date = new Date();
year = date.getFullYear();
document.getElementById("current-year").innerHTML = year;

// Scroll Duration
$(document).ready(function(){
  // Add smooth scrolling to the class="play"
  $('.play').on('click', function(event) {

    // this.hash reads the href attribute of this, and gets the part of the URL beginning with #
    // this.hash = HTMLAnchorElement.hash
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
