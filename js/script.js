welcomeMessage();

// Welcome Message Function
function welcomeMessage() {
    // Show Popup
    let name = prompt("Welcome to Clara Company! What is your name?");

    // validate input
    if (name == null || name.trim() === "") {
        // If user cancels or enters an empty name, use "Guest" as default
        name = "Guest";
    }

    // Display Welcome Message
    document.getElementById('welcome-speech').innerHTML = `Hello, ${name}! Welcome to Clara Company.`;
}

var firstnameError = document.getElementById('firstname-error');
var lastnameError = document.getElementById('lastname-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateFirstName(){
	var name = document.getElementById('firstname').value;
        if(name.length == 0){
        firstnameError.innerHTML = 'First name is not filled yet!';
        return false;
        }
        firstnameError.innerHTML ='valid';
        return true;
}

function validateLastName(){
	var name = document.getElementById('lastname').value;
        if(name.length == 0){
        lastnameError.innerHTML = 'Last name is not filled yet!';
        return false;
        }
        lastnameError.innerHTML ='valid';
        return true;
}

function validateEmail(){
	var email = document.getElementById('email').value;
        if(email.length == 0){
        emailError.innerHTML = 'Email is not filled yet!';
        return false;
        }
        if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
        }
        emailError.innerHTML ='valid';
        return true;
}






function validateForm() { 







    
}