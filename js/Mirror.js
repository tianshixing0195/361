
    function mirror(
  	             $box,width,height,bgImg,mirrorWidth,mirrorHeight,
  	             opacity,multiple,bgColor){
	
	this.$box = $box;//放大镜所在的容器
	this.width =width;
	this.height = height;
	this.bgImg = bgImg;
	this.mirrorWidth =mirrorWidth;
	this.mirrorHeight = mirrorHeight;
	this.opacity = opacity;
	this.multiple = multiple;
	this.bgColor = bgColor;
	
	this.createUI();
	this.scale();
	
}

    mirror.prototype.createUI= function(){
	    
	    
	         //1、放大镜的dom
			$mirrorDom = $("<div></div>");
			$mirrorDom.css({
				"position": "absolute",
				"left":"0px",
				"top":"0px",
				"width":this.mirrorWidth+"px",
				"height":this.mirrorHeight+"px",
				"opacity":this.opacity,
				"backgroundColor":this.bgColor,
				//"display":"block"
			});
			this.$box.append($mirrorDom);
			//2、放大效果的盒子
			$showDom = $("<div></div>");
			$showDom.css({
				"position": "absolute",
				"left":this.width+10+"px",
				"top":"0px",
				"z-index":10,
				//"background-color":"yellow",
				"border":"1px solid black",
				"width":this.mirrorWidth*this.multiple +"px",
				"height":this.mirrorHeight*this.multiple+"px",
				"background-image":this.bgImg,
				"background-size":this.width*this.multiple+"px "+this.height*this.multiple+"px",
				"background-position":"0px 0px",
				//"display":"block"
			});
			this.$box.append($showDom);
	
}
    
    mirror.prototype.scale= function(){

			
			 var obj = this;
		     this.$box.mouseenter(function () {
		     	
		     	$mirrorDom.css({
					   "display":"block"
				    });
					$showDom.css({
	                    "display":"block",  
					});
			     	
		     });
		     
		     this.$box.mouseleave(function (){

		     	$mirrorDom.css({
					"display":"none",
				});
				$showDom.css({
                    "display":"none",  
				});
		     });
		     
		     this.$box.mousemove(function (e){
		     	 //获取数据
		     	 //1、数据（放大镜的left和top）
		     	 let offset = $(this).offset();
		     	
		     	 
		     	let left1 = e.pageX-offset.left-parseFloat($mirrorDom.css("width"))/2;
				let top1 = e.pageY-offset.top-parseFloat($mirrorDom.css("height"))/2;
				//console.log(offset.left);
				//console.log(left1);
				//判断边界
				if(left1<0){
					left1=0;
				}else if(left1>$(this).width()-parseFloat($mirrorDom.css("width"))){
					left1 = $(this).width()-parseFloat($mirrorDom.css("width"));
				}
				
				if(top1<0){
					top1=0;
				}else if(top1>$(this).height()-parseFloat($mirrorDom.css("height"))){
					top1=$(this).height()-parseFloat($mirrorDom.css("height"));
				}
				//改变样式
				$mirrorDom.css({
					"left":left1+"px",
					"top":top1+"px"
				});
				$showDom.css({
					"background-position":(-1*obj.multiple*left1)+"px "+(-1*obj.multiple*top1)+"px"
				})
				
		    });
				 
				
				
				
}
		
 
	
	