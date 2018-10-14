
//项目中有哪些类：轮播图
function Slider($box,width,height,imgs,liWidth,liHeight,liImgs){			
				
	this.$box = $box;//轮播图的容器
	this.$imgs = null;//这是个jQuery对象，存储所有的img标签,
	this.$lis = null;//这是个jQuery对象,存储所有的li标签,
	this.width =width;
	this.height = height;
	this.imgs = imgs;//图片数组
	this.liWidth = liWidth;
	this.liHeight = liHeight;
	//this.doudouHighColor = doudouHighColor;
	this.liBgImgs = liImgs; //下面豆豆的图片
	this.currOrd = 0;
	this.createUI();
	this.addEvent();
	this.changeImg();
}

Slider.prototype.createUI= function(){
	this.$box.css({
		width:this.width,
		height:this.height
	});
	
	//1、创建所有的图片
	for(let i=0;i<this.imgs.length;i++){
		let $img = $("<img/>");
		$img.css({
			//  "position":"absolute",
			"backgroundImage":"url("+this.imgs[i]+")",
			"background-position":"center",
			//  "top":"0px",
			width:this.width+"px",
			height:this.height+"px",
			"background-size":"cover"
		    
		});
		
		this.$box.append($img);
		//把创建的图片标签放入数组中
		if(this.$imgs==null){
			this.$imgs=$img;
		}else{
			this.$imgs = this.$imgs.add($img);
			//console.log(this.$imgs);
		}
	}
		//2、创建所有的豆豆
	//1)、豆豆的容器
	let $ul = $("<ul></ul>");
	$ul.css({
		width:this.width+"px",
		height:"50px",
		"background":"#f00",
		"list-style":"none",
		display:"none"
	});
	this.$box.append($ul);
	
	//2)、豆豆
	for(let i=0;i<this.liBgImgs.length;i++){
		let $li = $("<li></li>");
		$li.css({
			float:"left",
			"margin":"0 10px",
			width:this.liWidth+"px",
			height:this.liHeight+"px",
			"backgroundImage":"url("+this.liBgImgs[i]+")",
			"background-position":"center",
			"background-size":"cover"
			
		});

		$ul.append($li);
		this.$lis==null?this.$lis=$li:this.$lis=this.$lis.add($li);
	}
}

Slider.prototype.showImg = function(inOrd,outOrd){
	this.$imgs.eq(inOrd).animate({
		opacity:1
	},500);
	this.$imgs.eq(outOrd).animate({
		opacity:0
	},500);
}
//4、跳转到指定的图片
Slider.prototype.goImg=function(transOrd){//1
	//1）、数据：把transOrd赋给当前图片序号
	this.currOrd = transOrd;
    
}

Slider.prototype.addEvent = function(){	
	let obj = this;//this是Slider的对象
	
	this.$lis.mouseenter(function(){
		obj.goImg($(this).index());
	});
	
}