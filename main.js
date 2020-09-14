(function ($) {
    "use strict";

  // jquery mobile menu
    jQuery('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "991"
  });
  
// lsotope active 
    var grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    })

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  grid.isotope({ filter: filterValue });
});

  //for menu active class
  $('.portfolio-menu button').on('click', function(event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });

// end lsotope setup

})(jQuery);