<?php
header('content-type:text/html;charset=utf-8');
$arr=array("我爱你","么么哒","啦啦啦","上课吧，别浪了","你真棒，纯爷们");
$index=array_rand($arr);
echo $arr[$index];
sleep(2);
?>



