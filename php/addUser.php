<?php
	
	header("content-type","text/html;charset=utf-8");
	
	//一、接收前端传来的数据
	$userId = $_POST["userId"];
	$userPass = $_POST["userPass"];
	$userPhone = $_POST["userPhone"];
	
	//二、保存数据
	//1、建立连接并选择数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		//die("连接失败".mysql_error());
		echo "0";	
	}	
	mysql_select_db("361db",$con);
	
	//2、执行SQL语句
	$sqlStr = "insert into vip(vipName,userpass,userphone)
              values('".$userId."','".$userPass."','".$userPhone."')";
	//echo $sqlStr;
	
	mysql_query($sqlStr,$con);
	
	//3、关闭数据库
	mysql_close($con);
	
	//三、给前端响应
	//echo "1";

?>