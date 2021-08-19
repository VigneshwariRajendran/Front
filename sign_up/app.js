function validate(){  
    var name=document.myform.login.value;  
    var password=document.myform.passwd.value;  
    var firstpassword=document.myform.passwd.value;  
    var secondpassword=document.myform.re-passwd.value;  
      
    if (name==null || name=="")
    {  
      alert("Name can't be blank");  
      return false;  
    }
    else if(password.length<6)
    {  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
     
                  
        else if(firstpassword==secondpassword)
        {  
        return true;  
        }  
        else
        {  
        alert("password must be same!");  
        return false;  
        }  
     }  