//

//参数：验证的数据类型
//要验证的字符串

function CheckAll(type,value){ //type是你要验证的类型（自定），value验证该值

	    switch(type) {
			 case 'post':
			 var reg = /^[1-9][0-9]{5}$/;   //六位数字，第一位不能为0/
			 break;

			 case 'phone':
             var reg= /^1[3-9]\d{9}$/;   //以1开头第二位不能是（0,1,2）后面9位都是数字
             break;
			 
			 case 'card':  //身份证号前六位任意数字+四位年份+2位月份+2位日期+3位+最后一位X或数字
			 var reg=/^\d{10}(0[1-9]|1[0-2])[0-2]\d{4}(X|\d)$/;
             break;

			 case 'username':  //账户名只能使用数字字母下划线，
		                       //且数字不能开头，长度在6-15之间
			 var reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
			  break;
			  case 'password':   //（必须包含字母、数字、特殊字符，长度6个字符以上）
			  var reg = /\w{6,16}/; //字母
			  break;
			  // 出生年月 2000-2-30;
			  case 'birthday':
			  var reg = /^\d{4}(((\.\d{2}){2})|((\-\d{2}){2})|((\/\d{2}){2}))$/; //特殊字符
			  break;
			  
			  //邮箱：以数字字母下划线开头若干个数字字母下划线开头@数字字母下划线开头.com或者.cn或者.net等结尾
			  case 'mail':
			  var reg=/^\w+@\w+\.(com|cn|net)$/;
			  break;
			  
			  //ip地址：3个点隔开4个0-255的数
			  case 'ip':
			  var reg=/^((\d|\d{2}|1\d{2}|(2[0-4]\d)|(25[0-5]))\.){3}(\d|\d{2}|1\d{2}|(2[0-4]\d)|(25[0-5]))$/
			  break;
		
			 
			 default:;
		
		}
		
	return reg.test(value);
}



