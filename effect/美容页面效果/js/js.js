// JavaScript Document
$(function(){
	$(".zlxm .zlxm_cont dl:eq(1)").find("dt").addClass("hover");
	$(".zlxm .zlxm_cont dl").mouseover(function(){
		$(this).find("dt").addClass("hover").parent().siblings("dl").find("dt").removeClass("hover")
		})
	$(".rdgz span:eq(0)").addClass("on")
	$(".rdxw_cont ul:gt(0)").hide();
	$(".rdgz span").mouseover(function(){
		$(this).addClass("on").siblings("span").removeClass("on");
		var span_index=$(this).index();
		$(".rdxw_cont ul").eq(span_index).show().siblings("ul").hide();
		});
		
		//健康管理
		$(".jkgl_ri_cont:gt(0)").hide()
		$(".jkgl_list a:eq(0)").addClass("ons")
		$(".jkgl_list a").mouseover(function(){
			$(this).addClass("ons").siblings("a").removeClass("ons");
			var a_index=$(this).index();
			$(".jkgl_ri_cont").eq(a_index).show().siblings(".jkgl_ri_cont").hide();
			})
			
		//foot_close
		$(".close_img").click(function(){
			$(".close_foot").hide();
			});
		$(".fott_ri dd:eq(0)").addClass("onds");
		$(".fott_ri dd").mouseover(function(){
			$(this).addClass("onds").siblings("dd").removeClass("onds");
			})
	
	})