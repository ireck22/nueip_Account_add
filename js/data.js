function get_data() {

    console.log("sad");
    $.get("backend/public/get", function (result) {
        // console.log("test ok");
        // console.log(result);
        
        var finish = ''
        result.forEach(value => {
            finish += "<span>" + value + "</span><br>"
        });
        
        $("#main").html(finish);
        return 1;
    });

}

function setAction() {

    let account = user.account.value;
    let name = user.name.value;
    let sex = user.sex.value;
    let email = user.email.value;
    let remark = user.email.value;

    // var pattern="/^[a-zA-Z0-9]+$/";
    // if(!pattern.test(account)){
    //     alert("帳號的組合是英文加數字")
    //     return 0;
    // }

    // var regExp = /^[\d|a-zA-Z]+$/;
    // if (!regExp.test(account)){
    //     alert("帳號的組合是英文加數字")
    //     return true;
    // }

    // if (!account.match(/[A-Za-z0-9]+/)) {
    //     alert("帳號的組合是英文加數字")
    //     return true;
    // }

    // if((e.shiftKey && e.keyCode == 45) ||
    //         e.which!=8 && e.which!=0 && !(
    //         (e.which>=48 && e.which<=57) ||
    //         (e.which>64 && e.which<91)  ||
    //         (e.which>=97 && e.which<=122))){
    //     return false;
    // }

    if (!account || !name || !sex || !email || !remark) {
        alert("全部欄位要填完");
        return 0;
    }

    data=[account,name,sex,email,remark];
    console.log("sad");
    // 新增資料  backend/public/add
    $.post("add.php", { data2: data }, function (result) {
        console.log("進入");
        // alert(result);
        // console.log(result);
        // $("span").html(result);
    });


}