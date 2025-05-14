import { Component, AfterViewInit, OnInit } from '@angular/core';
declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    // Initialize AOS
   setTimeout(() => {
    AOS.init({
      duration: 500,
      once: true,
      mirror: false,
      offset: 100,
      easing: 'ease-in-out'
    });
    
    // Force a refresh after initialization
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, 100);
  }

  ngAfterViewInit() {
    
    // Initialize first gallery
    $('#gallery').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 4000,
      pauseOnHover: true,
      cssEase: 'linear',
      rtl: true,
      draggable: false,
      swipe: false,
      touchMove: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            draggable: false,
            swipe: false,
            touchMove: false,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            draggable: false,
            swipe: false,
            touchMove: false,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            draggable: false,
            swipe: false,
            touchMove: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '60px',
            draggable: false,
            swipe: false,
            touchMove: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // Initialize second gallery
    $('#gallery1').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 4000,
      pauseOnHover: true,
      cssEase: 'linear',
      draggable: false,
      swipe: false,
      touchMove: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            draggable: false,
            swipe: false,
            touchMove: false,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            draggable: false,
            swipe: false,
            touchMove: false,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            draggable: false,
            swipe: false,
            touchMove: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '60px',
            draggable: false,
            swipe: false,
            touchMove: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    
  }
}
