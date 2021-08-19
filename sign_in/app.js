function validate(username,password){
    var user="admin";
    var passwd="admin";
    let result1=username.value.match(user);
    let result2=password.value.match(passwd);
    if(result1)
    {
        if(result2)
        {
            alert("Login Successfull");
            window.open("welcome.html");
        }
    }
    else{
        alert("Invalid username or password")
    }
    
} 


//var username=document.getElementById("login").value
   // var password=document.getElementById("passwd").value

//    if(username=='admin'&& password=='admin')
//    {
//        alert("Login successfull");
//        window.open("welcome.html");
//    }
//    else{
//        alert("Login failed");
//    }







// function Email(inputText)
// {
// var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// let result=inputText.value.match(re);
// if(result)
// {
// alert("Valid email address!");

// }
// else
// {
// alert("You have entered an invalid email address!");

// }
// }