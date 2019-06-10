<?php  
 header('Content-Type:text/html;charset=utf-8');
 //应答数据
 $arr = array("我爱你","么么哒","啦啦啦","上课吧，别浪了","你真棒，纯爷们","生死看淡，不服就干！","盘他");
 //获取数组随机下标的方法 0-4
 $index = array_rand($arr);
 echo $arr[$index];
 //后台延迟两秒给前端响应
sleep(2);
?>


