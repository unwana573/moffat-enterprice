let classes = (classes) => document.getElementsByClassName(classes);  
let id = (id) => document.getElementById(id);  
  
  
  
  
  
let username = id("username"),  
    email = id("email"),
    password = id("password"), 
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failuerIcon = classes("failure-icon");
    
    
form.addEventListener("submit", (e) => {
        e.preventDefault();
    
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
});
    
   
let engine = (id, serial, message) =>   {  
    if (id.value.trim() === "")  {
        errorMsg[serial].innerHTML = message;
        failuerIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
    errorMsg[serial].innerHTML = "";
    failuerIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
    }
};   




   
 
  
  // ! User login
  function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var storedUserJSON = localStorage.getItem("userKey");
    if (storedUserJSON) {
      var storedUser = JSON.parse(storedUserJSON);
      if (username === storedUser.username && password === storedUser.password) {
        alert("Login successful!");
      } else {
        alert("Invalid username or password.");
      }
    } else {
      alert("No user registered.");
    }
  }
  
