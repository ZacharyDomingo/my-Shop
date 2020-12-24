
let index = 0;
const totalFeaturedItems = $(".featured-items").length;


$(document).ready(function(){
	//nav toggle
	$(".nav-toggle").click(function(){
		$(".header .nav").slideToggle()
	})
	$(".header .nav").click(function(){
		if($(window).width() < 768){
			$(".header .nav").slideToggle();
		}
	})

	//fixed header
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$(".header").addClass("fixed");
		}else{
			$(".header").removeClass("fixed");
		}
	})

	// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


	//set light img max height
	const wHeight = $(window).height();
	$(".light-box-img").css("max-height", wHeight+"px");


	//lightbox
	$(".featured-items-inner").click(function(){
		index=$(this).parent(".featured-items").index();
		$(".lightbox").addClass("open");
		lightboxSlideShow();
	})
	$(".lightbox .prev").click(function(){
		if(index == 0){
			index = totalFeaturedItems-1;
		}else{
			index--;
		}
		lightboxSlideShow();
	})
	$(".lightbox .next").click(function(){
		if(index== totalFeaturedItems-1){
			index=0;
		}else{
			index++;
		}
		lightboxSlideShow();
	})

	//close lightbox
	$(".lightbox-close").click(function () {
		$(".lightbox").removeClass("open");
	})
	$(".lightbox").click(function () {
		if($(event.target).hasClass("lightbox")){
			$(this).removeClass("open");
		}
		
	})



})

function lightboxSlideShow(){
	const imgSrc = $(".featured-items").eq(index).find("img").attr("data-large");
	const category = $(".featured-items").eq(index).find("h4").html();
	$(".lightbox-img").attr("src",imgSrc);
	$(".lightbox-category").html(category)
	$(".lightbox-counter").html(totalFeaturedItems +"/"+ (index+1));
}


