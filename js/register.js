let classes = (classes) => document.getElementsByClassName(classes);  
  
let id = (id) => document.getElementById(id);  
  
  
let username = id("username"),  
    email = id("email"),
    country = id("country"), 
    password = id("password"), 
    confirm = id("confirm"), 
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failuerIcon = classes("failure-icon");
    
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
    
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        engine(username, 0, "Username cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(country, 2, "Country  cannot be blank");
        engine(password, 3, "Password cannot be blank");
        engine(confirm, 4, "confirm cannot be blank");
        // debugger
        
        
        // if (password.value = (e) ) {
        //     alert("Do the right thing  ")
        //     failuerIcon[4].style.opacity = "1";
        //     successIcon[4].style.opacity = "0";
       
       
        // }
        if (password.value !==  confirm.value)   {
            alert("password are do not match");
            failuerIcon[4].style.opacity = "1";
            successIcon[4].style.opacity = "0";
         } //else {
            
        //     alert ("Welcome to Eazylife, Thanks for having an account with us and please always come around ");
            
        // }
        // if (password.value = (e))   {
        //     alert("Fill in your password");
        //     failuerIcon[4].style.opacity = "1";
        //     successIcon[4].style.opacity = "0";
        // } else {
        
        //     alert ("Welcome to Eazylife, Thanks for having an account with us and please always come around ");
             
        // } 
    });
        
        


// ! User registration
// Function to register a new user
function registerUser(username, password) {
  // Get existing registered users from local storage
  var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  // Create a new user object
  var newUser = {
    username: username,
    password: password
  };

  // Add the new user to the registered users array
  registeredUsers.push(newUser);

  // Update the registered users in local storage
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
}

// Function to check if a user is registered
function isUserRegistered(username, password) {
  // Get registered users from local storage
  var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  // Loop through the registered users and check if there's a match
  for (var i = 0; i < registeredUsers.length; i++) {
    var user = registeredUsers[i];
    if (user.username === username && user.password === password) {
      return true; // User is registered
    }
  }

  return false; // User is not registered
}

// Example usage
registerUser('john', 'password123');
registerUser('jane', 'pass456');

console.log(isUserRegistered('john', 'password123')); // Output: true
console.log(isUserRegistered('jane', 'wrongpassword')); // Output: false
