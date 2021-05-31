// grab items
const form = document.getElementById('form');
const name = document.getElementById('name');
// const email = document.getElementById('email');
const password = document.getElementById('password');
const confPwd = document.getElementById('confPwd');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// get input values
	const nameValue = name.value.trim();
	// const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const confPwdValue = confPwd.value.trim();

	if (nameValue === '') {
		// show error
		// add error class
		setErrorFor(name, "name cannot be blank");
	} else {
		// add success class
		setSuccessFor(name);
	}

	// if (emailValue === '') {
	// 	setErrorFor(email, 'email cannot be blank');
	// } else if(!isEmail(emailValue)) {
	// 	setErrorFor(email, 'invalid email');
	// } else {
	// 	setSuccessFor(email);
	// }

	if (passwordValue === '') {
		setErrorFor(password, "password cannot be blank");
	} else {
		setSuccessFor(password);
	}
	if (confPwdValue === '') {
		setErrorFor(confPwd, "confirm password cannot be blank");
	} else if(passwordValue != confPwdValue) {
		setErrorFor(confPwd, "passwords do not match");
	} else {
		setSuccessFor(confPwd);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	// add error message inside small
	small.innerText = message;

	// add error class
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// function isEmail(email) {
// 	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.
// 	[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// 	return re;
// }