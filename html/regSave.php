<?php
	header("Content-type:text/html; charset=utf-8");
	
	$username=$_POST["userName"];
	$userpass=$_POST["userPass"];
    $userphone=$_POST["userPhone"];
    
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "链接失败";
	}
	else{
		mysql_select_db("361db",$con);
		//1)、查询
		$sqlstr="select * from vip where username='$username'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows<=0){		
			//2）、添加	
			$sqlstr="insert into vip values('$username','$userpass','$userphone')";
			$result = mysql_query($sqlstr,$con);
			if($result==1){
				echo "1";//注册成功；
			}else{
				echo "0";//注册失败
			}
		}else{
			echo "-1";//注册失败：用户名已经存在，
		}
	}
?>