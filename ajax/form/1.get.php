<?php
header('content-type:text/html;charset="utf-8');
error_reporting(0);
$username=$_GET['username'];
$age=$_GET['age'];
// 后端输出方式
echo "我的名字是：{$username},年龄:{$age}";
