let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.querySelector(".reg-button");
let myForm = document.querySelector(".myForm");
let regExEmail = /\S+@\S+\.\S+/;
let invalidPassword = document.getElementById("inv_password");

function checkInput() {

	if( name.value.trim() !== "" && regExEmail.test(email.value) && password.value.trim() !=="" && password.value.length >= 6) {
		button.disabled = false;
	} else {
		button.disabled = true;
	}

}

function passwordKeyUp() {
	invalidPassword.style.display = 'block';
	if( password.value.trim().length >= 6 ) {
		invalidPassword.style.display = 'none';
	}
}

myForm.addEventListener('submit', function(e) {
	e.preventDefault();
});