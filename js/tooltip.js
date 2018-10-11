let tooltipSinglton = (function(){
	class Tooltip{
		constructor(obj){
			this.domObj=null;
			this.initData(obj);
		}
		
		initData(obj){
			let defaultObj={
				boxDom:null,
				width:200,
				height:50,
				bgColor:"#ccc",
				border:"1px solid black",
				borderRadius:10,
				fontSize:12,
				fontColor:"#f60",
				left:0,
				top:0,
				title:"暂无提示"
			};
			
			for(let key in defaultObj){
				obj[key]&&(defaultObj[key]=obj[key]);
			}
					
			for(let key in defaultObj){
				this[key]=defaultObj[key];
			}	
		}
		
		createUI(){
			this.boxDom.style.position="relative";
			
			this.domObj = document.createElement("div");
			this.domObj.style.cssText = "position:absolute;";
		}
		
		updateUI(){
			//this.domObj.style.width = this.width+"px";
			
			//this.domObj.style.height = this.height+"px";
			//this.domObj.style.lineHeight = this.height+"px";
			this.domObj.style.backgroundColor = this.bgColor;
			this.domObj.style.border = this.border;
			this.domObj.style.borderRadius = this.borderRadius+"px";
			this.domObj.style.fontSize = this.fontSize+"px";
			this.domObj.style.color = this.fontColor;
			this.domObj.innerHTML = this.title;
			
			this.boxDom.appendChild(this.domObj);
		}
		
		moveFunc(event){
			let evt = event || window.event;
			//1、数据
			instance.left = evt.pageX- instance.boxDom.offsetLeft;
			instance.top = evt.pageY-instance.boxDom.offsetTop+20;
			//2、边界
			
			//3、外观
			instance.domObj.style.left = instance.left+"px";
			instance.domObj.style.top = instance.top+"px";
		}
		
		mouseleaveFunc(){
			this.domObj.style.display="none";	
		}
		
		addEvent(){
			this.boxDom.removeEventListener("mousemove",this.moveFunc,false);
			this.boxDom.addEventListener("mousemove",this.moveFunc,false);
			this.boxDom.removeEventListener("mouseleave",this.mouseleaveFunc,false);
			this.boxDom.addEventListener("mouseleave",this.mouseleaveFunc,false);
		}
	}
	
	var instance;
	
	return {
		getInstance:function(obj){
			if(!instance){
				instance = new Tooltip(obj);
				instance.createUI();
				instance.updateUI();
				instance.addEvent();
			}else{
				instance.initData(obj);
				instance.updateUI();
				instance.addEvent();
			}
			return instance;
		}
	}
})();