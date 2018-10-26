// $(document).on('turbolinks:load', function() {

// 1. Foundation
// --------------------

$(document).foundation();

// 2. Animate on Scroll
// --------------------

AOS.init({ 
 offset: 64,
 easing: 'ease-in-out-quart', 
 duration: 600
 });   

window.addEventListener('load', AOS.refresh);


// });