<?php
header('Content-type:text/html;charset:utf-8');
$mobile=$_POST['mobile'];
$arr=array(
	'code'=>10000,
	'msg'=>'获取验证码短信成功！',
	'result'=>array(
		'time'=>10,
		'mobile'=>$mobile,
		'registerCode'=>0288
	)
);
echo json_encode($arr);
sleep(1);
?>