var request;
   function senddata()
   {
	   var val=validate();
	   if(val==false)
		   {
		   		
		   }else
			   {
				   var name=document.getElementById("login").value;
				   var admin_username=document.getElementById("uname").value;
				   var admin_password=document.getElementById("pass").value;
				   var url="/NumPG/HomeController?name="+name+"&admin_username="+admin_username+"&admin_password="+admin_password;
				   if(window.XMLHttpRequest)
					   {
					   request=new XMLHttpRequest();
					   }else if(window.ActiveXObject)
						   {
						   request=new ActiveXObject("Microsoft.XMLHTTP");
						   }
				   try
				   {
					   request.open("POST",url,true);
					   request.send();
					   request.onreadystatechange=getInfo;
				   }catch(e)
				   {
					   alert("Unable to connect");
				   }
			   }
   }
   
   function validate() {
		   var x = document.forms["f1"]["admin_username"].value;
		   var y = document.forms["f1"]["admin_password"].value;
		   if (x == "" || y == "") {
		     alert("All fields must be filled out");
		     return false;
		   }else
			   {
			   return true;
			   }
		 }
	function resetAlert()
	{
		document.getElementById("message").style.display='none';
	}
	
	/*-------------------------------------------------- AXAX and JS for Admin Change PAssword_____________*/
	
	 function senddata_ACP()
	   {
		 var h1=checkPassword();
		 if(h1==false)
			 {
			 
			 }else
				 {
	
					   var name=document.getElementById("bcp").value;
					   var admin_username=document.getElementById("uname").value;
					   var admin_password=document.getElementById("pass").value;
					   var admin_newpassword=document.getElementById("newpass").value;

					   var url="/FTB01/AdminServlet?name="+name+"&admin_username="+admin_username+"&admin_password="+admin_password+"&admin_newpassword="+admin_newpassword;
					   if(window.XMLHttpRequest)
						   {
						   request=new XMLHttpRequest();
						   }else if(window.ActiveXObject)
							   {
							   request=new ActiveXObject("Microsoft.XMLHTTP");
							   }
					   try
					   {
						   request.open("POST",url,true);
						   request.send();
						   request.onreadystatechange=getInfoAcp;
					   }catch(e)
					   {
						   alert("Unable to connect");
					   }
				 }
				   
	   }
	   function getInfoAcp()
	   {
		   if(request.readyState==4)
			   {
			   document.getElementById("op").style.display='';
			   var val=request.responseText;
			   $("#op").text(val);
			   
			   }
	   }
	 /*---------------------For validation change password*/  
	   function checkPassword() { 
			
		   var password1 = document.getElementById("newpass").value;
		   var password2 = document.getElementById("newpass1").value;
		   var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

		        
		   if (password1 != password2) { 
			   document.getElementById("np1").style.display='';
			   var msg1="*New Password did not match: Please try again!";
			   $("#np1").text(msg1);
		        return false; 
		    }
		    else if(password1.match(passw)){ 
		       	return true;
		    }
		 else { 
			 document.getElementById("np1").style.display='';	
		var msg2="*Password should contain alphanumeric ";
		$("#np1").text(msg2);
		return false;
		
		 }
	}
	   
	   function resetAlert1()
		{
			document.getElementById("op").style.display='none';
			document.getElementById("np1").style.display='none';
		}
	   
	   /*-------------------------------------------------- AXAX and JS for Admin Forgot Password_____________*/
	   
	   function senddata_AFP()
	   {
		
	
					   var name=document.getElementById("afp").value;
					   var admin_username=document.getElementById("uname").value;
					   var admin_email=document.getElementById("email").value;
					   var admin_epassword=document.getElementById("epass").value;

					   var url="/FTB01/AdminServlet?name="+name+"&admin_username="+admin_username+"&admin_email="+admin_email+"&admin_epassword="+admin_epassword;
					   if(window.XMLHttpRequest)
						   {
						   request=new XMLHttpRequest();
						   }else if(window.ActiveXObject)
							   {
							   request=new ActiveXObject("Microsoft.XMLHTTP");
							   }
					   try
					   {
						   request.open("POST",url,true);
						   request.send();
						   request.onreadystatechange=getInfoAfp;
					   }catch(e)
					   {
						   alert("Unable to connect");
					   }
				
				   
	   }
	   function getInfoAfp()
	   {
		   if(request.readyState==4)
			   {
			   var val=request.responseText;
			   var str2="*Wrong Credentials";
			   var result = val.localeCompare(str2);
			   if(result==0)
				   {
				   document.getElementById("afpalert").style.display='';	
					$("#afpalert").text(val);
				   
				   }else
					   {
					   alert(val);
					   window.location="AdminLogin.jsp";
					   }

			   }
	   }
	   function resetAlert2()
		{
			document.getElementById("afpalert").style.display='none';
		}