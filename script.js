function validateform(){
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if(name == null || name== "" || name.length<4){
        alert("Name can't be blank");
        return false;
    }

    else if(password.length<6){
        alert("Password must be atleast 6 character");
        return false;
    }
    else{
        alert("Form Successfully Submitted")
    }
}