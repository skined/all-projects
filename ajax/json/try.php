<?php
header('Content-Type:text/json;charset=utf-8');
$json = file_get_contents("city.json");
echo $json;
sleep(2);
?>


