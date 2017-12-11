function shownav()
{
	if($('.footer-nav').is(':visible')){
			$('.footer-nav').hide();
		}else{
			$('.footer-nav').show();
		}
}

$(function () {
  
	$('.banner,.idoc-con').flexslider({
		animation: "slide",
		slideshowSpeed: 7000,
		directionNav: false, 
	});
	$('.btn-more').click(
		function () {	     
			$('.lazy-list').slideDown();
			$(this).hide();	
			var img=$('.lazy-list img');	
            for (var i=0;i<img.length;i++)
            {
                var url = $(img).attr("data-src");
   				$(img).attr("src", url);
            }	
					
	  	}
	);
	$(".tit01-refresh").toggle(
	  function () {
		  $(".question-con01").hide();
		  $(".question-con02").slideDown();
	  },
	  function () {
	      $(".question-con02").hide();
		  $(".question-con01").slideDown();
	  }
	);
	

});