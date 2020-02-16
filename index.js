function validate(){
    var title = document.getElementById('title');
    var start = document.getElementById('start');
    var end = document.getElementById('end')
    if(title.value.trim()=="" || start.value.trim()=="" || end.value.trim()==""){
        alert("You need to fill some boxes in");
        return false;
    }
    else{
        true;
    }
}