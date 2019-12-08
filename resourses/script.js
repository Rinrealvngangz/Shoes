$(document).ready(()=>{
  // Lib slick - slider img
    $('.multiple-items').slick({
      infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots:true,
        arrows:true,
        nextArrow:$('.next'),
        prevArrow:$('.prev')
     
      });
      $('.multiple-news').slick({
        infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed:300,
          fade:true,
          cssEase: 'linear',
         arrows:false
         
       
        });
  $('.search').click(()=>{
    var show=$('input');
      show.slideToggle(200);
       
  });

    
    // slideToggle nav-inner
    
   
    const showWomen=$('.headerNav-inner');
    const showMen=$('.headerNav-inner-men');
    const showproduct=$('.headerNav-inner-products');

    $('.main-nav .show-women').hover(()=>{
      showWomen.slideDown();
     if( showWomen.slideDown()){
          showMen.slideUp(200);
          showproduct.slideUp(200);
     } 
    });

    $('header').hover(()=>{
      showMen.slideUp(200);
     showWomen.slideUp(200);
     showproduct.slideUp(200);
      }); 

    $('.show-men').hover(()=>{
      showMen.slideDown();
      if(showMen.slideDown()){
        showWomen.slideUp(200);
        showproduct.slideUp(200);
   } ;
    }) 
    
    $('.show-products').hover(()=>{
      showproduct.slideDown();
      if(showproduct.slideDown()){
        showMen.slideUp(200);
        showWomen.slideUp(200);
   } ;
    })   
    
    $('.show-news').hover(()=>{
      showMen.slideUp(200);
     showWomen.slideUp(200);
     showproduct.slideUp(200);
      });

      $('.show-history').hover(()=>{
        showMen.slideUp(200);
       showWomen.slideUp(200);
       showproduct.slideUp(200);
        }); 
 
        // Add Class sticky if sroll down '.list-img'        
 $('.list-img').waypoint(direction=>{
   
     if(direction =="down"){
      $('nav').addClass('sticky');
     }
     else{
      $('nav').removeClass('sticky');
     }
 },{
   offset:"100px;"
 }
 
 );
 // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

//Add Animation 
 $('.js--wp-1').waypoint(direction=>{
          $('.js--wp-1').addClass('animated fadeInUp')
  },{
    offset:'70%;'
  });

  
 $('.js--wp-2').waypoint(direction=>{
  $('.js--wp-2').addClass('animated fadeIn')
},{
offset:'50%;'
});

 
$('.js--wp-3').waypoint(direction=>{
  $('.js--wp-3').addClass('animated fadeInLeft')
},{
offset:'50%;'
});
 

$('.js--wp-4').waypoint(direction=>{
  $('.js--wp-4').addClass('animated fadeInUp')
},{
offset:'50%;'
});
 
});


    
