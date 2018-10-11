//2、针对，内部和外部的样式如何获取？
//  1)、针对IE，用currentStyle
//  2)、针对其它主流浏览器，用window.getComputedStyle(dom对象)获取到了所有的样式属性

//功能：获取某个DOM元素的样式属性

function getStyle(domObj,attr){
	  
	    if(domObj.currentStyle){
			 return domObj.currentStyle[attr];
			
		}else{
			
			return window.getComputedStyle(domObj)[attr];
		}
	
}



//功能：运动：动态改变DOM的样式属性
//     让一个物体，按照指定时间，指定的方向从某个地方运动到某个地方。
//参数：
// DOM元素
// 样式属性：attr
// 初始的值
// 结束的值
// 步长
// 方向
// 时间间隔
//返回值：无

function moveObj(domObj,attr,startValue,endValue,step,direction,spaceTime){
	  
	    let currValue = startValue;
		let Timer = setInterval(function(){
			//改变数据；
			currValue = currValue+ direction*step;
			// 判断边界
			if(Math.abs(currValue-endValue)<=step){
				currValue = endValue;
				clearInterval(Timer);
				
			}
			//改变外观
			domObj.style[attr] = currValue+"px";
			
		},spaceTime);
	
	
}

//从外部获取初始值；
function moveObj02(domObj,attr,endValue,step,direction,spaceTime){
	  let currValue = parseFloat(getStyle(domObj,attr));
	  let Timer = setInterval(function(){
		     //改变数据；
			 currValue = currValue + direction*step;
			 //判断边界
			 if(Math.abs(currValue-endValue)<=step){
				  currValue = endValue;
                  clearInterval(Timer);				  
	
			 }
			 //改变外观
			 domObj.style[attr] = currValue+"px";
		  
	  },spaceTime);
	
}


//功能：运动：动态改变DOM的样式属性
//     让一个物体，按照指定时间，指定的方向从某个地方运动到某个地方。
//参数：
// DOM元素
// 样式属性：attr
// 结束的值
// 时长
//返回值：无
function moveObj03(domObj,attr,endValue,timeLong){
	
	let currValue = parseFloat(getStyle(domObj,attr));//parseFloat(domObj.style[attr]);
	let direction = endValue>currValue?1:-1;
	let timeSpace = 16;
	let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(Math.abs(currValue-endValue)<=step){
			currValue = endValue;
			clearInterval(myTimer);
		}		
		//3、改变外观
		let temp = currValue;
		if(attr!="opacity"){
			temp = temp+"px"
			
		}
		domObj.style[attr] = temp;		
	},timeSpace);
}
//淡入
function fadeIn(domObj,timeLong){
	  moveObj03(domObj,"opacity",1,timeLong)
	
}
//淡出
function fadeOut(domObj,timeLong){
	  moveObj03(domObj,"opacity",0,timeLong)
	
}
//淡入淡出

function fadeInOut(domObjIn,domObjOut,timeLong){
	    let currValue = 0;
		let endValue = 1;
		let direction = 1;
		let timeSpace = 16;
        let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	
	    let myTimer = setInterval(function(){
	    	//1、改变数据
	    	currValue = currValue+direction*step;
	    	//2、处理边界
	    	if(Math.abs(currValue-endValue)<=step){
	    		currValue = endValue;
	    		clearInterval(myTimer);
	    	}		
	    	//3、改变外观
	    	domObjIn.style.opacity = currValue;		
	    	domObjOut.style.opacity = 1-currValue;		
	    	
	    },timeSpace);	
}



//多属性运动:
//单属性运动，每次只改一个属性的值，多属性每次需要改多个属性的值（用循环）
/*
animate(
		$("box")
		,
		{
			"width":500,
			"height":400,
			"left":500
		}
		,
		2000);
		
*/		


function animate(domObj,attrObj,timeLong){
	 
	let currValueObj ={};
	//currValue = parseFloat(getStyle(domObj,attr));//parseFloat(domObj.style[attr]);
	for(let key in attrObj){
		currValueObj[key]=parseFloat(getStyle(domObj,key));
		
	}
	let directionObj = {};
	// direction = endValue>currValue?1:-1;
	for(let key in attrObj){
		directionObj[key] = attrObj[key]>currValueObj[key]?1:-1;
		
	}
	let timeSpace = 16;
	
	let stepObj = {};
	//let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	 for(let key in attrObj){
		 
		stepObj[key]= Math.abs(attrObj[key]-currValueObj[key])/timeLong*timeSpace;
		 
	 }
	let Timer = setInterval(function(){
		//1、改变数据
		//currValue = currValue+direction*step;
		for(let key in currValueObj){
			currValueObj[key]=currValueObj[key]+directionObj[key]*stepObj[key];
			
		}
		
		//2、处理边界
		   //if(Math.abs(currValue-endValue)<=step){
			//currValue = endValue;
			//clearInterval(myTimer);
		     //}	
         let isOver = false; //表示是否到边界
			for(let key in currValueObj){
				if(Math.abs(currValueObj[key]-attrObj[key])<=stepObj[key]){
			       currValueObj[key] = attrObj[key];
				   isOver = true;
				
			}
		}	
		if(isOver){
			
			clearInterval(Timer);
		}
		//3、改变外观
		//let temp = currValue;
		//if(attr!="opacity"){
			//temp = temp+"px";
		//}
		//domObj.style[attr] = temp;
       for(let key in currValueObj)	{
		   let temp =  currValueObj[key];
			   if(key!="opacity"){
				   temp = temp+"px";
			} 
			domObj.style[key] = temp;
		 }			
	},timeSpace);
}











