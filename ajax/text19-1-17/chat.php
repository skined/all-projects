<?php
header('content-type:text/html;charset=utf-8');
$arr=array("我爱你","么么哒","啦啦啦","上课吧，别浪了","明天就放假了","考试必胜！");
$index=array_rand($arr);
echo $arr[$index];
sleep(2);
?>



