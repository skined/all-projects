<?php
    header('content-type:text/html;charset="utf-8"');
    error_reporting(0);
    // $arr1 = array('zhangsan','lisi','zhaowu');
    // echo json_encode($arr1);
    $news = array(
        array('title' => '特朗普：期待与金正恩下一次会晤', 'date' => '2018/12/20'),
        array('title' => '中国海军亚丁湾首次抓捕海盗视频曝光', 'date' => '2018/12/21'),
        array('title' => '滚装船撞上重庆万州大桥?海事部门辟谣', 'date' => '2018/12/22'),
        array('title' => '大学生遭囚禁致死 美要求朝鲜赔5亿', 'date' => '2018/12/23'),
        array('title' => '考研试题现偏差 电子科大:统一补考', 'date' => '2018/12/24'),
        array('title' => '女子在家拥抱陌生人年入38万', 'date' => '2018/12/25'),
        array('title' => '这位副厅长每次受贿后都打借条', 'date' => '2018/12/26'),
        array('title' => '长沙一男子打砸18台ATM机 警方：已抓获', 'date' => '2018/12/27'),
    );
    echo json_encode($news);