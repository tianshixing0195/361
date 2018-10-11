
//ajax请求
//参数
//方式：get post
//地址：url
//是否异步：true 或 false;
//参数
//回调函数

function ajax(method,url,param,isYibu,func){
	
	//1.建立请求
	let xhr= new XMLHttpRequest();
	//2.设置请求参数
	if(method.toLowerCase()=="get"){
		xhr.open("get",url+"?"+param,isYibu);
	}else if(method.toLowerCase()=="post"){
		xhr.open(method,url,isYibu);
	}
	
	//3.建立回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func && func(xhr.responseText);
		}
	}
	//4.发送请求
	if(method.toLowerCase()=="get"){
		xhr.send();
	} else if(method.toLowerCase()=="post"){
		//设置请求头
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}
}  



//ajax请求
//参数
//方式：get post
//地址：url
//是否异步：true 或 false;
//参数
//回调函数
//返回值  无
//参数用对象的方式表示


//ajaxByObj({
//	url:"getmusic.php",
//	method:"get",
//	param:"musicname=you",
//	isAsync:true,
//	func:function(){}
//});


function ajaxObj (obj) {
	//1.建立请求
	let xhr = new XMLHttpRequest();
	//2.设置请求参数
	if(obj.method.toLowerCase()=="get"){
		xhr.open(obj.method,obj.url+"?"+obj.param,obj.isYibu);
	}else{
		xhr.open(obj.method,obj.url,obj.isYibu);
	}
	//4.建立回调函数
	xhr.onreadystatechange = function(){
		if (xhr.readyState ==4 &&xhr.status ==200) {
			obj.func&&obj.func(xhr.responseText);
		}
	}
	//5.发送请求
	if (obj.method.toLowerCase()=="get") {
		xhr.send();
	}else if (obj.method.toLowerCase()=="post") {
		//设置请求头
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.param);
	}
}
 //带有默认值的ajax, 默认值为meothod:get;异步；
function ajaxByObjAndDefault(obj){	
	//默认值
	let defaultObj = {
						url:"#",
						method:"get",
						param:"",
						isAsync:true,
						func:null
			}	
	for(let key in obj){
		defaultObj[key] = obj[key];//url
	}
	
	//1、创建对象
	let xhr = new XMLHttpRequest();
	
	//2、设置请求参数
	if(defaultObj.method.toLowerCase()=="get"){
		xhr.open(defaultObj.method,defaultObj.url+"?"+defaultObj.param,defaultObj.isAsync);		
	}else{
		xhr.open(defaultObj.method,defaultObj.url,defaultObj.isAsync);		
	}
	
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func&&defaultObj.func(xhr.responseText);
		}
	}
	
	if(defaultObj.method.toLowerCase()=="get"){
		//4、发送请求
		xhr.send();
	}else if(defaultObj.method.toLowerCase()=="post"){
		//4、发送请求
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}
}




function ajaxByPromise(obj){	
	//默认值
	let defaultObj = {
						url:"#",
						method:"get",
						param:"",
						isAsync:true
			}	
	for(let key in obj){
		defaultObj[key] = obj[key];//url
	}
	
	//1、创建对象
	let xhr = new XMLHttpRequest();
	
	//2、设置请求参数
	if(defaultObj.method.toLowerCase()=="get"){
		xhr.open(defaultObj.method,defaultObj.url+"?"+defaultObj.param,defaultObj.isAsync);		
	}else{
		xhr.open(defaultObj.method,defaultObj.url,defaultObj.isAsync);		
	}
	
	//3、设置回调函数
	let p = new Promise(function(resovle,reject){
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					resovle&&resovle(xhr.responseText);
				}else{
					reject&&reject("服务器出错了！");
				}
			}
		}
	});

	if(defaultObj.method.toLowerCase()=="get"){
		//4、发送请求
		xhr.send();
	}else if(defaultObj.method.toLowerCase()=="post"){
		//4、发送请求
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}
	
	return p;
}