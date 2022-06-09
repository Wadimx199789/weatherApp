$(function() {
	$(".slider-noDots").slick({
		speed:700,
		mobileFirst: true,
		dots:false,
		slidesToShow:1,
		slidesToScroll:1,
		pauseOnHover:false,
		respondTo:'min',
		cssEase:'linear',
		prevArrow:'<div class="prevArrow"></div>',
		nextArrow:'<div class="nextArrow"></div>', 
		arrows:false,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows : true,
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });
  
	$(".slider__container").slick({
	  autoplay: true,
	  autoplaySpeed:3000,
	  speed:700,
	  mobileFirst: true,
	  dots:true,
	  slidesToShow:1,
	  slidesToScroll:1,
	  pauseOnHover:false,
	  respondTo:'min',
	  cssEase:'linear',
	  prevArrow:'<div class="prevArrow"></div>',
	  nextArrow:'<div class="nextArrow"></div>', 
	  arrows:false,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows : true,
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});


	$('.popup-with-form').magnificPopup({
		type: 'inline',
		focus: '#name'
	 });
})
//   $(function(){
//     var timeout;
// function nextSlide(){
//   $(".Modern-Slider").slick('slickNext');
//   timeout = setTimeout(function(){
//     nextSlide();
//   },2000);
// }
// function stopAutoplay(timeout){
//     window.clearTimeout(timeout);
// }
// $('.slider__slick').on('mouseover', function(){
//     nextSlide();
// });
// $('.slider__slick').on('mouseout', function(){
//     stopAutoplay(timeout);
// });
// });