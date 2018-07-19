$(document).foundation();

// 1. Loading
// --------------------

$(function() {
if (sessionStorage.getItem('set') === 'set') {
  $('.loader').hide();
} else {
  $('.loader').show();
  setTimeout(function(){
        $('.loader').addClass('loaded');
    }, 1500);  
  sessionStorage.setItem('set', 'set');
}
});

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});


// 3. Lightgallery
// ---------------

$('#video').lightGallery({
    counter: false,
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
    },
    vimeoPlayerParams: {
        byline : 0,
        portrait : 0,
        color : 'FF8300'     
    }
}); 


$('.home__narrative').hover(function() {
     $('.home__narrative').addClass('home__narrative--active');
     $('.home__commercial').addClass('home__commercial--active');
     $('.navigation').addClass('navigation--active');
}, function() {
     $('.home__narrative').removeClass('home__narrative--active');
     $('.home__commercial').removeClass('home__commercial--active')
     $('.navigation').removeClass('navigation--active');
});

$('.home__commercial').hover(function() {
     $('.home__narrative').removeClass('home__narrative--active');
     $('.home__commercial').removeClass('home__commercial--active')
     $('.navigation').removeClass('navigation--active');
}, function() {
       $('.home__narrative').addClass('home__narrative--active');
     $('.home__commercial').addClass('home__commercial--active');
     $('.navigation').addClass('navigation--active');
});



