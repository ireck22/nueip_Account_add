<?php 
    require_once('conn.php');
    // $data=$_POST['data2'];

    $sql = "select * from account_info";
    // file_put_contents("t1.txt",print_r($sql,true).PHP_EOL,FILE_APPEND);
    
    try{
        $result = $connection->query($sql); // 執行SQL查詢

        $finish_result='';
        while ($row=mysqli_fetch_row($result))
        {
            // print_r($row);
            $res='';
            $len=count($row);
            // for ($i=0; $i<$len ; $i++) { 
            //     $res.=$row[$i]."-";
            // }
            foreach($row as $r2){
                $res.=$r2."-";
            }
            $res=substr($res,0,-1);
            $finish_result.=$res."!";            
        }
        $finish_result=substr($finish_result,0,-1);            

        // $r1=mysqli_fetch_array($result,MYSQLI_ASSOC);
        print_r($finish_result);
    }catch(Exception $e){
        echo $e->getMessage();
        $connection->close();
        exit();
    }
    
    $connection->close();
    // echo 1;