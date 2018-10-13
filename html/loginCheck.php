<?php
	header("Content-type:text/html;charset=utf-8");
	
	//1、接收数据
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	
	
	//2、处理（连接数据库，保存数据）
	//1)、建立连接（搭桥）
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败";
	}else{
		//2）、选择数据库（目的地）
		mysql_select_db("361db",$con);
		
		//3）、执行SQL数据（运输数据）
		$sqlstr="select * from vip where username='$username' and userpass='$userpass'";
		//echo $sqlstr;
		$result = mysql_query($sqlstr,$con);//$result是个表格
		
		//4）、关闭数据库（过河拆桥）
		mysql_close($con);

		//3、响应
		$rows = mysql_num_rows($result);
		if($rows==0){
			echo "0";
		}else{
			//echo "登录成功！";			
			//header("location:index.html");
			echo "1";
		}
	}
?>