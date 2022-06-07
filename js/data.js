function get_data(){

    console.log("sad");
    // let name = document.getElementById("name");
    
    
    let result=[
        "ss1","sss2","ssss4"]
    var finish=''
    result.forEach(value => {
        finish+="<span>"+value+"</span><br>"
    });

    console.log(finish);
    $("#main").html(finish)

}

function setAction(){
    alert(user.email.value)
    alert(user.pass.value)

}