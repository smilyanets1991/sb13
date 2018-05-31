//slick-slider big
jQuery(function($){
$(document).ready(function(){
	$('.sl').slick({
  autoplay:true,
  autoplaySpeed:2000,
  cssEase:'ease-in',
  asNavFor: '.sl2',
  arrows:true,
   mobileFirst:true,
   useCss:true,
   
	});
});

}) ;

 //slick-slider small
 jQuery(function($){
$(document).ready(function(){
	$('.sl2').slick({
		useCss:true,
		 dots: true,
		 centerMode:true,
		 centerPadding:'0px',
         slidesToShow: 5,
         asNavFor: '.sl',
         focusOnSelect: true,
         arrows:false,
  responsive:[
  { breakpoint: 1100,
      settings: {
        slidesToShow: 5,
           }
  },
 { breakpoint: 960,
      settings: {
        slidesToShow: 5,
           }
  },
   { breakpoint: 800,
      settings: {
        slidesToShow: 4,
        dots:false,
           }
  },
 { breakpoint: 640,
      settings: {
        slidesToShow: 3,
        dots:false,
           }
  } ,
  { breakpoint: 480,
      settings: {
      	dots:false,
        slidesToShow: 2,
        centerMode: true,
        rtl: true,


        

        
           }
  }
  ]
  	});
});

}) ;





/*----slow scroll--*/
 jQuery(function($){
 	$(document).ready(function(){
 		$("#arrow,#vg,#pg,#cont,#head").mPageScroll2id({
 			
 			scrollSpeed:800,
 		});
 	});
 });



 /*$(function(){
  /*--------- sidebar with lines show and hide the menu  ---*/
 /* $('.buttonmenu').on("click", function(){
    if($('body').hasClass('nav_is_visible') == true){
     $('body').removeClass('nav_is_visible');
     $('.buttonmenu').removeClass('close');
     
        }
    else{
     $('body').addClass('nav_is_visible');
     $('.buttonmenu').addClass('close');
       }
   });
  
  $('body').addClass('home_is_visible');

    
 function removeClasses() {
  $(".menu ul li").each(function() {
    var custom_class = $(this).find('a').data('class');
  $('body').removeClass(custom_class);
  });
}
  
  $('.menu a').on('click',function(e){
    e.preventDefault();
    removeClasses();
    var custom_class = $(this).data('class');
    $('body').addClass(custom_class);
    $('body').removeClass('nav_is_visible');
    $('.buttonmenu').removeClass('close');
  });


});*/

/*--sidebar with dots , simple --*/
jQuery(function($){ 
$(document).ready(function(){
  $('.burger').click(function(){
    $('.sidebar').toggleClass('active');
    $('.burger').toggleClass('clicked');
    $('.sidebar').toggleClass('clicked');
  });
$('.sidebar a').click(function(){
$('.sidebar').toggleClass('active');
$('.burger').toggleClass('clicked');

});
});
});





jQuery(function($){ 
$(function() {
 $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
   $('#totop').fadeIn(100);
  } else {
   $('#totop').fadeOut(100);
}
});
   $('#totop').click(function() {
   $('body,html').animate({scrollTop:0},800);
});
});
});



