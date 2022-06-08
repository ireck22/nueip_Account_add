function get_data() {

    console.log("sad");
    $.get("get.php", function (result) {
        // console.log(result);

        var finish = '';
        finish += "<table border=2>";
        finish += "<tr> <td>編號</td><td>帳號</td><td>姓名</td><td>性別</td><td>信箱</td><td>備註</td><td>動作</td> ";

        var r1 = result.split('!');

        r1.forEach(value => {
            value2 = value.split('-')
            finish += "<tr>";
            let id=value2[0];

            value2.forEach(row => {
                finish += "<td>" + row + "</td>"
            })

            finish+="<td>修改<button onclick=del("+id+")>刪除</button></td></td>"
            finish += "</tr>";
        });
        finish += "</table>"

        $("#main").html(finish);
        return 1;
    });

}

function setAction() {

    let account = user.account.value;
    let name = user.name.value;
    let sex = user.sex.value;
    let email = user.email.value;
    let remark = user.remark.value;

    if (!account || !name || !sex || !email || !remark) {
        alert("全部欄位要填完");
        return 0;
    }

    data = {
        "account": account,
        "name": name,
        "sex": sex,
        "email": email,
        "remark": remark
    };
    console.log(data);
    // 新增資料  backend/public/add
    $.post("add.php", { data2: data }, function (result) {
        console.log("進入");
        console.log(result);
        alert(result);
    });

}

function del(id){
    $.post("del.php", { id: id }, function (result) {
        console.log("進入");
        console.log(result);
    });
    window.location.reload();
}

$(function () {
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#opener").click(function () {
        $("#dialog").dialog("open");
    });
});


