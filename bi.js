var user = {
    name:"Thiyagu",
    age:35,
    getName: function(){
        console.log('Username is ' + this.name);
    }
}

//user.getName()

var user1 = {
    name:"Lakshi",
    age:7,
}

//user.getName.bind(user1); // bind its give only function , it return the function // its only change the Ref of this
var x = user.getName.bind(user1);
x();