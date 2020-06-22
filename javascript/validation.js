function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    var y = document.forms["myForm"]["password"].value;

    if (x == "" || y == "") {
      alert("Please fill the username and password correctly");
      return false;
    }else if(x==="user" && y==="password"){
		return true;
	}
  }

  function alertBox(){
    alert("Hi your message has been sent");
  }