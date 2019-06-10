<?php
     header('Content-Type:text/html;charset=utf-8');
     //后端的变量  前端的接口参数
     $t = isset($_GET['t']) ? $_GET['t']:'num';
     $callback = isset($_GET['callback'])?$_GET['callback']:'fn1';

    $arr1 = array("111112","3333333","55555555","666666666");
    $arr2 = array("zzzzzz","xxxxxxx","cccccccc","vvvvvvvvv");
    if($t == 'num'){
    	$data = json_encode($arr1);
    	 // echo 'callback('.$data.')';
    }else{
    	$data = json_encode($arr2);
    	 // echo 'callback('.$data.')';
    };
    echo $callback.'('.$data.')';
    
    //echo 'fn('.$data.')'; //将数值转换成json数据存储格式
    // isset判断变量是否存在，主要是判断页面是够能提交了某个参数，确定是否处理还是给个默认值
    



