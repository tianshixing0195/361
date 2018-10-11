//功能：求两个日期对象的时间差（天数差）
//参数：两个日期对象
//返回值：天数差值

/*24小时为一天*/
function diffDate(d1,d2){
	var diff = d1.getTime()-d2.getTime();
	return parseInt(diff/(24*3600*1000));
}


/*自然天*/
/*
function diffDate02(d1,d2){
	var diff = (d1.getTime()-d2.getTime())/(24*3600*1000);
	var num = parseInt(diff);
	
	//两个日不一样的情况下
	//两个时间相差不够24小时  +1
	//两个时间相差超过24小时  不用动。
	
	num +1  -1
	2018   8  29   10:08:10   
	2018   8  28   10:12:10
}
*/


//功能：输出自己的日期格式：
//参数：日期对象，分隔符（- ，/），如果不传入分隔符，那么就是汉字分割
//返回值：字符串，如：2018-09-01  2018/09/01  2018,09,01

function dateToString(d,separator){
	var str="";
	if(separator==undefined){
		str+=d.getFullYear()+"年";
		str+=(d.getMonth()+1)+"月";
		str+=d.getDate()+"日";
	}else{
		str+=d.getFullYear()+separator;
		str+=(d.getMonth()+1)+separator;
		str+=d.getDate();	
	}
	return str;
}


//功能：输出自己的日期格式：
//参数：日期对象，分隔符（- ，/），如果不传入分隔符，那么就是汉字分割
//返回值：字符串，如：2018-09-01  2018/09/01  2018,09,01

function datetimeToString(d,separator){
	var str="";
	if(separator==undefined){
		str+=d.getFullYear()+"年";
		str+=(d.getMonth()+1)+"月";
		str+=d.getDate()+"日";
	}else{
		str+=d.getFullYear()+separator;
		str+=(d.getMonth()+1)+separator;
		str+=d.getDate();	
	}
	str+=d.getHours()+":";
	str+=d.getMinutes()+":";
	str+=d.getSeconds()+"  ";
	return str;
}


//计算两个日期的月份差
//参数：日期对象1，日前对象2
//返回值：月份的差值
function diffMonth(d1,d2){
	//分析：
	//1、年份相同，月份相减就行了。
	//2、年份不同，年份相减*12 + 月份相减
	var year1 = d1.getFullYear();
	var year2 = d2.getFullYear();
	var month1 = d1.getMonth();
	var month2 = d2.getMonth();
	
	return (year1-year2)*12+(month1-month2);
	
}
/*
2019   8
2018   7


-1*12+1；  -11
-1*12-1；  -13

1*12+1

*/


//功能：输入数字，显示汉字的星期
//参数:（已知条件）：数字
//返回值：（结果）：汉字的星期表示
function numToWeek(num){
	//2、判断
	var str="";
	switch(num){
		case 0:str="星期天";break;
		case 1:str="星期一";break;
		case 2:str="星期二";break;
		case 3:str="星期三";break;
		case 4:str="星期四";break;
		case 5:str="星期五";break;
		case 6:str="星期六";break;
		default:str="您又胡输入呢";break;
	}
	return str;
}



