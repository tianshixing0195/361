function tanchukuang () {
 	// 	 // 加入透明背景
//		var body = document.body;
//		var backgroundDiv = document.createElement("div");
//		backgroundDiv.style.cssText = "left:0;top:0;position:fixed;background:#ddd;opacity:0.8;width:100%;height:100%";
//		body.appendChild(backgroundDiv);
//		// 加入居中弹出框
//		var newDiv = document.createElement("div");
//		newDiv.style.cssText = "position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;width:400px;height:200px;background:white;";
//		backgroundDiv.appendChild(newDiv);
//		// 丰富弹出框内容
 	
 	   //点击收藏的时候显示登录页面的半透明弹框
 	   $("#collect").click(function () {
 	   	    //加入透明背景
 	     let $bodyDiv = $("<div></div>");
 	     	$bodyDiv.css({
 	     		"left":"0",
 	     		"top":"0",
 	     		"position":"fixed",
 	     		"background":"#ddd",
 	     		"opacity":"0.8",
 	     		"width":"100%",
 	     		"height":"100%"
 	     	});
 	     	$("body").append($bodyDiv);
 	     
 	     //弹出框
 	     
 	   	   $bodyDiv.load("tanchulogin.html",function(){
 	   	   	    
 	   	   });
 	   	   
// 	   	   //关闭按钮
// 	   	  
// 	   	   $pBtn.css({
// 	   	   	    "position":"absolute",
// 	   	   	    "top":"0",
// 	   	   	    "left":0,
// 	   	   	    width:"100%",
// 	   	   	    height:"23px",
// 	   	   	   // "background":"#ccc",
// 	   	   	    float:"right"
// 	   	   });
// 	   	   $confirmBox.append($pBtn);
// 	   	   $close = $("<img />");
// 	   	    $close.css({
// 	   	    	"float":"right"
// 	   	    })
// 	   	   $close.attr("src","../img/close.png");
// 	   	   $pBtn.append($close);
// 	   	   
// 	   	   //点击close按钮弹出框关闭
// 	   	   $close.click(function(){
// 	   	   	   $confirmBox.css({
// 	   	   	   	    "display":"none",
// 	   	   	   });
// 	   	   	   $bodyDiv.css({
// 	   	   	   	   "display":"none",
// 	   	   	   });
//             $bodyDiv.empty();
// 	   	   	   
   	   })
 	 


 }