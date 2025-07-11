var _body = "",
	_html = "",
	_htmlBody = "",
	_window = "",
	_layout = "";

$(document).ready(function(){

    _body = jQuery('body');
	_html = jQuery('html');
	_htmlBody = jQuery('html, body');
	_window = jQuery(window);
	_layout = jQuery('.layout');
    
    // for mail submit demo
    $(".submit-mail").on('click',function(){
        $(".notify-box").hide();
        $('.notify-succes-box').addClass('active');
    });

    // nav-toggle
    $('.nav-btn').on('click',function(){
        _html.toggleClass('nav-expanded');
        if(_html.hasClass('nav-expanded')) {
            $('.get-header-c').attr({role: 'dialog', "aria-modal": 'true'});
        } else {
            $('.get-header-c').removeAttr('role aria-modal');
        }
    });

    // get-backdrop 
    $('.get-backdrop').on('click',function(){
        _html.removeClass('nav-expanded');
        $('.get-header-c').removeAttr('role aria-modal');
    })
    

   
    // sub menu header
    var navBtn = $('.nav-btn');
    $('.get-header-c > ul > li').each(function() {
        var item = $(this);
        var hasSubMenu = item.find('.sub-menu-list').length > 0;
    
        if (hasSubMenu && !navBtn.is(":visible")) {
            item.on('mouseenter focusin', function() {
                $('.get-header-c > ul > li > a').removeClass('active');
                item.children('a').addClass('active');
            });
    

            item.on('mouseleave focusout', function() {
                if (!item.is(':focus') && !item.find(':focus').length) {
                    item.children('a').removeClass('active');
                }
            });
        }
    });

    
    
    // swiper-home-user-say
    window.addEventListener('load', initMobileSwiperA);
    window.addEventListener('resize', initMobileSwiperA);

    if(jQuery('.all-devices').length){
        let userSaySliderAll =  new Swiper('.all-devices', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 8,
        grabCursor: true,
        breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
        },
        pagination: {
            el: '.user-say-slider .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
            navigation: {
            nextEl: '.user-say .swiper-button-next',
            prevEl: '.user-say .swiper-button-prev',
        },
    });
    }
    

});

let swiperA; 

function initMobileSwiperA() {
  if (window.innerWidth < 768 && !swiperA) {
    swiperA = new Swiper('.only-mobile', {
      slidesPerView: 'auto',
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        576: {
            slidesPerView: 2,
        },
        
},
    });
  } else if (window.innerWidth > 768 && swiperA) {
    swiperA.destroy(true, true);
    swiperA = null;
  }
}



