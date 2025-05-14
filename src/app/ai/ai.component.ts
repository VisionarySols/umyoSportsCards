import { Component, AfterViewInit, OnInit } from '@angular/core';
declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-cf',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent implements OnInit, AfterViewInit {
  showPolicyModal: boolean = false;
  showRefundModal: boolean = false;
  showTermsModal: boolean = false;

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
    // Initialize slick galleries (your existing code)
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

    // Get all elements using jQuery
    var talk = $('#talk')[0];
    var talk_more_btn = $('#talk_more_btn')[0];
    var talk_less_btn = $('#talk_less_btn')[0];

    var tweet = $('#tweet')[0];
    var tweet_more_btn = $('#tweet_more_btn')[0];
    var tweet_less_btn = $('#tweet_less_btn')[0];

    var event = $('#event')[0];
    var event_more_btn = $('#event_more_btn')[0];
    var event_less_btn = $('#event_less_btn')[0];

    var radio = $('#radio')[0];
    var radio_more_btn = $('#radio_more_btn')[0];
    var radio_less_btn = $('#radio_less_btn')[0];

    var appoint = $('#appoint')[0];
    var appoint_more_btn = $('#appoint_more_btn')[0];
    var appoint_less_btn = $('#appoint_less_btn')[0];

    var music = $('#music')[0];
    var music_more_btn = $('#music_more_btn')[0];
    var music_less_btn = $('#music_less_btn')[0];

    var stream = $('#stream')[0];
    var stream_more_btn = $('#stream_more_btn')[0];
    var stream_less_btn = $('#stream_less_btn')[0];

    var think = $('#think')[0];
    var think_more_btn = $('#think_more_btn')[0];
    var think_less_btn = $('#think_less_btn')[0];

    var dating = $('#dating')[0];
    var dating_more_btn = $('#dating_more_btn')[0];
    var dating_less_btn = $('#dating_less_btn')[0];

    var fans = $('#fans')[0];
    var fans_more_btn = $('#fans_more_btn')[0];
    var fans_less_btn = $('#fans_less_btn')[0];

    var store = $('#store')[0];
    var store_more_btn = $('#store_more_btn')[0];
    var store_less_btn = $('#store_less_btn')[0];

    var conference = $('#conference')[0];
    var conference_more_btn = $('#conference_more_btn')[0];
    var conference_less_btn = $('#conference_less_btn')[0];

    var youth = $('#youth')[0];
    var youth_more_btn = $('#youth_more_btn')[0];
    var youth_less_btn = $('#youth_less_btn')[0];

    var prize = $('#prize')[0];
    var prize_more_btn = $('#prize_more_btn')[0];
    var prize_less_btn = $('#prize_less_btn')[0];

    var book = $('#book')[0];
    var book_more_btn = $('#book_more_btn')[0];
    var book_less_btn = $('#book_less_btn')[0];

    var magazine = $('#magazine')[0];
    var magazine_more_btn = $('#magazine_more_btn')[0];
    var magazine_less_btn = $('#magazine_less_btn')[0];

    var news = $('#news')[0];
    var news_more_btn = $('#news_more_btn')[0];
    var news_less_btn = $('#news_less_btn')[0];

    var talent = $('#talent')[0];
    var talent_more_btn = $('#talent_more_btn')[0];
    var talent_less_btn = $('#talent_less_btn')[0];

    var game = $('#game')[0];
    var game_more_btn = $('#game_more_btn')[0];
    var game_less_btn = $('#game_less_btn')[0];

    var vpn = $('#vpn')[0];
    var vpn_more_btn = $('#vpn_more_btn')[0];
    var vpn_less_btn = $('#vpn_less_btn')[0];

    var men = $('#men')[0];
    var men_more_btn = $('#men_more_btn')[0];
    var men_less_btn = $('#men_less_btn')[0];

    // Define the sectionShow function
    (window as any).sectionShow = function(argument: string) {
      if (argument === 'talk') {
        talk.style.display = 'block';
        talk_more_btn.style.display = 'none';
        talk_less_btn.style.display = 'flex';

      } else if (argument === 'tweet') {
        tweet.style.display = 'block';
        tweet_more_btn.style.display = 'none';
        tweet_less_btn.style.display = 'flex';

      } else if (argument === 'event') {
        event.style.display = 'block';
        event_more_btn.style.display = 'none';
        event_less_btn.style.display = 'flex';

      } else if (argument === 'radio') {
        radio.style.display = 'block';
        radio_more_btn.style.display = 'none';
        radio_less_btn.style.display = 'flex';

      } else if (argument === 'appoint') {
        appoint.style.display = 'block';
        appoint_more_btn.style.display = 'none';
        appoint_less_btn.style.display = 'flex';

      } else if (argument === 'music') {
        music.style.display = 'block';
        music_more_btn.style.display = 'none';
        music_less_btn.style.display = 'flex';

      } else if (argument === 'stream') {
        stream.style.display = 'block';
        stream_more_btn.style.display = 'none';
        stream_less_btn.style.display = 'flex';

      } else if (argument === 'think') {
        think.style.display = 'block';
        think_more_btn.style.display = 'none';
        think_less_btn.style.display = 'flex';

      } else if (argument === 'dating') {
        dating.style.display = 'block';
        dating_more_btn.style.display = 'none';
        dating_less_btn.style.display = 'flex';

      } else if (argument === 'fans') {
        fans.style.display = 'block';
        fans_more_btn.style.display = 'none';
        fans_less_btn.style.display = 'flex';

      } else if (argument === 'store') {
        store.style.display = 'block';
        store_more_btn.style.display = 'none';
        store_less_btn.style.display = 'flex';

      } else if (argument === 'conference') {
        conference.style.display = 'block';
        conference_more_btn.style.display = 'none';
        conference_less_btn.style.display = 'flex';

      } else if (argument === 'youth') {
        youth.style.display = 'block';
        youth_more_btn.style.display = 'none';
        youth_less_btn.style.display = 'flex';

      } else if (argument === 'prize') {
        prize.style.display = 'block';
        prize_more_btn.style.display = 'none';
        prize_less_btn.style.display = 'flex';

      } else if (argument === 'book') {
        book.style.display = 'block';
        book_more_btn.style.display = 'none';
        book_less_btn.style.display = 'flex';

      } else if (argument === 'magazine') {
        magazine.style.display = 'block';
        magazine_more_btn.style.display = 'none';
        magazine_less_btn.style.display = 'flex';

      } else if (argument === 'news') {
        news.style.display = 'block';
        news_more_btn.style.display = 'none';
        news_less_btn.style.display = 'flex';

      } else if (argument === 'talent') {
        talent.style.display = 'block';
        talent_more_btn.style.display = 'none';
        talent_less_btn.style.display = 'flex';

      } else if (argument === 'game') {
        game.style.display = 'block';
        game_more_btn.style.display = 'none';
        game_less_btn.style.display = 'flex';

      } else if (argument === 'vpn') {
        vpn.style.display = 'block';
        vpn_more_btn.style.display = 'none';
        vpn_less_btn.style.display = 'flex';

      } else if (argument === 'men') {
        men.style.display = 'block';
        men_more_btn.style.display = 'none';
        men_less_btn.style.display = 'flex';
      }
    };

    // Add event listeners
    if (talk_less_btn) {
      talk_less_btn.addEventListener("click", function() {
        talk_less_btn.style.display = "none";
        talk.style.display = "none";
        talk_more_btn.style.display = "flex";
      });
    }

    if (tweet_less_btn) {
      tweet_less_btn.addEventListener("click", function() {
        tweet_less_btn.style.display = "none";
        tweet.style.display = "none";
        tweet_more_btn.style.display = "flex";
      });
    }

    if (event_less_btn) {
      event_less_btn.addEventListener("click", function() {
        event_less_btn.style.display = "none";
        event.style.display = "none";
        event_more_btn.style.display = "flex";
      });
    }

    if (radio_less_btn) {
      radio_less_btn.addEventListener("click", function() {
        radio_less_btn.style.display = "none";
        radio.style.display = "none";
        radio_more_btn.style.display = "flex";
      });
    }

    if (appoint_less_btn) {
      appoint_less_btn.addEventListener("click", function() {
        appoint_less_btn.style.display = "none";
        appoint.style.display = "none";
        appoint_more_btn.style.display = "flex";
      });
    }

    if (music_less_btn) {
      music_less_btn.addEventListener("click", function() {
        music_less_btn.style.display = "none";
        music.style.display = "none";
        music_more_btn.style.display = "flex";
      });
    }

    if (stream_less_btn) {
      stream_less_btn.addEventListener("click", function() {
        stream_less_btn.style.display = "none";
        stream.style.display = "none";
        stream_more_btn.style.display = "flex";
      });
    }

    if (think_less_btn) {
      think_less_btn.addEventListener("click", function() {
        think_less_btn.style.display = "none";
        think.style.display = "none";
        think_more_btn.style.display = "flex";
      });
    }

    if (dating_less_btn) {
      dating_less_btn.addEventListener("click", function() {
        dating_less_btn.style.display = "none";
        dating.style.display = "none";
        dating_more_btn.style.display = "flex";
      });
    }

    if (fans_less_btn) {
      fans_less_btn.addEventListener("click", function() {
        fans_less_btn.style.display = "none";
        fans.style.display = "none";
        fans_more_btn.style.display = "flex";
      });
    }

    if (store_less_btn) {
      store_less_btn.addEventListener("click", function() {
        store_less_btn.style.display = "none";
        store.style.display = "none";
        store_more_btn.style.display = "flex";
      });
    }

    if (conference_less_btn) {
      conference_less_btn.addEventListener("click", function() {
        conference_less_btn.style.display = "none";
        conference.style.display = "none";
        conference_more_btn.style.display = "flex";
      });
    }

    if (youth_less_btn) {
      youth_less_btn.addEventListener("click", function() {
        youth_less_btn.style.display = "none";
        youth.style.display = "none";
        youth_more_btn.style.display = "flex";
      });
    }

    if (prize_less_btn) {
      prize_less_btn.addEventListener("click", function() {
        prize_less_btn.style.display = "none";
        prize.style.display = "none";
        prize_more_btn.style.display = "flex";
      });
    }

    if (book_less_btn) {
      book_less_btn.addEventListener("click", function() {
        book_less_btn.style.display = "none";
        book.style.display = "none";
        book_more_btn.style.display = "flex";
      });
    }

    if (magazine_less_btn) {
      magazine_less_btn.addEventListener("click", function() {
        magazine_less_btn.style.display = "none";
        magazine.style.display = "none";
        magazine_more_btn.style.display = "flex";
      });
    }

    if (news_less_btn) {
      news_less_btn.addEventListener("click", function() {
        news_less_btn.style.display = "none";
        news.style.display = "none";
        news_more_btn.style.display = "flex";
      });
    }

    if (talent_less_btn) {
      talent_less_btn.addEventListener("click", function() {
        talent_less_btn.style.display = "none";
        talent.style.display = "none";
        talent_more_btn.style.display = "flex";
      });
    }

    if (game_less_btn) {
      game_less_btn.addEventListener("click", function() {
        game_less_btn.style.display = "none";
        game.style.display = "none";
        game_more_btn.style.display = "flex";
      });
    }

    if (vpn_less_btn) {
      vpn_less_btn.addEventListener("click", function() {
        vpn_less_btn.style.display = "none";
        vpn.style.display = "none";
        vpn_more_btn.style.display = "flex";
      });
    }

    if (men_less_btn) {
      men_less_btn.addEventListener("click", function() {
        men_less_btn.style.display = "none";
        men.style.display = "none";
        men_more_btn.style.display = "flex";
      });
    }

    // Define hide functions
    (window as any).hide = function() {
      vpn.style.display = "none";
      vpn_less_btn.style.display = "none";
      vpn_more_btn.style.display = "flex";
    };

    (window as any).hide1 = function() {
      men.style.display = "none";
      men_less_btn.style.display = "none";
      men_more_btn.style.display = "flex";
    };
  }
}