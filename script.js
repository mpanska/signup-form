const form = document.getElementById("form-to-submit");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const errorName = document.getElementById("name-err");
const errorLastName = document.getElementById("lastname-err");
const errorEmail = document.getElementById("email-err");
const errorPassword = document.getElementById("pass-err");


form.addEventListener("submit", (e) => {
    let messages = [];

    // check if first name is not empty or has a proper format
	if (firstName.value === '' || firstName.value == null) {
        message = "First Name cannot be empty";
        messages.push(message);
        errorName.innerText = message; 
        firstName.style.border = "hsl(0, 100%, 74%) solid 2px";
    }
	else if(!isNaN(firstName.value)){
        message = "Name cannot be a number";
        messages.push(message);
        errorName.innerText = message;
        firstName.style.border = "hsl(0, 100%, 74%) solid 2px";
    }
    else{
        errorName.innerText = " ";
        firstName.style.border = "hsl(246, 25%, 77%) 1px solid";
    }

    // check last name
    if (lastName.value === '' || lastName.value == null) {
        message = "Last name cannot be empty";
        messages.push(message);
        errorLastName.innerText = message;
        lastName.style.border = "hsl(0, 100%, 74%) solid 2px";
    }
    else if(!isNaN(lastName.value)){
        message = "Last Name cannot be a number";
        messages.push(message);
        errorLastName.innerText = message;
        lastName.style.border = "hsl(0, 100%, 74%) solid 2px";
    }
    else{
        errorLastName.innerText = " ";
        lastName.style.border = "hsl(246, 25%, 77%) 1px solid";
    }

    // check email
    if (email.value === '' || email.value == null) {
        message = "Email cannot be empty";
        messages.push(message);
        errorEmail.innerText = message;
        email.style.border = "hsl(0, 100%, 74%) solid 2px";

    }
    else if(!validateEmail(email.value)){
        message = "Looks like this is not an email";
        messages.push(message);
        errorEmail.innerText = message;
        email.style.border = "hsl(0, 100%, 74%) solid 2px";
    }
    else{
        errorEmail.innerText = "";
        email.style.border = "hsl(246, 25%, 77%) 1px solid";
    }
    
    // check password
    if (password.value === '' || password.value == null) {
        message = "Password cannot be empty";
        messages.push(message);
        errorPassword.innerText = message;
        password.style.border = "hsl(0, 100%, 74%) solid 2px";
    }
    else{
        errorPassword.innerText = " ";
        password.style.border = "hsl(246, 25%, 77%) 1px solid";
    }

    // don't submit the form if there're any errors
    if(messages.length > 0) {
        e.preventDefault();
    }

});


function validateEmail(mail) {
    var expr = /\S+@\S+\.\S+/;
    return expr.test(mail);
}