function validateform(){
    //var name = document.myform.name.value;
    var password = document.myform.password.value;

    var x=document.myform.name.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
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