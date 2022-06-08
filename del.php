<?php 
    require_once('conn.php');
    $id=$_POST['id'];
    // file_put_contents("t1.txt",print_r($data,true).PHP_EOL,FILE_APPEND);

    // $sql = "insert into test"; //在test資料表中選擇所有欄位
    $sql = "delete from users where id=$id;";
    // file_put_contents("t1.txt",print_r($sql,true).PHP_EOL,FILE_APPEND);
    
    try{
        $result = $connection->query($sql); // 執行SQL查詢
    }catch(Exception $e){
        echo $e->getMessage();
        $connection->close();
        exit();
    }
    
    $connection->close();

    echo 1;