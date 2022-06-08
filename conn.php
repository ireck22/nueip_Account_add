<?php

$server = "localhost";
$dbuser = "sa";
$dbpassword = "abc123"; # 使用者密碼
$dbname = "nueip_accound";    # 資料庫名稱

$connection = new mysqli($server, $dbuser, $dbpassword, $dbname);


# 檢查連線是否成功
if ($connection->connect_error) {
    die("連線失敗：" . $connection->connect_error);
}

// $link=mysqli_connect("localhost","sa","abc123") or die ("無法開啟Mysql資料庫連結"); 
// function add($list)
// {
    // $sql = "insert into(account,name,sex,email,remark)
    //     values({$list['account']},{$list['account']});";
// }
