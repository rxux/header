$(document).ready(function(){

  // TABLET DROPDOWN HAMBURGER
  $(document).on('click', '.nav-icon-tabletUp', function(){
    $(this).toggleClass('open');
  });
  $(document).on('click', '.nav-icon-mobile', function(){
    $(this).toggleClass('open');
  });

  $(document).on('click', '.search-target', function() {
    $('.rx-animated-header').css({'overflow': 'visible'});
    if (topZero <= navbarHeight) {
      if ($(this).hasClass('search-collapsed')) {  
        $('.header-spacer').css({height: navbarHeight + searchBarHeight});
        $(this).removeClass('search-collapsed');
      } else {
        $('.header-spacer').css({height: navbarHeight});
        $(this).addClass('search-collapsed');
      }
      if (didScroll = true) {

      }
    }
  });

  // SET VAR FOR VIEWPORT WIDTH
  var _vp = $(window).width();
  $(window).resize(function() {
    var _vp = $(window).width();
    var navbarHeight = $('header').outerHeight();
    $('#searchCollapse').collapse('hide');
    $('.header-spacer').css({'height': navbarHeight});
    $('.search-target').addClass('search-collapsed');
  });

  // HERE WE START THE HEADER-HIDE FOR MOBILE
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();
  var searchBarHeight = $('#searchCollapse').outerHeight();
  $('#searchCollapse').collapse('hide');
  $('.header-spacer').css({height: navbarHeight});


  $(window).scroll(function(){
    var _vp = $(window).width();
    if (_vp <= 768) {
      didScroll = true;
    }
  });

  setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }

    topZero = $(window).scrollTop();

  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta) {
      return;
    }

    if (!$('.search-input').is(':focus')) {
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        // This collapses the search bar if it's shown
        if ($('#searchCollapse').hasClass('in')) {
          $('#searchCollapse').collapse('hide');
          $('.header-spacer').css({'height': navbarHeight});
          $('.search-target').addClass('search-collapsed');
        }
      } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('header').removeClass('nav-up').addClass('nav-down');
          if ($('#searchCollapse').hasClass('in')) {
            $('#searchCollapse').collapse('hide');
            $('.header-spacer').css({'height': navbarHeight});
            $('.search-target').addClass('search-collapsed');
          }
        }
      }
    }
    lastScrollTop = st;
  }

}); // END DOCUMENT READY

// FUNCTIONS TO SHRINK HEADER ON TABLET +
$(function(){
  
   var shrinkHeader = 200;
    $(window).scroll(function() {
      var _vp = $(window).width();
      var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
            if (_vp > 768) {
              $('.rx-animated-header').addClass('shrink');
            }  
          }
          else {
              $('.rx-animated-header').removeClass('shrink');
          }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
  
// ENABLE BOOTSTRAP POPOVER FOR HEADER ICONS 
$(function () {
  $('[data-toggle="popover"]').popover();
});




