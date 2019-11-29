$(function(){
    //sticky menu
     var menuDis = $(".header").offset().top;
     
     $(window).scroll(function(){
        var scrollValue = $(this).scrollTop();
         
         if(scrollValue >= menuDis){
             $(".header").addClass("position-fixed");
             $(".banner").addClass("bannerMargin");
         }else{
             $(".header").removeClass("position-fixed");
             $(".banner").removeClass("bannerMargin");  
         }
     });
 });

 
 $(function(){
    //wow jquery plugins
    new WOW().init();
});


//nav small device
$(document).ready(function() {
    $('.header.mobile .navbar-toggler').click(function() {
      $('.header.mobile .sidebar').toggleClass('active');
      $('.header.mobile  span').toggleClass('active');
      $('.header.mobile .navbar-toggler ').toggleClass('toggle');
    })
  });
  
 


  // Init slick slider + animation
$('.banner-slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    pauseOnHover:false,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
  }).slickAnimation();
