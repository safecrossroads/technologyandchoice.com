---
---
//////////////////////////////////////////////////////////////////
// Base                                                         //
//////////////////////////////////////////////////////////////////
{% include_relative _includes/bootstrap.min.js %}
{% include_relative _includes/Smoothscroll.js %}
{% include_relative _includes/ScrollMagic.min.js %}
{% include_relative _includes/jquery.magnific-popup.min.js %}



//////////////////////////////////////////////////////////////////
// Setup                                                        //
//////////////////////////////////////////////////////////////////
// Avoid `console` errors in browsers that lack a console.
(function(){var e;var t=function(){};var n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var r=n.length;var i=window.console=window.console||{};while(r--){e=n[r];if(!i[e]){i[e]=t}}})()


jQuery(document).ready(function() {

// Carousel speed
  $('#myCarousel.slide').carousel({ interval: 6000, cycle: true });

// Scrollspy offset
  $('[data-spy="scroll"]').scrollspy({ offset: 100 });

// Tooltip & Popover
  $("[data-toggle=tooltip]").tooltip();
  $("[data-toggle=popover]").popover();

// Navbar Affix
  $('.navbar-fixed-top').affix({ offset: {
      top: 50,
      bottom: null
    }
  });

// Smooth Scroll
  $('a.smooth-scroll').smoothScroll({offset: 0});
  $('.nav-scroll a').smoothScroll({offset: -73 });
  $('.back-top a').smoothScroll({offset: -100 });

// Back-top Button fading
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150)
         { $('.back-top-fade').fadeIn(); }
    else { $('.back-top-fade').fadeOut();}
  });

// End
});


// Scroll-fade
jQuery(document).ready(function () {
  var fadeStart=0 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=360 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('.scroll-fade');

    $(window).bind('scroll', function(){
      var offset = $(document).scrollTop()
          ,opacity=0;

      if( offset<=fadeStart ){
          opacity=1;

      }else if ( offset<=fadeUntil ){
          opacity=1-offset/fadeUntil;
      }

    fading.css('opacity',opacity);
  });
});


// Selected Menu
$(function(){
  function stripTrailingSlash(str) {
    if(str.substr(-1) == '/') {
      return str.substr(0, str.length - 1);
    }
    return str;
  }

  var url = window.location.pathname;
  var activePage = stripTrailingSlash(url);

  $('.nav li a').each(function(){
    var currentPage = stripTrailingSlash($(this).attr('href'));

    if (activePage == currentPage) {
      $(this).parent().addClass('active');
    }
  });
});



// Map auto convert
jQuery(document).ready(function() {
//Convert Address tags into a map link
    $('.address').each(function() {
        var link = "<a href='http://maps.apple.com/?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
        $(this).html(link);
    });



//Convert Address into an embedded map
  $(".mapaddress").each(function(){
    var embed ="<iframe width='100%' height='350' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
    $(this).html(embed);
  });

// End
});



// Syntax Highlighting
$(document).ready(function() {
    $( 'pre' ).addClass( 'prettyprint' );
    $("pre[class=prettyprint]").each( function() {
        if ( ($(this).html().split(/\n/).length-1) > 3 ) {
            $(this).addClass( 'linenums' );
        }
    });
});




//////////////////////////////////////////////////////////////////
// Popup setting                                                //
//////////////////////////////////////////////////////////////////

// Magnific Popup
jQuery(document).ready(function() {

  //Video
  $('.popup-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  //Map
  $('.popup-map').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  //Image
  $('.popup-image').magnificPopup({
    disableOn: 700,
    type: 'image',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  //Image
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: { verticalFit: true }
  });

  //Image
  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: { verticalFit: false }
  });

  //Image
  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: { verticalFit: true },
    zoom: { enabled: true, duration: 300 } // don't foget to change the duration also in CSS
  });

// End
});




//////////////////////////////////////////////////////////////////
// iPhone style Pull up menu                                    //
//////////////////////////////////////////////////////////////////

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.pull-up-menu').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 200);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.pull-up-menu').removeClass('scroll-up').addClass('scroll-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.pull-up-menu').removeClass('scroll-down').addClass('scroll-up');
        }
    }

    lastScrollTop = st;
}





//////////////////////////////////////////////////////////////////
// Custom                                                       //
//////////////////////////////////////////////////////////////////

// Screen Tester Toggle
//$(document).ready(function(){
//    $('#toggle-tester').click(function(){
//        $('body').toggleClass("style-testing");
//    });
//});

// Screen Tester Measure
$(window).resize(function() {
    $("#screen-width").html($(window).width());
    $("#screen-height").html($(window).height());
}).resize();


/* Mouseover Dropdown */
$('.mouseover .dropdown').hover(function(){
  $('.dropdown-toggle', this).trigger('click');
});
