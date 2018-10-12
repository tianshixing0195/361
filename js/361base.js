function addEvent(){
	
		//购物菜单显示和隐藏
		//console.log($("header .navbtm .shop"));
		$("header .navbtm .shop").mouseenter(function(){
			$("#shoplist").slideDown("slow");
		});
		$("#shoplist").mouseleave(function(){
			$("#shoplist").slideUp("slow");
		});
		//购物车提示内容的显示和隐藏
		$("header .navbtm .shopcar").mouseenter(function(){
			$(".shopbox").slideDown("fast");
		});
		$(".shopbox").mouseleave(function(){
			$(".shopbox").slideUp("fast");
		});
		//鼠标移上购物车里的按钮变色
		$("#btnGo").mouseenter(function(){
			$("#btnGo").css({background:"#fa0"});
		});
	    $("#btnGo").mouseleave(function(){
			$("#btnGo").css({background:"#f60"});
		});
		//鼠标移到放大镜上搜索框显示
		$(".searchul").mouseenter(function(){
			$(".search").show("fast").delay(20).animate({
				width:"230px"
			});
		});
	   
		//页面滚动 顶部悬浮$(window).scroll( function() { /* ...do something... */ } );
		 let minHeight =50;
		 $(window).scroll( function() {
		 	let s=$(window).scrollTop();
		 	
		 	//console.log(s);
		 	if (s>=minHeight) {
		 		$(".nav-top").hide(100);
			 	$(".navbtm ").css({
			 		position:"fixed",
			 		top:0,
			 		left:0
			 	});
			 	$(".navbtm h1").css({
			 		height:"36px",
			 		width:"60px",
			 		top:10,
			 		left:20
			 	},);
		    }else{
		    	$(".nav-top").show(100);
		    	$(".navbtm ").css({
			 		position:"relative"
			 	});
			 	$(".navbtm h1").css({
			 		height:"52px",
			 		width:"86px",
			 		top:-10,
			 		left:10
			 	});
		    }
		 	
		 	//回到顶部按钮显示
		 	if (s>=500) {
		 		$("#toTop").show();
		 	}else{
		 		$("#toTop").hide();
		 	}
		 
		});
		
		 //鼠标移到微信图标上二维码显示
		$("footer .foot_nav .wechat").mouseenter(function(){
			$("#erweima").show("slow");
		});
		$("footer .foot_nav .wechat").mouseleave(function(){
			$("#erweima").hide("slow");
		});
		
		//点击toTop,到达顶部
		$("#toTop").click(function(){
			$(window).animate({
				scrollTop:0
			},500);
			
		})
}
