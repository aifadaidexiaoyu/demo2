
//头部轮播图片
$(document).ready(function(){
   $(".flexslider").flexslider({
		animation: "slide",     
		slideshowSpeed: 4000,  
		animationSpeed: 1500, 
		touch: true  
	});
   $(".flex-next").text("");
});

// 底部循环图片
$(document).ready(function(){
	$('.scroll-img').liMarquee();
});