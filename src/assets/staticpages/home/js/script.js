$('#gallery').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  pauseOnHover: true,
  cssEase: 'linear',
  rtl: true, // left to right
  draggable: false,      // disable mouse dragging
  swipe: false,          // disable swipe on touch devices
  touchMove: false,      // disable all touch movement
   responsive: [
    {
      breakpoint: 1024,
      settings: {
         arrows: false,
        draggable: false,      // disable mouse dragging
        swipe: false,          // disable swipe on touch devices
        touchMove: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
         arrows: false,
        draggable: false,      // disable mouse dragging
        swipe: false,          // disable swipe on touch devices
        touchMove: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
         arrows: false,
        draggable: false,      // disable mouse dragging
        swipe: false,          // disable swipe on touch devices
        touchMove: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
         centerPadding: '60px',
        draggable: false,      // disable mouse dragging
        swipe: false,          // disable swipe on touch devices
        touchMove: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('#gallery1').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  pauseOnHover: true,
  cssEase: 'linear',
  draggable: false,      // disable mouse dragging
  swipe: false,          // disable swipe on touch devices
  touchMove: false,      // disable all touch movement
  responsive: [
    {
      breakpoint: 1024,
      settings: {
         arrows: false,
        draggable: false,      // disable mouse dragging
        swipe: false,          // disable swipe on touch devices
        touchMove: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
         arrows: false,
        draggable: false,      // disable mouse dragging
        swipe: false,          // disable swipe on touch devices
        touchMove: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
         arrows: false,
        draggable: false,      // disable mouse dragging
        swipe: false,          // disable swipe on touch devices
        touchMove: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
         centerPadding: '60px',
        draggable: false,      // disable mouse dragging
        swipe: false,          // disable swipe on touch devices
        touchMove: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});