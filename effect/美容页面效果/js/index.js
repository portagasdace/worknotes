/**
@Author: yu_Wj
@Description：首页 js文件
*/

//window.onload = function(){ 
//	if(0 == $(window).scrollTop()){
//		$("#header_1,#dowebok").css("opacity","1");
//		$("#dowebok").css("margin-top","0");
//	}
//	$(window).scroll(function(){
//		if(0 < $(window).scrollTop()){
//			$("#header_1,#dowebok").css("opacity","1");
//			$("#dowebok").css("margin-top","0");
//		}
//		if(150 < $(window).scrollTop()){
//			$("#brand aside,#brand article").css("opacity","1");
//			$("#brand aside").css("margin-left","0");
//			$("#brand article").css("margin-right","0");
//		}
//		if(580 < $(window).scrollTop()){
//			$("#hotClass .title_1,#hotClassBg").css("opacity","1");
//			$("#hotClassBg").css("margin-top","40px");
//		}
//		if(1400 < $(window).scrollTop()){
//			$("#advantage").css("opacity","1");
//			$("#advantage").css("margin-top","40px");
//		}
//		if(2000 < $(window).scrollTop()){
//			$("#team .title_1,#team .container").css("opacity","1");
//			$("#team .container").css("margin-top","0");
//		}
//		if(2400 < $(window).scrollTop()){
//			$("#join").css("opacity","1");
//			$("#join").css("margin-top","0");
//		}
//		if(3300 < $(window).scrollTop()){
//			$("#franchise").css("opacity","1");
//			$("#franchise").css("margin-bottom","0");
//		}
//		if(3800 < $(window).scrollTop()){
//			$("#news").css("opacity","1");
//			$("#news").css("margin-top","60px");
//		}
//		if(4300 < $(window).scrollTop()){
//			$("#footer").css("opacity","1");
//		}
//	});
//}

/*品牌介绍、公司介绍*/
$(document).ready(function() {
	$(".brand article section:last-child").css("display","none");
	$(".tapList li").hover(function(){
		$(this).addClass("normal_tap").siblings().removeClass();
		$(".brand article section").hide().eq($(".tapList li").index(this)).show(); 
	});
});

/*banner*/
$(function(){
	$('#dowebok').pogoSlider({
		slideTransition: 'fade'
	});
});

/*我们的优势*/
$(document).ready(function() {
	$(".advantage ul li").hover(function(){
		$("#dowebokAdvantage.pogoSlider a").hide().eq($(".advantage ul li").index(this)).show(); 
	});
});
//$(function(){
//	$('#dowebokAdvantage').pogoSlider({
//		slideTransition: 'fade'
//	});
//});

/*皮肤管理加盟店*/
$(function(){
	$('#dowebokFranchise').pogoSlider({
		slideTransition: 'fade'
	});
});

/*合作加盟*/
var x,n=0,rotINT
function rotateDIV(){
	x=document.getElementById("rotate1")
	clearInterval(rotINT)
	rotINT=setInterval("startRotate()",0.5)
}
function startRotate(){
	n=n+1
	x.style.transform="rotate(" + n + "deg)"
	x.style.webkitTransform="rotate(" + n + "deg)"
	x.style.OTransform="rotate(" + n + "deg)"
	x.style.MozTransform="rotate(" + n + "deg)"
	if (n==90){
		clearInterval(rotINT)
		if (n==90){n=0}
	}
}

/*新闻*/
$(document).ready(function(){
	$(".news article aside a").each(function(){
		var maxwidth=15;
		if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+"...");
		}
	});
});