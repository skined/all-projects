<?php
	header('Content-Type:text/xml;charset=utf-8');
	$xml = file_get_contents("example.xml");   //通过file_get_contents（文件名称）来获取数据
	echo $xml;//直接把数据输出出去
?>
